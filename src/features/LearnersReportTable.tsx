import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/router";

function Row({ email, rowData }: { [key: string]: any }) {
  const [open, setOpen] = React.useState(false);
  
  const mark = rowData.reduce(
    (pv, cv) => (pv + cv.mark) / rowData.length, 0
    );
    

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {email}
        </TableCell>
        <TableCell align="center">
          {"time" in rowData ? rowData.time : "--"}
        </TableCell>
        <TableCell align="center">
          {"quantity" in rowData ? rowData.quantity : "--"}
        </TableCell>
        <TableCell align="center">{mark}</TableCell>
      </TableRow>
      <TableRow sx={{ backgroundColor: "rgba(255, 253, 208, 0.3)" }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                gutterBottom
                component="div"
              >
                Tests
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Word</TableCell>
                    <TableCell align="center">Spelling</TableCell>
                    <TableCell align="center">Definition</TableCell>
                    <TableCell align="center">Pronunciation(%)</TableCell>
                    <TableCell align="center">mark</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowData.map((t) => (
                    <TableRow key={t.word}>
                      <TableCell component="th" scope="row">
                        {t.test}
                      </TableCell>
                      <TableCell align="center">{t.spelling}</TableCell>
                      <TableCell align="center">{t.definition}</TableCell>
                      <TableCell align="center">{t.pronunciation}</TableCell>
                      <TableCell align="center">{t.mark}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function LearnersTable4Teacher({ data }: { data: any }) {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 7 }}>
      <Table aria-label="learners table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Learner</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Tests(Quantity)</TableCell>
            <TableCell align="center">Mark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.reportedWords &&
            Object.keys(data.reportedWords).map((email) => {
              return <Row email={email} rowData={data.reportedWords[email]} />;
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
