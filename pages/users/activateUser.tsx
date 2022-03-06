import { Container, Typography } from "@mui/material";

import Link from "~/src/Link";
import { connectToDatabase } from "../../lib/mongodb";
import ftxMainClient from "lib/FTX";
import { giveMeFTXSubaccount } from "lib/FTX";

export default function activateUser(props: any) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: 3,
        blockSize: "60vh",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {" "}
      {props.status ? (
        <Typography component={"h1"} fontSize={20}>
          your email has been verified. you can
          <Link
            href="/users/login"
            sx={{ marginInline: 1, fontWeight: "bold" }}
          >
            sign in
          </Link>
          now
        </Typography>
      ) : (
        <Typography component={"h1"} fontSize={20}>
          network error. try again later !
        </Typography>
      )}
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  const params = context.query;
  const { db } = await connectToDatabase();
  const usersCollection = db.collection("users");
  try {
    const user = await usersCollection.findOne({ _id: params.id });
    
    if (user.status === "inactive") {
      await ftxMainClient.deleteSubaccount(user.email)
      const cresp = await ftxMainClient.createSubaccount(user.email);
      
      if (cresp.success) {
        const depositList = await giveMeFTXSubaccount(
          user.email
        ).getDepositAddress({
          
          coin: "USDT",
          method: "trx"
        });
        const address = depositList.result.address
        const method = depositList.result.method
        const currency = "USDT"
        await usersCollection.updateOne(
          { _id: params.id },
          { $set: { status: "active", ftxSubaccount: user.email, wallet: {[currency]: {[method]: address}} } }
        );
        return {
          props: {
            status: true,
          },
        };
      } else {
        return {
          props: {
            status: false,
          },
        };
      }
    } else {
      return {
        props: {
          status: true,
        },
      };
    }
  } catch (e) {
    return {
      props: {
        status: false,
      },
    };
  }
}
