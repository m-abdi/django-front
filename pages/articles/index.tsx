import { Container, Grid, useMediaQuery } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useCallback, useRef, useState } from "react";

import ArticleCardH from "../../src/features/ArticleCardH";
import ArticleCardV from "../../src/features/ArticleCardV";
import BarLoader from "../../src/BarLoader";
import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import Link from "../../src/Link";
import React from "react";
import ResponsiveNavBar from "../../src/partials/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import getAppInfo from "../../src/logic/getAppInfo";
import { styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.primary.main}`,

  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: "auto",
  marginRight: "auto",

  width: "200px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "300px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export default function articles(props: any) {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(true);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const smallScreenMatch = useMediaQuery((theme: any) =>
    theme.breakpoints.up("sm")
  );
  const searchEndpoint = (query) =>
    process.env.NEXT_PUBLIC_API_URL + `/api/articles/?q=${query}`;

  const onChange = useCallback((event) => {
    if (!(typeof controller === "undefined")) {
      controller.abort();
    }
    let controller = new AbortController();
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query), { signal: controller.signal })
        .then((res) => res.json())
        .then((res) => {
          setResults(res);
          setLoading(false);
        })
        .catch((e) => null);
    } else {
      setResults([]);
    }
    setLoading(true);
  }, []);

  return (
    <ResponsiveNavBar {...props}>
      <Container maxWidth="lg" sx={{ minBlockSize: "70vh", mt: 10 }}>
        <Grid component={"div"} alignItems="center" container ref={searchRef}>
          <Grid item xs={12} md={4}>
            <Search>
              <SearchIconWrapper sx={{ px: 0, ml: 0 }}>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={onChange}
                placeholder="Search articles"
                inputProps={{ "aria-label": "search" }}
                sx={{ px: 3, inlineSize: "100%" }}
                value={query}
              />
            </Search>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              borderTop: 2,
              borderRadius: 1,
              minBlockSize: 700,
              my: 4,
              py: 3,
              px: 0,
            }}
          >
            {active && results.length > 0 && (
              <Box
                component={"ul"}
                sx={{
                  textDecoration: "none",
                  listStyle: "none",
                  padding: "0px",
                  display: "flex",
                  flexFlow: "column wrap",
                  alignItems: smallScreenMatch ? "flex-start" : "center",
                }}
              >
                {" "}
                {loading ? (
                  <BarLoader />
                ) : (
                  results &&
                  results.map(({ id, title, text, picture }) => (
                    <li
                      key={id}
                      style={{
                        marginBottom: "60px !important",
                        inlineSize: "100%",
                      }}
                    >
                      {smallScreenMatch ? (
                        <ArticleCardH
                          id={id}
                          title={title}
                          text={text}
                          image={process.env.NEXT_PUBLIC_API_URL + picture}
                        />
                      ) : (
                        <ArticleCardV
                          id={id}
                          title={title}
                          text={text}
                          image={process.env.NEXT_PUBLIC_API_URL + picture}
                        />
                      )}
                    </li>
                  ))
                )}
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </ResponsiveNavBar>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  const appInfo = await getAppInfo(locale);

  return {
    props: { ...appInfo },
  };
}
