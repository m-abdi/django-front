import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const usersCollection = db.collection("users");
  // set some initial parameters
  params.exchanges = []
  const r = await usersCollection.insertOne(params);
  res.status(200).send(JSON.stringify(r));
}
