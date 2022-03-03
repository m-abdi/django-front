import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../lib/mongodb";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (session) {
    const params = JSON.parse(req.body);
    const { db } = await connectToDatabase();
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ email: session.user?.email });
    // check repeateation !!!!
    for (let e of user.exchanges) {
      if (e.apiKey === params.apiKey) {
        res
          .status(400)
          .send({
            error: "there is already an exchange account with this key",
          });
      }
    }
    user.exchanges.push(params);
    const newUser = await usersCollection.updateOne(
      { email: session.user?.email },
      { $set: { exchanges: user.exchanges } }
    );
    res.status(200).send(JSON.stringify(newUser));
  } else {
    res.status(401).send({ error: "not signed in!" });
  }
}
