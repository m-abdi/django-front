import { Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import LearnersReportTable from "../../src/features/LearnersReportTable";
import PanelAppbar from "../../src/PanelAppbar";
import getListDetails from "../../src/logic/getListDetails";
import BarLoader from "../../src/BarLoader";
import NetworkError from "../../src/NetworkError";
export default function learnersReports(props: any) {
  // states
  const [listName, setListName] = useState("");
  // other hooks
  const router = useRouter();
  const { listDetail, isListDetailLoading, isListDetailError } = getListDetails(
    router.query.listId as string
  );
  return (
    <PanelAppbar logo="/general/logo.svg">
      <Typography component="h2" variant="h5">
        Participated Learners in {listName}
      </Typography>
      <Divider sx={{ mb: 3, mt: 2 }} />
      {listDetail ? (
        <LearnersReportTable data={listDetail} />
      ) : isListDetailLoading ? (
        <BarLoader />
      ) : (
        isListDetailError && <NetworkError />
      )}
    </PanelAppbar>
  );
}
