import { Box, Typography } from "@mui/material";

import Footer from "../src/partials/Footer";
import React from "react";
import ResponsiveNavBar from "../src/partials/Navbar";

export default function contactUs(props) {
  return (
    <div>
      <ResponsiveNavBar logo={props.logo} color="default" />
      <Box component="section"
        className="u-clearfix u-palette-1-base u-section-9"
        id="carousel_f624"
        sx={{backgroundColor: "primary.main"}}
        
      >
        <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
          <div className="u-align-center u-container-style u-expanded-width-xs u-group u-white u-group-1">
            <div className="u-container-layout u-valign-top u-container-layout-1">
              <Typography component={"h2"} variant="h2" fontWeight={"bold"}>Contact us</Typography>
              <div className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-expanded-width-xs u-form u-form-1">
                <form
                  action="#"
                  method="POST"
                  className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form"
                  style={{ padding: 10 }}
                >
                  <div className="u-form-group u-form-name u-form-group-1">
                    <label
                      htmlFor="name-5a14"
                      className="u-form-control-hidden u-label"
                      wfd-invisible="true"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      id="name-5a14"
                      name="name"
                      className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
                      required=""
                    />
                  </div>
                  <div className="u-form-email u-form-group u-form-group-2">
                    <label
                      htmlFor="email-5a14"
                      className="u-form-control-hidden u-label"
                      wfd-invisible="true"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter a valid email address"
                      id="email-5a14"
                      name="email"
                      className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
                      required=""
                    />
                  </div>
                  <div className="u-form-group u-form-message u-form-group-3">
                    <label
                      htmlFor="message-5a14"
                      className="u-form-control-hidden u-label"
                      wfd-invisible="true"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Enter your message"
                      rows={4}
                      cols={50}
                      id="message-5a14"
                      name="message"
                      className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="u-align-center u-form-group u-form-submit u-form-group-4">
                    <a
                      href="#"
                      className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1"
                    >
                      Submit
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                      wfd-invisible="true"
                    />
                  </div>
                  <div
                    className="u-form-send-message u-form-send-success"
                    wfd-invisible="true"
                  >
                    {" "}
                    Thank you! Your message has been sent.{" "}
                  </div>
                  <div
                    className="u-form-send-error u-form-send-message"
                    wfd-invisible="true"
                  >
                    {" "}
                    Unable to send your message. Please fix errors then try
                    again.{" "}
                  </div>
                  <input
                    type="hidden"
                    defaultValue=""
                    name="recaptchaResponse"
                    wfd-invisible="true"
                  />
                </form>
              </div>
            </div>
          </div>
          <img
            src="/images/wqe-min.jpg"
            alt=""
            className="u-expanded-width-xs u-image u-image-default u-image-1"
            data-image-width={800}
            data-image-height={948}
          />
          <div className="u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-container-style u-list-item u-palette-1-light-3 u-repeater-item u-list-item-1">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-2">
                  <span className="u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 513.64 513.64"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-d5b6"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlSpace="preserve"
                      className="u-svg-content"
                      viewBox="0 0 513.64 513.64"
                      x="0px"
                      y="0px"
                      id="svg-d5b6"
                      style={{ enableBackground: "new 0 0 513.64 513.64" }}
                    >
                      <g>
                        <g>
                          <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72    c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68    c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44    l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h5 className="u-text u-text-palette-1-base u-text-3">
                    Call Us
                  </h5>
                  <p className="u-text u-text-4">
                    1 (234) 567-891, 1 (234) 987-654
                  </p>
                </div>
              </div>
              <div className="u-container-style u-list-item u-palette-1-light-3 u-repeater-item u-list-item-2">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-3">
                  <span className="u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 512 512"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-fb66"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlSpace="preserve"
                      className="u-svg-content"
                      viewBox="0 0 512 512"
                      x="0px"
                      y="0px"
                      id="svg-fb66"
                      style={{ enableBackground: "new 0 0 512 512" }}
                    >
                      <g>
                        <g>
                          <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5    c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021    C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333    s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z" />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h5 className="u-text u-text-palette-1-base u-text-5">
                    Location
                  </h5>
                  <p className="u-text u-text-6">
                    121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
                  </p>
                </div>
              </div>
              <div className="u-container-style u-list-item u-palette-1-light-3 u-repeater-item u-list-item-3">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-4">
                  <span className="u-icon u-icon-circle u-text-palette-1-base u-icon-3">
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 512 512"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-27f6"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlSpace="preserve"
                      className="u-svg-content"
                      viewBox="0 0 512 512"
                      id="svg-27f6"
                    >
                      <g>
                        <path d="m386.058 256c0-8.284 6.716-15 15-15h31.587c-7.224-85.814-75.831-154.421-161.645-161.645v31.588c0 8.284-6.716 15-15 15s-15-6.716-15-15v-31.588c-85.814 7.224-154.421 75.831-161.645 161.645h31.587c8.284 0 15 6.716 15 15s-6.716 15-15 15h-31.587c7.224 85.814 75.831 154.421 161.645 161.645v-31.588c0-8.284 6.716-15 15-15s15 6.716 15 15v31.588c85.814-7.224 154.421-75.831 161.645-161.645h-31.587c-8.284 0-15-6.716-15-15zm-39.467-71.629-79.838 82.087c-5.558 5.714-14.618 6.086-20.625.835l-59.598-52.101c-6.237-5.452-6.873-14.929-1.42-21.165 5.452-6.237 14.928-6.875 21.166-1.421l48.889 42.739 69.921-71.891c5.776-5.938 15.273-6.069 21.211-.295 5.938 5.778 6.07 15.274.294 21.212z" />
                        <path d="m256 0c-141.159 0-256 114.841-256 256s114.841 256 256 256 256-114.841 256-256-114.841-256-256-256zm0 463.286c-114.298 0-207.286-92.988-207.286-207.286s92.988-207.286 207.286-207.286 207.286 92.988 207.286 207.286-92.988 207.286-207.286 207.286z" />
                      </g>
                    </svg>
                  </span>
                  <h5 className="u-text u-text-palette-1-base u-text-7">
                    Business Hours
                  </h5>
                  <p className="u-text u-text-8">
                    Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  const generalInfo = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/general/?locale=${locale}`
  );


  const generalInfoJSON = await generalInfo.json();
  return {
    props: {
      logo: process.env.NEXT_PUBLIC_API_URL + generalInfoJSON.logo,
      language: generalInfoJSON.language,
      name: generalInfoJSON.name,
    },
  };
}
