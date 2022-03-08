import { Box, borderRadius } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";

import Link from "../src/Link";
import React from "react";
import { styled } from "@mui/material/styles";

const HeroContainer = styled("section")({
  inlineSize: "100vw",
  blockSize: "100vh",
  backgroundImage: "url(/images/automaticTrading.webp)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  color: "white",
});

const HomeHeader = styled("header")({
  position: "fixed",
  textDecoration: "none",
  listStyle: "none",
  color: "inherit",
  backgroundColor: "wheat",
  borderRadius: "5px 5px 75px 75px",
});

const HeaderList = styled("ul")({
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  color: "inherit",
});

export default function landigPage() {
  return (
    //   hero
    <>
      {/* <HomeHeader>
        <HeaderList>
          <li>
            <Link
              href="/aboutUs"
              color={"inherit"}
              underline="none"
              sx={{ ":hover": { color: "wheat" } }}
            >
              <Typography component={"h4"} variant="h5">
                about us |
              </Typography>
            </Link>{" "}
          </li>

          <li>
            <Link
              href="/articles"
              color={"inherit"}
              underline="none"
              sx={{ ":hover": { color: "wheat" } }}
            >
              <Typography component={"h4"} variant="h5">
                articles |
              </Typography>
            </Link>
          </li>
          <li>
            <Link
              href="/users/login"
              color={"inherit"}
              underline="none"
              sx={{ ":hover": { color: "wheat" } }}
            >
              <Typography component={"h4"} variant="h5">
                sign in
              </Typography>
            </Link>
          </li>
        </HeaderList>
      </HomeHeader> */}
      <HeroContainer>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            blockSize: "100%",
          }}
        >
          <Box
            sx={{
              mt: "auto",
              mb: { xs: 8, md: 2 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component={"h1"}
              fontWeight="bold"
              sx={{ textAlign: "center", fontStyle: "italic" }}
            >
              “The best trading strategy in the world won’t do you any good if
              you allow emotions to trump logic.”
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/users/register"
              sx={{
                boxShadow: 17,
                color: "black",
                fontWeight: "bold",
                ":hover": { color: "white" },
              }}
            >
              <span style={{ textAlign: "center" }}>
                START TRADING WITHOUT EMOTIONS
              </span>
            </Button>
          </Box>
        </Container>
      </HeroContainer>
      <section
        className="u-align-right u-clearfix u-grey-5 u-section-2"
        id="sec-227e"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-container-style u-expanded-width-xs u-group u-image u-image-tiles u-image-1">
            <div className="u-container-layout u-container-layout-1" />
          </div>
          <img
            src="images/graphic-artificial-intelligence-trading-crypto-currency-by-snalyzing-all-indicators-vector-illustration_73426-562.webp"
            alt=""
            className="u-expanded-width-xs u-image u-image-default u-image-2"
            data-image-width={1380}
            data-image-height={776}
          />
          <div className="u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-1">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                  <span className="u-icon u-icon-circle u-palette-1-base u-spacing-15 u-icon-1">
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 511.986 511.986"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-868c"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlSpace="preserve"
                      className="u-svg-content"
                      viewBox="0 0 511.986 511.986"
                      id="svg-868c"
                    >
                      <g>
                        <path d="m496.986 370.039c8.284 0 15-6.716 15-15v-70.686c0-8.284-6.716-15-15-15h-25.507v-40.686h5.254c8.284 0 15-6.716 15-15v-70.686c0-8.284-6.716-15-15-15h-146.838c-17.964-73.052-84.014-127.404-162.531-127.404-92.285 0-167.364 75.079-167.364 167.364s75.079 167.364 167.364 167.364c26.047 0 50.721-5.984 72.726-16.644v21.378h-5.254c-8.284 0-15 6.716-15 15v70.685c0 8.284 6.716 15 15 15h5v55.686c0 8.284 6.716 15 15 15h241.897c8.284 0 15-6.716 15-15v-70.686c0-8.284-6.716-15-15-15h-5v-40.685zm-55.507-100.685h-141.071c9.424-12.334 17.178-26.007 22.914-40.686h118.158v40.686zm20.254-111.372v40.686h-129.843c1.857-9.964 2.838-20.233 2.838-30.727 0-3.344-.11-6.662-.305-9.958h127.31zm-431.733 9.959c0-75.743 61.622-137.364 137.364-137.364s137.364 61.621 137.364 137.364-61.621 137.364-137.364 137.364-137.364-61.621-137.364-137.364zm240.09 132.036c.267-.208.534-.414.8-.623h211.097v40.686h-211.897zm211.643 181.433h-211.897v-40.686h211.897zm-20-70.686h-206.897-5v-40.685h5.254 206.643z"></path>
                        <path d="m216.944 157.295c6.122-8.188 9.752-18.343 9.752-29.331 0-25.461-19.489-46.449-44.331-48.847v-21.45c0-8.284-6.716-15-15-15s-15 6.716-15 15v21.216h-17.775c-8.284 0-15 6.716-15 15v68.203.11 79.801c0 3.99 1.589 7.815 4.417 10.63 2.812 2.799 6.617 4.37 10.583 4.37h.067c.176-.001 8.062-.036 17.707-.074v21.29c0 8.284 6.716 15 15 15s15-6.716 15-15v-21.389c1.052-.002 1.984-.003 2.763-.003 30.254 0 54.868-24.614 54.868-54.868.001-18.398-9.112-34.698-23.051-44.658zm-39.33-48.411c10.521 0 19.082 8.56 19.082 19.081s-8.56 19.081-19.082 19.081c-3.169 0-9.179.017-15.723.041h-12.3v-38.203zm7.513 117.938c-6.462 0-23.092.062-35.537.113v-49.801c3.963-.016 8.28-.033 12.386-.047h23.151c13.712 0 24.868 11.156 24.868 24.868s-11.155 24.867-24.868 24.867z"></path>
                      </g>
                    </svg>
                  </span>
                  <h4 className="u-text u-text-1">CRYPTO</h4>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-2">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                  <span className="u-file-icon u-icon u-icon-circle u-palette-1-base u-spacing-15 u-icon-2">
                    <img src="images/4256662.png" alt="" />
                  </span>
                  <h4 className="u-text u-text-2">STOCK</h4>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-3">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
                  <span className="u-icon u-icon-circle u-palette-1-base u-spacing-15 u-icon-3">
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 512.012 512.012"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-c4a7"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlSpace="preserve"
                      className="u-svg-content"
                      viewBox="0 0 512.012 512.012"
                      id="svg-c4a7"
                    >
                      <g>
                        <path d="m59.998 332.666v87.346h61v92h210v-62.218c0-56.303 12.309-115.303 37.563-179.782h32.224l25.611 25.611c-2.817 5.875-4.398 12.451-4.398 19.39 0 24.813 20.187 45 45 45s45-20.187 45-45-20.187-45-45-45c-6.938 0-13.514 1.581-19.389 4.398l-34.398-34.398h-32.572c3.497-9.779 6.115-19.796 7.843-30.01h36.096c6.192 17.469 22.865 30.01 42.42 30.01 24.813 0 45-20.187 45-45s-20.187-45-45-45c-19.555 0-36.228 12.541-42.42 30h-33.58c0-10.152-.845-20.177-2.485-30h24.698l34.398-34.397c5.875 2.817 12.45 4.398 19.389 4.398 24.813 0 45-20.187 45-45s-20.187-45-45-45-45 20.187-45 45c0 6.939 1.581 13.514 4.398 19.389l-25.611 25.61h-19.994c-24.022-68.126-88.986-119.066-167.616-120-88.723-1.043-163.221 61.684-179.498 143.168-5.685 28.455-4.837 56.601 2.51 83.77l-36.173 62.25zm407-32.654c8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15 6.728-15 15-15zm0-120c8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15 6.728-15 15-15zm0-120c8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15 6.728-15 15-15zm-117.798 178.089c-.272.639-.533 1.273-.802 1.911h-92.44c6.565-8.725 11.274-18.921 13.531-30.01h88.481c-1.971 9.61-4.896 18.996-8.77 28.099zm-108.202-43.089c0 24.813-20.187 45-45 45s-45-20.187-45-45 20.187-45 45-45 45 20.187 45 45zm120-15h-91.509c-2.258-11.079-6.967-21.275-13.532-30h101.998c1.993 9.704 3.043 19.738 3.043 30zm-297.903-30.954c13.953-69.845 76.913-119.906 149.725-119.047 60.427.717 112.514 37.715 135.55 90.001h-152.372c-41.355 0-75 33.645-75 75s33.645 75 75 74.99h140.455c-23.819 63.823-35.455 122.919-35.455 179.792v32.218h-150v-92h-61v-72.655l-50.417-36.534 29.076-50.038c-.795-4.156-14.724-35.852-5.562-81.727z"></path>
                        <path d="m180.998 180.012h30v30h-30z" />
                      </g>
                    </svg>
                  </span>
                  <h4 className="u-text u-text-3">FOREX</h4>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-4">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                  <span className="u-icon u-icon-circle u-palette-1-base u-spacing-15 u-icon-4">
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 512 512"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-48f3"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlSpace="preserve"
                      className="u-svg-content"
                      viewBox="0 0 512 512"
                      id="svg-48f3"
                    >
                      <g>
                        <path d="m467.5 218.79c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.882v-27.225h37.882c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.882v-16.361c0-2.651-1.052-5.193-2.926-7.068l-28.917-28.941c-1.875-1.877-4.42-2.932-7.074-2.932h-16.365v-37.848c0-5.523-4.477-10-10-10s-10 4.477-10 10v37.848h-27.23v-37.848c0-5.523-4.477-10-10-10s-10 4.477-10 10v37.848h-27.202v-35.836c0-33.32-27.11-60.427-60.434-60.427-27.264 0-50.959 18.428-58.186 44.029-20.782 2.112-40.037 11.3-54.896 26.343-16.78 16.99-26.021 39.501-26.021 63.386 0 11.853 2.34 23.593 6.827 34.476-14.037 7.459-26.081 18.186-35.211 31.443-11.437 16.608-17.483 36.079-17.483 56.309 0 37.241 20.362 70.644 52.689 87.78-4.482 10.863-6.82 22.593-6.82 34.448 0 23.885 9.241 46.396 26.021 63.386 14.858 15.043 34.113 24.231 54.895 26.343 7.226 25.618 30.923 44.057 58.187 44.057 33.323 0 60.434-27.107 60.434-60.427v-35.864h27.202v37.876c0 5.523 4.477 10 10 10s10-4.477 10-10v-37.876h27.23v37.876c0 5.523 4.477 10 10 10s10-4.477 10-10v-37.876h16.365c2.652 0 5.195-1.053 7.071-2.929l28.917-28.913c1.875-1.875 2.929-4.419 2.929-7.071v-16.39h37.88c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.882v-27.196h37.882c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.882v-27.224h37.882c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.882v-27.196zm-248.028 273.21c-16.589 0-31.194-10.201-37.343-24.932 7.294-1.306 14.406-3.525 21.245-6.663 9.939-4.563 18.828-10.808 26.419-18.562 3.863-3.947 3.796-10.278-.15-14.142-3.947-3.863-10.277-3.796-14.142.15-5.875 6-12.762 10.837-20.469 14.375-8.144 3.736-16.776 5.807-25.659 6.167-38.072-.628-69.004-32.056-69.004-70.182 0-12.047 3.095-23.917 8.95-34.329 1.412-2.509 1.673-5.505.717-8.22-.955-2.716-3.035-4.888-5.706-5.961-30.27-12.157-49.83-41.093-49.83-73.715 0-32.631 19.557-61.555 49.824-73.686 5.946-3.215 7.613-7.941 5.001-14.175-5.859-10.442-8.956-22.326-8.956-34.366 0-38.126 30.932-69.554 69.004-70.182 8.827.359 17.466 2.432 25.657 6.166 7.721 3.544 14.603 8.385 20.456 14.389 1.96 2.01 4.56 3.02 7.162 3.02 2.516 0 5.035-.944 6.979-2.839 3.955-3.855 4.035-10.187.18-14.141-7.576-7.771-16.47-14.031-26.458-18.616-6.86-3.127-13.962-5.341-21.221-6.646 6.149-14.719 20.754-24.91 37.344-24.91 22.295 0 40.434 18.136 40.434 40.427v122.603h-31.132l-26.531-26.528c2.824-5.155 4.33-10.963 4.33-17.004 0-9.476-3.69-18.385-10.393-25.086-13.832-13.83-36.34-13.831-50.173 0-6.701 6.701-10.392 15.61-10.392 25.085s3.69 18.384 10.392 25.085c6.916 6.915 16.001 10.373 25.086 10.373 5.86 0 11.716-1.448 16.995-4.325l29.472 29.469c2.133 1.909 4.49 2.886 7.071 2.929h35.274v42.956h-62.667c-4.332-14.694-17.948-25.455-34.039-25.455-19.552 0-35.458 15.905-35.458 35.455 0 19.565 15.906 35.483 35.458 35.483 16.094 0 29.712-10.773 34.041-25.483h62.665v42.956h-35.274c-.268 0-.498.014-.71.034-2.318.164-4.591 1.124-6.364 2.897l-29.473 29.493c-13.46-7.335-30.702-5.324-42.078 6.05-6.708 6.708-10.398 15.624-10.392 25.107.006 9.469 3.701 18.364 10.392 25.036 6.918 6.917 16.004 10.374 25.09 10.374 9.082 0 18.164-3.456 25.073-10.364 6.701-6.682 10.396-15.576 10.402-25.045.004-6.05-1.503-11.866-4.332-17.028l26.535-26.553h31.129v122.631c.002 22.292-18.136 40.428-40.431 40.428zm-32.899-352.501c0 4.133-1.61 8.019-4.533 10.942-6.036 6.035-15.855 6.035-21.891 0-2.923-2.923-4.533-6.809-4.533-10.942s1.61-8.02 4.533-10.942c6.036-6.034 15.856-6.034 21.891 0 2.923 2.922 4.533 6.808 4.533 10.942zm-7.888 116.487c0 8.537-6.947 15.483-15.486 15.483-8.523 0-15.458-6.946-15.458-15.483 0-8.521 6.935-15.455 15.458-15.455 8.539 0 15.486 6.933 15.486 15.455zm7.888 116.523c-.003 4.121-1.609 7.991-4.533 10.906-6.036 6.034-15.856 6.035-21.901-.01-2.914-2.905-4.521-6.775-4.523-10.896-.003-4.135 1.607-8.024 4.533-10.95 6.035-6.033 15.855-6.034 21.889-.001.001.001.002.002.003.004 0 0 .001.001.001.001 2.925 2.926 4.534 6.813 4.531 10.946zm223.045.144-23.058 23.056h-106.655v-29.634h90.073c5.523 0 10-4.477 10-10v-55.218c0-5.523-4.477-10-10-10s-10 4.477-10 10v45.218h-80.073v-180.15h80.073v45.104c0 5.523 4.477 10 10 10s10-4.477 10-10v-55.104c0-5.523-4.477-10-10-10h-90.073v-29.662h106.652l23.061 23.081z"></path>
                        <path d="m369.979 245.958c-5.523 0-10 4.477-10 10v.028c0 5.523 4.477 9.986 10 9.986s10-4.491 10-10.014-4.478-10-10-10z"></path>
                      </g>
                    </svg>
                  </span>
                  <h4 className="u-text u-text-4">...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-grey-5 u-section-3"
        id="carousel_082c"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2 className="u-text u-text-default u-text-1">Future Of Trading</h2>
          <div className="u-border-2 u-border-palette-1-base u-shape u-shape-svg u-text-grey-5 u-shape-1">
            <svg
              className="u-svg-link"
              preserveAspectRatio="none"
              viewBox="0 0 160 50"
              style={{}}
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-0c8e"
              />
            </svg>
            <svg
              className="u-svg-content"
              viewBox="-1 -1 162 52"
              x="0px"
              y="0px"
              id="svg-0c8e"
              style={{ enableBackground: "new 0 0 160 50" }}
            >
              <path
                d="M133,26.7c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,22
	c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0
	l-3.8,4.7C146.9,20.2,142.3,20.2,133,26.7z M133,10.8c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0
	c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,6.1c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0C75.1-2,85.9-1.6,97,6.1
	c11.4,8,20.3,8.3,32.2,0C140.8-2,148.4-2,160,6.1l-3.8,4.7C146.9,4.3,142.3,4.3,133,10.8z M32.2,38c11,7.6,19,8.5,31.3,0
	c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0l-3.8,4.7c-9.3-6.5-13.9-6.5-23.3,0
	c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,38
	C11.2,30.2,20.6,29.9,32.2,38z"
              />
            </svg>
          </div>
          <div
            className="u-expanded-width-xs u-image u-image-circle u-preserve-proportions u-image-1"
            alt=""
            data-image-width={764}
            data-image-height={644}
          >
            <div
              className="u-preserve-proportions-child"
              style={{ paddingTop: "100%" }}
            />
          </div>
          <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-align-left u-container-style u-list-item u-repeater-item u-white u-list-item-1">
                <div className="u-container-layout u-similar-container u-container-layout-1">
                  <h5 className="u-text u-text-default u-text-2">
                    {" "}
                    Machine Learning
                  </h5>
                  <p className="u-text u-text-default u-text-3">
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </p>
                </div>
              </div>
              <div className="u-align-left u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-2">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <h5 className="u-text u-text-default u-text-4">
                    {" "}
                    Edge Computing
                  </h5>
                  <p className="u-text u-text-default u-text-5">
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </p>
                </div>
              </div>
              <div className="u-align-left u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-3">
                <div className="u-container-layout u-similar-container u-container-layout-3">
                  <h5 className="u-text u-text-default u-text-6">
                    {" "}
                    Artificial Intelligence
                  </h5>
                  <p className="u-text u-text-default u-text-7">
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="u-text u-text-default u-text-8">
            Image from{" "}
            <a
              href="https://www.freepik.com/photos/people"
              className="u-active-none u-border-1 u-border-active-grey-70 u-border-black u-border-hover-grey-70 u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1"
            >
              Freepik
            </a>
          </p>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-palette-1-base u-section-4"
        id="carousel_5f6d"
      >
        <img
          className="u-expanded-width u-image u-image-1"
          src="images/swa-min.jpg"
        />
        <div className="u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            <div className="u-align-left u-container-style u-list-item u-repeater-item u-shape-round u-white u-list-item-1">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                <div className="u-align-center u-container-style u-group u-palette-1-base u-radius-50 u-shape-round u-group-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <h2 className="u-custom-font u-font-oswald u-text u-text-1">
                      01
                    </h2>
                  </div>
                </div>
                <h5 className="u-text u-text-2"> Future</h5>
                <p className="u-text u-text-grey-60 u-text-3">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <a
                  href="https://nicepage.com/c/industrial-website-templates"
                  className="u-border-1 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-grey-60 u-text-body-color u-text-hover-grey-60 u-btn-1"
                >
                  learn more
                </a>
              </div>
            </div>
            <div className="u-align-left u-container-style u-list-item u-repeater-item u-shape-round u-white u-list-item-2">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                <div className="u-align-center u-container-style u-group u-palette-1-base u-radius-50 u-shape-round u-video-cover u-group-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-4">
                    <h2 className="u-custom-font u-font-oswald u-text u-text-4">
                      02
                    </h2>
                  </div>
                </div>
                <h5 className="u-text u-text-5"> Crypto basics</h5>
                <p className="u-text u-text-grey-60 u-text-6">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <a
                  href="https://nicepage.com/c/counter-html-templates"
                  className="u-border-1 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-grey-60 u-text-body-color u-text-hover-grey-60 u-btn-2"
                >
                  learn more
                </a>
              </div>
            </div>
            <div className="u-align-left u-container-style u-list-item u-repeater-item u-shape-round u-white u-list-item-3">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                <div className="u-align-center u-container-style u-group u-palette-1-base u-radius-50 u-shape-round u-video-cover u-group-3">
                  <div className="u-container-layout u-valign-middle u-container-layout-6">
                    <h2 className="u-custom-font u-font-oswald u-text u-text-7">
                      03
                    </h2>
                  </div>
                </div>
                <h5 className="u-text u-text-8"> Courses</h5>
                <p className="u-text u-text-grey-60 u-text-9">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <a
                  href="https://nicepage.com/c/sale-html-templates"
                  className="u-border-1 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-grey-60 u-text-body-color u-text-hover-grey-60 u-btn-3"
                >
                  learn more
                </a>
              </div>
            </div>
            <div className="u-align-left u-container-style u-list-item u-repeater-item u-shape-round u-white u-list-item-3">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                <div className="u-align-center u-container-style u-group u-palette-1-base u-radius-50 u-shape-round u-video-cover u-group-3">
                  <div className="u-container-layout u-valign-middle u-container-layout-6">
                    <h2 className="u-custom-font u-font-oswald u-text u-text-7">
                      04
                    </h2>
                  </div>
                </div>
                <h5 className="u-text u-text-8">Support</h5>
                <p className="u-text u-text-grey-60 u-text-12">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <a
                  href="https://nicepage.site"
                  className="u-border-1 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-grey-60 u-text-body-color u-text-hover-grey-60 u-btn-3"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="u-text u-text-grey-30 u-text-13">
          Image by{" "}
          <a
            href="https://www.freepik.com/photos/business"
            className="u-border-1 u-border-active-grey-25 u-border-hover-grey-25 u-border-white u-btn u-button-link u-button-style u-none u-text-grey-30 u-btn-5"
          >
            Freepik
          </a>
        </p>
      </section>
      <section className="u-clearfix u-grey-5 u-section-5" id="carousel_c9da">
        <div className="u-expanded-width u-palette-1-dark-1 u-shape u-shape-rectangle u-shape-1" />
        <div className="u-palette-1-light-2 u-shape u-shape-rectangle u-shape-2" />
        <div className="u-shape u-shape-rectangle u-white u-shape-3" />
        <img
          className="u-image u-image-1"
          src="images/-min.jpg"
          data-image-width={1200}
          data-image-height={1048}
        />
        <div className="u-align-left u-container-style u-group u-similar-fill u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <h2 className="u-text u-text-1"> AI &amp; Digital Platform</h2>
            <p className="u-large-text u-text u-text-variant u-text-2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat...
            </p>
            <p className="u-large-text u-text u-text-variant u-text-3">
              Image from{" "}
              <a
                href="https://www.freepik.com/photos/school"
                className="u-active-none u-border-1 u-border-active-grey-50 u-border-black u-border-hover-grey-50 u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1"
              >
                Freepik
              </a>
            </p>
            <a
              href="https://nicepage.com/c/tabs-website-templates"
              className="u-active-palette-1-light-1 u-border-none u-btn u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-hover-palette-1-light-1 u-palette-1-base u-btn-2"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-grey-5 u-section-6"
        id="sec-e7f8"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h2 className="u-text u-text-default u-text-1">
            {" "}
            Essential 8 Emerging Technologies
          </h2>
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <p className="u-text u-text-default u-text-2">
                      Sample text. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Sit amet tellus cras
                      adipiscing enim. Ut porttitor leo a diam sollicitudin.
                      Turpis in eu mi bibendum neque egestas congue quisque
                      egestas.
                    </p>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <p className="u-text u-text-default u-text-3">
                      Sample text. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Sit amet tellus cras
                      adipiscing enim. Ut porttitor leo a diam sollicitudin.
                      Turpis in eu mi bibendum neque egestas congue quisque
                      egestas.
                    </p>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-3">
                  <div className="u-container-layout u-container-layout-3">
                    <p className="u-text u-text-default u-text-4">
                      Sample text. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Sit amet tellus cras
                      adipiscing enim. Ut porttitor leo a diam sollicitudin.
                      Turpis in eu mi bibendum neque egestas congue quisque
                      egestas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-grey-5 u-section-7"
        id="carousel_d7d1"
      >
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl u-valign-middle-xs u-sheet-1">
          <h2 className="u-text u-text-default u-text-1">
            {" "}
            Technology Of The Future
          </h2>
          <div className="u-border-2 u-border-palette-1-base u-shape u-shape-svg u-text-grey-5 u-shape-1">
            <svg
              className="u-svg-link"
              preserveAspectRatio="none"
              viewBox="0 0 160 50"
              style={{}}
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-78f4"
              />
            </svg>
            <svg
              className="u-svg-content"
              viewBox="-1 -1 162 52"
              x="0px"
              y="0px"
              id="svg-78f4"
              style={{ enableBackground: "new 0 0 160 50" }}
            >
              <path
                d="M133,26.7c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,22
	c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0
	l-3.8,4.7C146.9,20.2,142.3,20.2,133,26.7z M133,10.8c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0
	c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,6.1c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0C75.1-2,85.9-1.6,97,6.1
	c11.4,8,20.3,8.3,32.2,0C140.8-2,148.4-2,160,6.1l-3.8,4.7C146.9,4.3,142.3,4.3,133,10.8z M32.2,38c11,7.6,19,8.5,31.3,0
	c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0l-3.8,4.7c-9.3-6.5-13.9-6.5-23.3,0
	c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,38
	C11.2,30.2,20.6,29.9,32.2,38z"
              />
            </svg>
          </div>
          <div className="u-palette-1-base u-shape u-shape-rectangle u-shape-2" />
          <img className="u-image u-image-1" src="images/-min2.jpg" />
          <div
            id="carousel-5989"
            data-interval={5000}
            data-u-ride="carousel"
            className="u-carousel u-slider u-slider-1"
          >
            <ol className="u-absolute-hcenter u-carousel-indicators u-hidden-xs u-carousel-indicators-1">
              <li
                data-u-target="#carousel-5989"
                className="u-active u-grey-30 u-shape-circle"
                data-u-slide-to={0}
                style={{ width: 10, height: 10 }}
              />
              <li
                data-u-target="#carousel-5989"
                className="u-grey-30 u-shape-circle"
                data-u-slide-to={1}
                style={{ width: 10, height: 10 }}
              />
            </ol>
            <div className="u-carousel-inner" role="listbox">
              <div className="u-active u-align-left u-carousel-item u-container-style u-slide u-white u-carousel-item-1">
                <div className="u-container-layout u-valign-middle u-container-layout-1">
                  <h3 className="u-text u-text-2">Simplicity Is Key</h3>
                  <p className="u-large-text u-text u-text-variant u-text-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="u-align-left u-carousel-item u-container-style u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-slide u-white u-carousel-item-2">
                <div className="u-container-layout u-valign-middle u-container-layout-2">
                  <h3 className="u-text u-text-4">Online Classes</h3>
                  <p className="u-large-text u-text u-text-variant u-text-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-icon-circle u-text-hover-palette-1-light-1 u-text-palette-1-base u-carousel-control-1"
              href="#carousel-5989"
              role="button"
              data-u-slide="prev"
            >
              <span aria-hidden="true">
                <svg viewBox="0 0 477.175 477.175">
                  <path
                    d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                  />
                </svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 477.175 477.175">
                  <path
                    d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                  />
                </svg>
              </span>
            </a>
            <a
              className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-icon-circle u-text-hover-palette-1-light-1 u-text-palette-1-base u-carousel-control-2"
              href="#carousel-5989"
              role="button"
              data-u-slide="next"
            >
              <span aria-hidden="true">
                <svg viewBox="0 0 477.175 477.175">
                  <path
                    d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 477.175 477.175">
                  <path
                    d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
          <p className="u-text u-text-default u-text-6">
            Image from{" "}
            <a
              href="https://www.freepik.com/photos/people"
              className="u-active-none u-border-1 u-border-active-grey-70 u-border-black u-border-hover-grey-70 u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1"
            >
              Freepik
            </a>
          </p>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-image u-shading u-section-8"
        id="carousel_4b76"
        data-image-width={1200}
        data-image-height={1200}
      >
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl u-sheet-1">
          <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-col">
                <div className="u-align-center u-container-style u-layout-cell u-size-30 u-white u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <h2 className="u-text u-text-default u-text-1">
                      Join our newsletter
                    </h2>
                    <div className="u-align-center u-form u-form-1">
                      <form
                        action="#"
                        method="POST"
                        className="u-clearfix u-form-horizontal u-form-spacing-0 u-inner-form"
                        style={{ padding: 0 }}
                        source="custom"
                        name="form"
                      >
                        <div className="u-form-email u-form-group">
                          <label
                            htmlFor="email-cd2c"
                            className="u-form-control-hidden u-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter a valid email address"
                            id="email-cd2c"
                            name="email"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                            required=""
                          />
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                          <a
                            href="#"
                            className="u-active-palette-1-light-1 u-border-1 u-border-active-palette-1-light-1 u-border-hover-palette-1-light-1 u-border-palette-1-base u-btn u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-btn-1"
                          >
                            notify me
                          </a>
                          <input
                            type="submit"
                            defaultValue="submit"
                            className="u-form-control-hidden"
                          />
                        </div>
                        <div className="u-form-send-message u-form-send-success">
                          {" "}
                          Thank you! Your message has been sent.{" "}
                        </div>
                        <div className="u-form-send-error u-form-send-message">
                          {" "}
                          Unable to send your message. Please fix errors then
                          try again.{" "}
                        </div>
                        <input
                          type="hidden"
                          defaultValue=""
                          name="recaptchaResponse"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="u-align-center u-container-style u-grey-5 u-layout-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <h3 className="u-text u-text-default u-text-2">
                      follow us
                    </h3>
                    <div className="u-social-icons u-spacing-10 u-social-icons-1">
                      <a
                        className="u-social-url"
                        title="facebook"
                        target="_blank"
                        href="https://facebook.com/name"
                      >
                        <span className="u-icon u-icon-circle u-social-facebook u-social-icon u-text-black u-icon-1">
                          <svg
                            className="u-svg-link"
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 112 112"
                            style={{}}
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="#svg-c37a"
                            />
                          </svg>
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 112 112"
                            x={0}
                            y={0}
                            id="svg-c37a"
                          >
                            <path
                              fill="currentColor"
                              d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2
	c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="u-social-url"
                        title="twitter"
                        target="_blank"
                        href="https://twitter.com/name"
                      >
                        <span className="u-icon u-icon-circle u-social-icon u-social-twitter u-text-black u-icon-2">
                          <svg
                            className="u-svg-link"
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 112 112"
                            style={{}}
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="#svg-0c98"
                            />
                          </svg>
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 112 112"
                            x={0}
                            y={0}
                            id="svg-0c98"
                          >
                            <path
                              fill="currentColor"
                              d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2
	c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7
	c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2
	c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5
	c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="u-social-url"
                        title="instagram"
                        target="_blank"
                        href="https://www.instagram.com/name"
                      >
                        <span className="u-icon u-icon-circle u-social-icon u-social-instagram u-text-black u-icon-3">
                          <svg
                            className="u-svg-link"
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 112 112"
                            style={{}}
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="#svg-e47b"
                            />
                          </svg>
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 112 112"
                            x={0}
                            y={0}
                            id="svg-e47b"
                          >
                            <path
                              fill="currentColor"
                              d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z
	 M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7
	V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7
	c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="u-social-url"
                        target="_blank"
                        data-type="Custom"
                        title="Custom"
                        href=""
                      >
                        <span className="u-icon u-social-custom u-social-icon u-text-black u-icon-4">
                          <svg
                            className="u-svg-link"
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 512 512"
                            style={{}}
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="#svg-457b"
                            />
                          </svg>
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 512 512"
                            x="0px"
                            y="0px"
                            id="svg-457b"
                            style={{ enableBackground: "new 0 0 512 512" }}
                          >
                            <g>
                              <g>
                                <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80    c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904    C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728    c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816    c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096    C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z"></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="u-text u-text-body-alt-color u-text-3">
            Image from{" "}
            <a
              href="https://www.freepik.com/photos/background"
              className="u-active-none u-border-1 u-border-white u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-btn-2"
              target="_blank"
            >
              Freepik
            </a>
          </p>
        </div>
      </section>
      <footer
        className="u-align-center u-clearfix u-footer u-grey-80 u-footer"
        id="sec-b796"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <p className="u-small-text u-text u-text-variant u-text-1">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
      </footer>
      <section className="u-backlink u-clearfix u-grey-80">
        <a
          className="u-link"
          href="https://nicepage.com/website-design"
          target="_blank"
        >
          <span>Website Design</span>
        </a>
        <p className="u-text">
          <span>created with</span>
        </p>
        <a
          className="u-link"
          href="https://nicepage.com/wysiwyg-html-editor"
          target="_blank"
        >
          <span>HTML editor</span>
        </a>
        .
      </section>
    </>
  );
}
