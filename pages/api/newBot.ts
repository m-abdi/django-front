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
    // check repeateation !!!!
    // for (let b of user.exchanges) {
    //   if (b.bot === params.bot && b.account === params.account) {
    //     res.status(400).send({
    //       error: "there is already an active bot with this name for this account",
    //     });

    //     return;
    //   }
    // }
    const newUser = await usersCollection.updateOne(
      { email: session.user?.email },
      { $push: { bots: params } }
    );
    res.status(200).send(JSON.stringify(newUser));
  } else {
    res.status(401).send({ error: "not signed in!" });
  }
}
