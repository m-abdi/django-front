import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../lib/mongodb";
import ftxMainClient from "lib/FTX";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (session) {
    try {
      const { db } = await connectToDatabase();
      const usersCollection = db.collection("users");
      const user = await usersCollection.findOne({
        email: session.user?.email,
      });

      const balances = await ftxMainClient.getSubaccountBalances(
        user.ftxSubaccount
      );
      if (balances.success) {
        // res.status(200).json(balances.result);
        res.status(200).json([{
          coin: "USDT",
          free: 4321.2,
          total: 4340.2,
          spotBorrow: 0,
          availableWithoutBorrow: 2320.2,
        }]);
      } else {
        res.status(400).json([]);
      }
    } catch (e) {
      console.log(e);

      res.status(400).json("[]");
    }
  } else {
    res.status(401).send({ error: "not signed in!" });
  }
}
