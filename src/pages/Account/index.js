import React from "react";
import Layout from "../../layouts/MainLayout";
import { Grid } from "@material-ui/core";

import ShowProfile from "./components/ShowProfile";
import EditProfile from "./components/EditProfile";
import { Redirect } from "react-router-dom";

const Account = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser)
    return (
      <Layout isLogged>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={5}
            style={{ width: "90%", padding: "16px" }}
          >
            <ShowProfile currentUser={currentUser} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={7}
            style={{ width: "90%", padding: "16px" }}
          >
            <EditProfile />
          </Grid>
        </Grid>
      </Layout>
    );
  else return <Redirect to="/login" />;
};

export default Account;
