import { Container } from "@mui/material";
import React from "react";
import ResponsiveNavBar from "../src/partials/Navbar";

export default function donate(props: any) {
  return (
    <ResponsiveNavBar
      logo={props.logo}
      about_us={props.about_us}
      telegram_id={props.telegram_id}
      instagram_page={props.instagram_page}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundImage: "url(/images/donate1.jpg)",
          minBlockSize: "100vh",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: "0.2"
        }}
      ></Container>
    </ResponsiveNavBar>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  const generalInfo = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/general/?locale=${locale}`
  );
  const articles = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/articles/?locale=${locale}`
  );

  const generalInfoJSON = await generalInfo.json();
  const articlesJSON = await articles.json();
  return {
    props: {
      instagram_page: generalInfoJSON.instagram_page,
      telegram_id: generalInfoJSON.telegram_id,
      hero_title: generalInfoJSON.hero_title,
      hero_text: generalInfoJSON.hero_text,
      teachers_title: generalInfoJSON.teachers_title,
      teachers_text: generalInfoJSON.teachers_text,
      learners_title: generalInfoJSON.learners_title,
      learners_text: generalInfoJSON.learners_text,
      about_us: generalInfoJSON.about_us,
      logo: process.env.NEXT_PUBLIC_API_URL + generalInfoJSON.logo,
      email: generalInfoJSON.email,
      language: generalInfoJSON.language,
      name: generalInfoJSON.name,
      newArticles: articlesJSON,
    },
  };
}
