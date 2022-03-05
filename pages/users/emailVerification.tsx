import { Container, Typography } from "@mui/material";

import Link from "../../src/Link";
import React from "react";
import { connectToDatabase } from "../../lib/mongodb";
import { useRouter } from "next/router";

export default function emailVerification() {
  const router = useRouter();
  const id = router.query.id;
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
        textAlign: "center"
      }}
    >
        <Typography component={"h1"} fontSize={20}>
      your email has been verified. you can
      <Link href="/users/login" sx={{marginInline: 1, fontWeight: "bold"}}>sign in</Link>
      now
      </Typography>
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  const { db } = await connectToDatabase();
  const usersCollection = db.collection("users");

  const u = await usersCollection.updateOne(
    { _id: context.query.id },
    { $set: { status: "active" } }
  );
  console.log(u);

  return {
    props: {},
  };
}
