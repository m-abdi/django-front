// import { Container, Typography } from "@mui/material";

// import { Box } from "@mui/system";
// import React from "react";

// const levelColors = {
//   Beginner: "blue",
//   Intermediate: "orange",
//   Advanced: "red",
// };
// export default function Words({ source }: { source: any }) {
//   return (
//     <Container maxWidth="md">
//       <Box
//         sx={{
//           display: "flex",
//           flexFlow: "row wrap",
//           justifyContent: "space-between",
//           my: 3,
//         }}
//       >
//         <Typography component={"h1"} variant="h1">
//           {source.word}
//         </Typography>
//         <Typography
//           component={"h5"}
//           variant="h5"
//           sx={{ my: "auto" }}
//           color={levelColors[source.level]}
//         >
//           ({source.level})
//         </Typography>
//       </Box>
//       <Typography component="h2" variant="h3" fontStyle="italic">
//         Definition :
//       </Typography>
//       <Box sx={{ border: 1, borderRadius: 2, py: 3, px: 2, minBlockSize: 200 }}>
//         {source.definition}
//       </Box>
//       <Typography component="h2" variant="h3" fontStyle="italic">
//         Examples :
//       </Typography>
//       <Box component={"ol"} sx={{ border: 1, borderRadius: 2, py: 3, px: 2, minBlockSize: 200 }}>
//         {source.examples}
//       </Box>
//     </Container>
//   );
// }
// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const resp = await fetch(
//     process.env.NEXT_PUBLIC_API_URL + `/api/tests/?id=${params.id}`
//   );
//   const source = await resp.json();
//   return {
//     props: {
//       source: source,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const resp = await fetch(
//     process.env.NEXT_PUBLIC_API_URL + "/api/tests/?all=1"
//   );
//   const sources = await resp.json();

//   return {
//     paths: sources.map((s) => ({ params: { id: s.id } })),
//     fallback: true,
//   };
// }
