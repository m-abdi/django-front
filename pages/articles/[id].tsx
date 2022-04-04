import { Container, Typography, useMediaQuery } from "@mui/material";

import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import { GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ResponsiveNavBar from "../../src/partials/Navbar";
import getAllArticles from "../../src/logic/getAllArticles";
import getAppInfo from "../../src/logic/getAppInfo";

export default function Article(props: any) {
  const smallScreenMatch = useMediaQuery((theme: any) =>
    theme.breakpoints.up("sm")
  );
  return (
    <ResponsiveNavBar {...props}>
      <Head>
        <title>{props.article.title + " | " + "Kakoota"}</title>
      </Head>
      <Container maxWidth="lg" sx={{ mt: 15, minBlockSize: "90vh" }}>
        <img
          src={"http://127.0.0.1:8000" + props.article.picture}
          width={500}
          height={300}
          style={{
            display: "block",
            maxInlineSize: "100vw",
            marginLeft: smallScreenMatch ? "auto" : 0,
            marginRight: "auto",
          }}
          alt="ap"
          title={props.article.title}
        />
        <Typography component={"h1"} variant="h2" fontWeight={"bold"}>
          {props.article.title}
        </Typography>
        <Divider />
        <Typography
          component={"p"}
          variant="h6"
          dangerouslySetInnerHTML={{ __html: props.article.text }}
        ></Typography>
      </Container>
    </ResponsiveNavBar>
  );
}

export async function getStaticProps(context: any) {
  const appInfo = await getAppInfo(context.locale);
  const resp = await fetch(
    `http://127.0.0.1:8000/public/articles/?id=${context.params.id}`
  );
  const article = await resp.json();
  return {
    props: { article: article, ...appInfo },
  };
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
  const articles = await getAllArticles();
  return {
    paths: articles.map((a) => {
      return { params: a };
    }),
    fallback: "blocking",
  };
};
