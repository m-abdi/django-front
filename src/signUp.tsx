import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import BarLoader from "./BarLoader";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import Link from "../src/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import enableSubmitButton from "./recaptcha";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(true);
  const emailPattern = new RegExp(".+@.+[.].+");
  const passwordPattern = new RegExp("[0-9a-zA-Z!@#$]{6,}");

  const handleSubmit = async () => {
    const resp = await fetch(process.env.NEXT_PUBLIC_URL + "/api/signUp", {
      method: "post",
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }),
    });
    const status = resp.status;
    if (status == 200) {
      router.push("/users/login");
    } else if (status == 400) {
      setErrorMessage(await resp.text())
      setLoading(false)
    }
  };
  useEffect(() => {
    window.enableSubmitButton = (token: string) => {
      setSubmitStatus(false)
      
    };
  }, []);

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
    <Container maxWidth="xs">
      <Head>
        <title>Register | Botland</title>

      </Head>
      <Box
        sx={{
          marginTop: 8,
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
        <Typography component={"h2"} variant="body1" color={"error.main"} sx={{mt: 1, fontWeight: "bold"}}>{errorMessage}</Typography>
        <Box component="form" action="" method="post" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12}>
              <TextField
                error={emailError}
                helperText={emailError ? "Enter a valid email address !" : null}
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
            <Grid item xs={12}>
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
          <Grid
            item
            xs={12}
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="g-recaptcha"
              data-sitekey="6LeHZKYeAAAAAI7T4evc07qE-3x864y9baYCgqAa"
              data-callback="enableSubmitButton"
            ></div>
          </Grid>

          <Button
            type="submit"
            fullWidth
            disabled={submitStatus}
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
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/users/login" variant="body2">
                Already have an account? Sign in
              </Link>
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
  );
}
