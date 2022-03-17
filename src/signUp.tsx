import * as React from "react";

import {
  Dialog,
  DialogContent,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import BarLoader from "./BarLoader";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import GoogleButton from "react-google-button";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import IconButton from "@mui/material/IconButton";
import Link from "../src/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { TransitionProps } from "@mui/material/transitions";
import Typography from "@mui/material/Typography";
import enableSubmitButton from "./recaptcha";
import { signIn as nextSignIn } from "next-auth/react";
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function SignUp(props: any) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userType, setUserType] = useState(props.userType? props.userType : "Learner");
  const [submitStatus, setSubmitStatus] = useState(true);
  const emailPattern = new RegExp(".+@.+[.].+");
  const passwordPattern = new RegExp("[0-9a-zA-Z!@#$]{6,}");

  const handleSubmit = async () => {
    const resp = await fetch(process.env.NEXT_PUBLIC_URL + "/api/signUp", {
      method: "post",
      body: JSON.stringify({
        email: email,
        username: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        type: userType
      }),
    });
    if (resp.ok) {
      router.push("/users/login");
    } else {
      setErrorMessage((await resp.json()).error);
      setLoading(false);
    }
  };
 

  const handleValidation = () => {
    let valid = true;
    if (!emailPattern.test(email)) {
      setEmailError(true);
      valid = false;
    }
    if (!passwordPattern.test(password)) {
      setPasswordError(true);
      valid = false;
    }
    if (!valid) {
      return false;
    }
    return true;
  };

  return loading ? (
    <BarLoader />
  ) : (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      TransitionComponent={Transition}
    >
      <DialogContent>
        <IconButton
          aria-label="close"
          onClick={props.handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Container maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Typography
              component={"h2"}
              variant="body1"
              color={"error.main"}
              sx={{ mt: 1, fontWeight: "bold" }}
            >
              {errorMessage}
            </Typography>
            <Box component="form" action="" method="post" sx={{ mt: 3 }}>
              <Grid container spacing={2} justifyContent="space-between">
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                >
                  <Select
                    id="type"
                    name="type"
                    labelId="type-label"
                    label={"As"}
                    native={true}
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                  >
                    <option style={{ fontWeight: "bold" }}>Learner</option>
                    <option style={{ fontWeight: "bold" }}>Teacher</option>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={5.5}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    fullWidth
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="firstName"
                    label="First Name (Optional)"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={5.5}>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Last Name (Optional)"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    error={emailError}
                    helperText={
                      emailError ? "Enter a valid email address !" : null
                    }
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      if (emailPattern.test(email)) {
                        setEmailError(false);
                      }
                      setEmail(e.target.value);
                    }}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    error={passwordError}
                    helperText={
                      passwordError
                        ? "The password must contain at least 6 character"
                        : null
                    }
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      if (passwordPattern.test(password)) {
                        setPasswordError(false);
                      }
                      setPassword(e.target.value);
                    }}
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              {/* <Grid
                item
                xs={12}
                sx={{
                  mt: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="g-recaptcha"
                  data-sitekey="6Lf_QNkeAAAAAH_h74j9m8Kx2WiIVwTrt1dBTGX3"
                  data-callback="enableSubmitButton"
                ></div>
              </Grid> */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  if (handleValidation()) {
                    setLoading(true);
                    handleSubmit();
                  }
                }}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <GoogleButton
                label="Sign up with google"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontFamily: "Dosis",
                  fontWeight: "bold",
                }}
                onClick={() => nextSignIn("google")}
              />

              <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
                <Grid item>
                  <a
                    onClick={() => {
                      props.handleClose();
                      props.setLoginDialog(true);
                    }}
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#2b8ad2",
                    }}
                  >
                    Already have an account? Sign in
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          ></script>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
