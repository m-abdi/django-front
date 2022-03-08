import * as React from "react";

import {Bots as BotsType} from "src/Types"
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(name: string, pairs: string) {
  return { name, pairs };
}


export default function DenseTable({bots}: {bots: BotsType}) {
const rows = bots.map((b)=>createData(b.bot, b.pairs))

console.log(rows);

  return (
    <TableContainer>
      <Table
        size="small"
        aria-label="a dense table"
        sx={{ inlineSize: "90%" }}
      >
        {/* <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Pairs</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.pairs.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
