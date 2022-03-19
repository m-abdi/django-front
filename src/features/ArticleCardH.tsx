import * as React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "../Link";
import Typography from "@mui/material/Typography";

export default function MediaCard(props: any) {
  return (
    <Link href={`/articles/${props.id}`} underline="none" prefetch={false}>
      <Card
        sx={{
          inlineSize: "100%",
          blockSize: 160,
          margin: "10px",
          mb: 2,
          display: "flex",
          flexDirection: "row",
          boxShadow: 8,
        }}
      >
        <CardMedia
          component="img"
          height="160"
          sx={{ inlineSize: "250px !important" }}
          image={props.image}
          alt={props.alt}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", py: 1 }}>
          <Typography gutterBottom variant="h4" component="h3">
            {props.title}
          </Typography>
          <Typography component={"p"} variant="h6" sx={{mt: "0 !important"}} dangerouslySetInnerHTML={{__html: props.text.slice(0, 200) + "..."}}>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
