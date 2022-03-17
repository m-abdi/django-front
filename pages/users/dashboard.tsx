import { Box } from "@mui/system";
import React from "react";
import UsersAppbar from "../../src/PanelAppbar";

export default function dashboard(props: any) {
  return (
    <UsersAppbar logo={props.logo}>
      <Box sx={{blockSize: "70vh"}}>sfjosidfo</Box>
    </UsersAppbar>
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
