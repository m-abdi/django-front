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
        flexFlow: mediumScreenMatch ? "row nowrap" : "column nowrap",
        justifyContent: "center",
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
          justifyContent: "center",
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
              1. {props.learner_instruction_title_1}
            </Typography>
            <Typography component={"p"} variant="body1">
            {props.learner_instruction_text_1}
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
              2. {props.learner_instruction_title_2}
            </Typography>
            <Typography component={"p"} variant="body1">
            {props.learner_instruction_text_2}
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ inlineSize: 200, blockSize: "auto", mr: 2 }}>
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/lists.png" width={200} height={200} />
            <Typography component={"h3"} variant="h5">
              3. {props.learner_instruction_title_3}
            </Typography>
            <Typography component={"p"} variant="body1">
            {props.learner_instruction_text_1}
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ inlineSize: 200, blockSize: "auto", mr: 2 }}>
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/report.png" width={200} height={200} />
            <Typography component={"h3"} variant="h5">
              4. {props.learner_instruction_title_4}
            </Typography>
            <Typography component={"p"} variant="body1">
            {props.learner_instruction_text_4}
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ inlineSize: 200, blockSize: "auto", mr: 2 }}>
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/review.png" width={200} height={140} />
            <Typography component={"h3"} variant="h5">
              5. {props.learner_instruction_title_5}
            </Typography>
            <Typography component={"p"} variant="body1">
            {props.learner_instruction_text_5}
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
