import React from "react";

import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Form from "./components/FormLogin";
import Layout from "../../layouts/MainLayout";
import loginImg from "./images/loginImage.jpg";

const useStyles = makeStyles((theme) => ({
  loginImg: {
    position: "relative",
    height: "100%",
    backgroundImage: `url(${loginImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    top: "-16px",
    right: "16px",
  },
  imageLayer: {
    backgroundColor: "rgba(80, 135, 230, 0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container style={{ height: "100vh" }}>
        <Hidden mdDown>
          <Grid item lg={5}>
            <div className={classes.loginImg}>
              <div className={classes.imageLayer}></div>
            </div>
          </Grid>
        </Hidden>
        <Grid item lg={7} container justify="center">
          <Form />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Login;
