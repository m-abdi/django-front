import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react'
import useArticles from "src/logic/articlesHook";
import NetworkError from "src/NetworkError";
import Barloader from "src/BarLoader";

export default function ii() {
    const { articles, isLoading, isError } = useArticles();
  useEffect(() => {
    (async () => {
      const flickityModule = await import("flickity");
      var elem = document.querySelector(".carousel");
      var flkty = new flickityModule.default(elem, {
        // options
        cellAlign: "left",
        contain: true,
      });
    })();
  }, [articles]);
  return (
    <Container
            maxWidth="md"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography
              component={"h2"}
              variant="h2"
              sx={{
                p: 2,
                backgroundImage: "url(/images/border.png)",
                backgroundPosition: "left bottom",
                backgroundRepeat: "no-repeat",
              }}
            >
              Articles
            </Typography>
            {/* articles flexbox */}

            {isLoading ? (
              <Barloader />
            ) : isError ? (
              <NetworkError />
            ) : (
              articles && (
                <div className="carousel" data-flickity='{ "autoPlay": true }'>
                  {articles.map((a) => (
                    <div className="carousel-cell">
                      <Paper
                        sx={{
                          blockSize: 500,
                          inlineSize: 350,
                          borderRadius: 3,
                          display: "flex",
                          flexDirection: "column",
                          mx: 4,
                        }}
                      >
                        <Image
                          src={process.env.NEXT_PUBLIC_API_URL + a.picture}
                          width={350}
                          height={250}
                        />
                        {/* title and short text box */}
                        <Box sx={{ px: 2, pb: 1, flexGrow: 1 }}>
                          <Typography
                            component={"h3"}
                            variant="h3"
                            fontWeight={"bold"}
                          >
                            {a.title}
                          </Typography>
                          <Typography component={"p"} variant="body1">
                            {a.text}
                          </Typography>
                        </Box>
                        <Button
                          size="large"
                          variant="contained"
                          color="info"
                          sx={{ display: "block", mx: "auto", mb: 1 }}
                        >
                          Read more
                        </Button>
                      </Paper>
                    </div>
                  ))}
                </div>
              )
            )}
          </Container>
  )
}
