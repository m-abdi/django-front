import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../lib/mongodb";
import emailSender from "lib/nodemailer";
import { v4 as uuidv4 } from 'uuid';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const params = JSON.parse(req.body);
    const { db } = await connectToDatabase();
    const usersCollection = db.collection("users");
    // set some initial parameters
    params.exchanges = [];
    params.bots = [];
    params._id = uuidv4()
    params.status = "inactive"
    const r = await usersCollection.insertOne(params);
    const emailResop = await emailSender(`${params.email}`, 'Verification Link', params.firstName, `/users/activateUser?id=${params._id}`)
    res.status(200).send(JSON.stringify(r));
  } catch(e) {
    res.status(500).send("");
  }
}
