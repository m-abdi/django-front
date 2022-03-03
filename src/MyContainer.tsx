import Container from "@mui/material/Container"
import React from 'react'

function MyContainer(props:any) {
  return (
    <Container maxWidth="lg">{props.children}</Container>
  )
}

export default MyContainer