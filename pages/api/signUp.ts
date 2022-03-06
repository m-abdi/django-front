import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../lib/mongodb";
import emailSender from "lib/nodemailer";
import { v4 as uuidv4 } from 'uuid';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const usersCollection = db.collection("users");
  // set some initial parameters
  params.exchanges = [];
  params.bots = [];
  params._id = uuidv4()
  params.status = "inactive"
  const emailResop = await emailSender(`${params.email}`, 'Verification Link', `Hello\n${params._id}`)
  const r = await usersCollection.insertOne(params);
  res.status(200).send(JSON.stringify(r));
}
