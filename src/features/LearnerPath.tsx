import { Container, Paper, Typography, useMediaQuery } from "@mui/material";

import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

export default function LearnerPath(props: any) {
  const smallScreenMatch = useMediaQuery((theme: any) =>
    theme.breakpoints.up("sm")
  );
  const mediumScreenMatch = useMediaQuery((theme: any) =>
    theme.breakpoints.up("md")
  );
  return (
    <Box
      maxWidth="lg"
      sx={{
        p: 3,
        pb: 8,
        backgroundColor: "primary.main",
        borderRadius: "5% 5% 15% 15%",
        maxWidth: "100% !important",
        display: "flex",
        flexDirection: mediumScreenMatch ? "row" : "column",
        justifyContent: "space-around",
      }}
    >
      {" "}
      <Box sx={{ m: "auto" }}>
        <Image src="/images/learner.png" width={300} height={320} />
        <Typography
          component={"h3"}
          variant={"h3"}
          fontWeight="bold"
          sx={{ m: "auto", textAlign: "center" }}
        >
          Learner
        </Typography>
      </Box>
      <Box sx={{ display: "block", m: "auto" }}>
        <Image
          src={
            mediumScreenMatch ? "/images/arrow.svg" : "/images/arrowDown.svg"
          }
          width={150}
          height={100}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: smallScreenMatch ? "row wrap" : "column wrap",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "inherit",
        }}
      >
        <Box
          sx={{
            inlineSize: 200,
            blockSize: "auto",
            backgroundColor: "inherit",
            mr: 2,
          }}
        >
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/signUp.png" width={200} height={200} />
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
            inlineSize: 200,
            blockSize: "auto",
            backgroundColor: "inherit",
            mr: 2,
          }}
        >
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/learning.png" width={200} height={120} />
            <Typography component={"h3"} variant="h5">
              2. Start learning
            </Typography>
            <Typography component={"p"} variant="body1">
              Learning definition, spelling, and pronunciation of the target
              vocabularies.
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ inlineSize: 200, blockSize: "auto", mr: 2 }}>
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/lists.png" width={200} height={200} />
            <Typography component={"h3"} variant="h5">
              3. Create your lists
            </Typography>
            <Typography component={"p"} variant="body1">
              Make personal lists based on your needs.
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ inlineSize: 200, blockSize: "auto", mr: 2 }}>
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/report.png" width={200} height={200} />
            <Typography component={"h3"} variant="h5">
              4. Get your report
            </Typography>
            <Typography component={"p"} variant="body1">
              Receive your activation reports in your profile.
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ inlineSize: 200, blockSize: "auto", mr: 2 }}>
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/review.png" width={200} height={140} />
            <Typography component={"h3"} variant="h5">
              5. Review
            </Typography>
            <Typography component={"p"} variant="body1">
              Revise the vocabulary or switch to the next word.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
