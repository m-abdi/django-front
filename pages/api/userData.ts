import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../lib/mongodb";
import { getSession } from "next-auth/react";
import giveMeKucoinClient from "lib/Kucoin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (session) {
    const { db } = await connectToDatabase();
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ email: session.user?.email });
    delete user.password;
    for (let exc of user.exchanges) {
      if (exc.exchange === "Kucoin") {
        const kucoinClient = giveMeKucoinClient(
          exc.apiKey,
          exc.apiSecret,
          exc.passphrase
        );
        const r = await kucoinClient.getAccounts();
        exc.balance = r.data;
      }
    }
    res.status(200).json(user);
  } else {
    res.status(401).send({ error: "not signed in!" });
  }
}
