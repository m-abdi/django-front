import React, { useContext, useEffect } from "react";
import BarLoader from "../../src/BarLoader";
import NetworkError from "../../src/NetworkError";
import PanelAppbar from "../../src/PanelAppbar";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import AggregatedResult from "../../src/features/AggregatedResult";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { useTheme } from "@emotion/react";
import useAggInfo from "../../src/logic/useAggregatedInfo";
export default function Dashboard() {
  // other hooks
  const theme = useTheme();
  const router = useRouter();
  const { aggInfo, isAggInfoLoading, isAggInfoError } = useAggInfo();

  
  //
  const Agg = [
    {
      title: "Learners",
      description: "have participated in your tests",
      icon: <AccountBoxOutlinedIcon sx={{ fontSize: "inherit" }} />,
      color: "white",
      backgroundColor: "#2b8ad2",
    },
    {
      title: "Tests",
      description: "have been created by you",
      icon: <ArticleOutlinedIcon sx={{ fontSize: "inherit" }} />,
      color: "white",
      backgroundColor: "red",
    },
    {
      title: "Minutes",
      descripiton: "are spent on your tests",
      icon: <AccessTimeOutlinedIcon sx={{ fontSize: "inherit" }} />,
      color: "white",
      backgroundColor: "purple",
    },
  ];

  const AggregatedResults = styled("section")({
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-around",
  });
  //
  return (
    <PanelAppbar logo="/general/logo.svg">
      <AggregatedResults>
        {Agg.map((a) => (
          <AggregatedResult data={a} />
        ))}
      </AggregatedResults>
    </PanelAppbar>
  );
}
