import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@material-ui/core";

import simulateUsers from "../../../users";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "450px",
    height: "427px",
  },
  facebookButton: {
    color: "#FFF",
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "#FFF",
    color: "#212121",
    fontWeight: "bold",
  },
}));

const isItEmail = (email) => {
  let regExp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLocaleLowerCase());
};

const Form = () => {
  const history = useHistory();
  const classes = useStyles();
  const signInButton = useRef(null);

  const [onEditEmail, setOnEditEmail] = useState();
  const [onEditPass, setOnEditPass] = useState();

  const [validatePass, setValidatePass] = useState({
    error: false,
    label: "",
  });
  const [validateEmail, setValidateEmail] = useState({
    error: false,
    label: "",
  });

  const validateCredentials = () => {
    if (onEditEmail !== undefined) {
      if (onEditEmail.length === 0)
        setValidateEmail({ error: true, label: "Email is required" });
      else {
        setValidateEmail({ error: false, label: "" });
        if (isItEmail(onEditEmail)) {
          setValidateEmail({ error: false, label: "" });
        } else setValidateEmail({ error: true, label: "Email not valid" });
      }
    }
    if (onEditPass !== undefined && onEditPass.length === 0) {
      setValidatePass({ error: true, label: "Password is required" });
    } else setValidatePass({ error: false, label: "" });
  };

  const isUser = (email, password) => {
    const userInfo = simulateUsers().find(
      (user) => user.email === email && user.password === password
    );
    localStorage.setItem("currentUser", JSON.stringify(userInfo));
    return userInfo;
  };

  useEffect(() => {
    validateCredentials();
  }, [onEditEmail, onEditPass]);

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      style={{ height: "100%", width: "100%" }}
    >
      <Grid container className={classes.form}>
        <Grid item xs={12}>
          <Typography variant="h2">Sign in</Typography>
          <Typography>Sign in with social media</Typography>
        </Grid>
        <Grid container item>
          <Grid item xs={6}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              color="primary"
              className={classes.facebookButton}
            >
              Facebook
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              className={classes.googleButton}
            >
              Google
            </Button>
          </Grid>
        </Grid>
        <Typography>or login with email address</Typography>
        <Grid item container spacing={1}>
          <FormControl fullWidth variant="outlined">
            <InputLabel error={validateEmail.error} htmlFor="component-email">
              Email
            </InputLabel>
            <OutlinedInput
              autoFocus
              error={validateEmail.error}
              onChange={(e) => setOnEditEmail(e.target.value)}
              id="component-email"
              label="Name"
            />
            {validateEmail.error ? (
              <FormHelperText error={validateEmail.error}>
                {validateEmail.label}
              </FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel error={validatePass.error} htmlFor="component-password">
              Password
            </InputLabel>
            <OutlinedInput
              fullWidth
              error={validatePass.error}
              onChange={(e) => setOnEditPass(e.target.value)}
              type="password"
              id="component-password"
              label="Password"
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  if (isUser(onEditEmail, onEditPass)) history.push("/account");
                  else alert("Campos no válidos");
                }
              }}
            />
            {validatePass.error ? (
              <FormHelperText error={validatePass.error}>
                {validatePass.label}
              </FormHelperText>
            ) : null}
          </FormControl>
          <Button
            color="primary"
            variant="contained"
            ref={signInButton}
            fullWidth
            onClick={() => {
              if (isUser(onEditEmail, onEditPass)) history.push("/account");
              else alert("Campos no válidos");
            }}
          >
            Sign in now
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;
