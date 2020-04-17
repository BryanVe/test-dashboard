import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import CustomOutlinedInput from "../../../components/CustomOutlinedInput";

const FormEditInfo = ({ handleNewForm }) => {
  const [newData, setNewData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    region: "",
    country: "",
  });

  const handleNewData = (value, key) => {
    setNewData({
      ...newData,
      [key]: value,
    });
  };

  useEffect(() => {
    handleNewForm(newData);
  }, [newData]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} spacing={1} container>
        <Grid item md={6} xs={12} container justify="center">
          <CustomOutlinedInput
            onChange={handleNewData}
            required
            htmlFor="firstName"
            label="First name"
          />
        </Grid>
        <Grid item md={6} xs={12} container justify="center">
          <CustomOutlinedInput
            onChange={handleNewData}
            required
            htmlFor="lastName"
            label="Last name"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} spacing={1} container>
        <Grid item md={6} xs={12} container justify="center">
          <CustomOutlinedInput
            onChange={handleNewData}
            required
            htmlFor="email"
            label="Email"
          />
        </Grid>
        <Grid item md={6} xs={12} container justify="center">
          <CustomOutlinedInput
            onChange={handleNewData}
            htmlFor="phoneNumber"
            label="Phone number"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} spacing={1} container>
        <Grid item md={6} xs={12} container justify="center">
          <CustomOutlinedInput
            onChange={handleNewData}
            htmlFor="region"
            label="Region"
          />
        </Grid>
        <Grid item md={6} xs={12} container justify="center">
          <CustomOutlinedInput
            onChange={handleNewData}
            required
            htmlFor="country"
            label="Country"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormEditInfo;
