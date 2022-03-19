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
        backgroundColor: "secondary.main",
        borderRadius: "5% 5% 15% 15%",
        maxWidth: "100% !important",
        display: "flex",
        flexDirection: mediumScreenMatch ? "row" : "column",
        justifyContent: "space-around",
        
      }}
    >
      {" "}
      <Box sx={{ m: "auto" }}>
        <Image src="/images/teacher.png" width={300} height={320} />
        <Typography
          component={"h3"}
          variant={"h3"}
          fontWeight="bold"
          sx={{ m: "auto", textAlign: "center" }}
        >
          Teacher
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
              Create a teacher account.
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
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit", mr: 2 }}>
            <Image src="/images/lists.png" width={200} height={120} />
            <Typography component={"h3"} variant="h5">
              2. Create your lists
            </Typography>
            <Typography component={"p"} variant="body1">
              Search the target vocabularies to add to your lists.
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ inlineSize: 200, blockSize: "auto", mr: 2 }}>
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/share.png" width={200} height={200} />
            <Typography component={"h3"} variant="h5">
              3. Share your lists
            </Typography>
            <Typography component={"p"} variant="body1">
              Share your lists with a group of learners.
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ inlineSize: 200, blockSize: "auto", mr: 2 }}>
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/report.png" width={200} height={200} />
            <Typography component={"h3"} variant="h5">
              4. Get the results
            </Typography>
            <Typography component={"p"} variant="body1">
              Receive the participants’ reports in your profile.
            </Typography>
          </Paper>
        </Box>

        <Box
          sx={{
            inlineSize: 200,
            blockSize: "auto",
            mr: 2,
          }}
        >
          <Paper sx={{ boxShadow: 0, backgroundColor: "inherit" }}>
            <Image src="/images/review1.png" width={200} height={140} />
            <Typography component={"h3"} variant="h5">
              5. Give feedbacks
            </Typography>
            <Typography component={"p"} variant="body1">
              Share your feedback with the attendees.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
