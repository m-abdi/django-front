import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../lib/mongodb";
import emailSender from "lib/nodemailer";
import { v4 as uuidv4 } from "uuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const params = req.query;
    const { db } = await connectToDatabase();
    const usersCollection = db.collection("prices");
    const potentialUser = await usersCollection.find({ exchange: params.source });
    res.status(200).send(JSON.stringify(await potentialUser.toArray()));
  } catch (e) {
    res.status(500).send("");
  }
}
