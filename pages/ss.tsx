import { Container, Paper, Typography, useMediaQuery } from "@mui/material";

import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

export default function ss() {
  const smallScreenMatch = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", flexFlow: smallScreenMatch ?  "row wrap" : "column wrap", justifyContent: "center" }}>
        <Box sx={{ inlineSize: 200, blockSize: 400 }}>
          <Paper sx={{ boxShadow: 0 }}>
            <Image src="/images/signUp.jpg" width={200} height={200} />
            <Typography component={"h3"} variant="h5">
              1. Sign up
            </Typography>
            <Typography component={"p"} variant="body1">
              Choose a language and your proficiency level or take a proficiency
              test.
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            inlineSize: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mx: 2,
          }}
        >
          <Image src={smallScreenMatch ?  "/images/arrow.svg": "/images/arrowDown.svg"} width={100} height={60} />
        </Box>
        <Box sx={{ inlineSize: 200, blockSize: 400 }}>
          <Paper sx={{ boxShadow: 0 }}>
            <Image src="/images/learning.jpg" width={200} height={120} />
            <Typography component={"h3"} variant="h5">
              2. Start learning
            </Typography>
            <Typography component={"p"} variant="body1">
              Learning definition, spelling, and pronunciation of the target
              vocabularies.
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            inlineSize: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            m: 2,
          }}
        >
          <Image src={smallScreenMatch ?  "/images/arrow.svg": "/images/arrowDown.svg"} width={100} height={60} />
        </Box>
        <Box sx={{ inlineSize: 200, blockSize: 400 }}>
          <Paper sx={{ boxShadow: 0 }}>
            <Image src="/images/lists.jpg" width={200} height={200} />
            <Typography component={"h3"} variant="h5">
              3. Create your lists
            </Typography>
            <Typography component={"p"} variant="body1">
              Make personal lists based on your needs.
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            inlineSize: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            m: 2,
          }}
        >
          <Image src={smallScreenMatch ?  "/images/arrow.svg": "/images/arrowDown.svg"} width={100} height={60} />
        </Box>
        <Box sx={{ inlineSize: 200, blockSize: 400 }}>
          <Paper sx={{ boxShadow: 0 }}>
            <Image src="/images/report.jpg" width={200} height={200} />
            <Typography component={"h3"} variant="h5">
              4. Get your report
            </Typography>
            <Typography component={"p"} variant="body1">
              Receive your activation reports in your profile.
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            inlineSize: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            m: 2,
          }}
        >
          <Image src={smallScreenMatch ?  "/images/arrow.svg": "/images/arrowDown.svg"} width={100} height={60} />
        </Box>
        <Box sx={{ inlineSize: 200, blockSize: 400 }}>
          <Paper sx={{ boxShadow: 0 }}>
            <Image src="/images/review.jpg" width={200} height={140} />
            <Typography component={"h3"} variant="h5">
              5. Review
            </Typography>
            <Typography component={"p"} variant="body1">
              Revise the vocabulary or switch to the next word.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
