import * as React from "react";

import { Dialog, DialogContent } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import BarLoader from "./BarLoader";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from '@mui/icons-material/Close';
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import GoogleButton from 'react-google-button'
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import Link from "../src/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Slide from '@mui/material/Slide';
import TextField from "@mui/material/TextField";
import { TransitionProps } from '@mui/material/transitions';
import Typography from "@mui/material/Typography";
import { signIn as nextSignIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function SignIn(props: any) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const emailPattern = new RegExp(".+@.+[.].+");
  const passwordPattern = new RegExp("[0-9a-zA-Z!@#$]{6,}");
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
    <Dialog open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
      
      <DialogContent>
      <IconButton
          aria-label="close"
          onClick={props.handleClose}
          sx={{
            position: 'absolute',
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
              Sign in
            </Typography>
            
            <Typography
              component={"h2"}
              variant="body1"
              color={"error.main"}
              sx={{ mt: 1, fontWeight: "bold" }}
            >
              {errorMessage}
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                error={emailError}
                helperText={emailError ? "Enter a valid email address !" : null}
                value={email}
                onChange={(e) => {
                  if (emailPattern.test(email)) {
                    setEmailError(false);
                  }
                  setEmail(e.target.value);
                }}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                error={passwordError}
                helperText={
                  passwordError
                    ? "The password must contain at least 6 character"
                    : null
                }
                onChange={(e) => {
                  if (passwordPattern.test(password)) {
                    setPasswordError(false);
                  }
                  setPassword(e.target.value);
                }}
                value={password}
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  if (handleValidation()) {
                    setLoading(true);
                    nextSignIn("credentials", {
                      email: email,
                      password: password,
                      redirect: false,
                    }).then((resp) => {
                      if (resp && resp.error) {
                        setErrorMessage(resp.error);
                        setLoading(false);
                      } else {
                        router.push(
                          process.env.NEXT_PUBLIC_URL + "/users/dashboard"
                        );
                      }
                    });
                  }
                }}
              >
                Sign In
              </Button>
              <GoogleButton style={{marginLeft: "auto", marginRight: "auto", fontFamily: "Dosis", fontWeight: "bold"}} onClick={()=>nextSignIn("google")}/>
              <Grid container sx={{mt: 4}}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <a href="/users/register">
                    {"Don't have an account? Sign Up"}
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
