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
        sx={{ minInlineSize: 300, maxInlineSize: 450, blockSize: 350, mb: 5 }}
      >
        <CardMedia
          component="img"
          height="160"
          image={props.image}
          alt={props.alt}
        />
        <CardContent sx={{blockSize: "40%"}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text.slice(0, 140) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" href={`/articles/${props.id}`} size="small"  sx={{ml: "auto"}}>Read more...</Button>
        </CardActions>
      </Card>
    </Link>
  );
}
