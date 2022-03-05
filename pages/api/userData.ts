import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../lib/mongodb";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (session) {
    const { db } = await connectToDatabase();
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ email: session.user?.email });
    delete user.password
    res.status(200).json(user);
  } else {
    res.status(401).send({ error: "not signed in!" });
  }
}
