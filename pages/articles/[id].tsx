import { Container, Typography } from "@mui/material";

import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ResponsiveNavBar from "../../src/partials/Navbar";
import getAllArticles from "../../src/logic/getAllArticles";
import getAppInfo from "../../src/logic/getAppInfo";

export default function Article(props: any) {
  return (
    <ResponsiveNavBar {...props}>
      <Head>
        <title>{props.article.title + " | " + "Kakoota"}</title>
      </Head>
      <Container maxWidth="lg" sx={{ mt: 15, minBlockSize: "90vh" }}>
        <img
          src={process.env.NEXT_PUBLIC_API_URL + props.article.picture}
          width={500}
          height={300}
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          alt="ap"
          title={props.article.title}
        />
        <Typography component={"h1"} variant="h2" fontWeight={"bold"}>
          {props.article.title}
        </Typography>
        <Divider />
        <Typography component={"p"} variant="h6">
          {props.article.text}
        </Typography>
      </Container>
    </ResponsiveNavBar>
  );
}

export async function getStaticProps(context: any) {
  const appInfo = await getAppInfo(context.locale);
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/articles/?id=${context.params.id}`
  );
  const article = await resp.json();
  return {
    props: { article: article, ...appInfo },
  };
}

export async function getStaticPaths() {
  const articles = await getAllArticles();
  return {
    paths: articles.map((a) => {
      return { params: a };
    }),
    fallback: true,
  };
}
