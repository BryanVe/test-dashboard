import React from "react";

import { Grid } from "@material-ui/core";

import Layout from "../../layouts/MainLayout";
import CardSettings from "./components/CardSettings";
import CustomOutlinedInput from "../../components/CustomOutlinedInput";
import CheckboxGroup from "./components/CheckboxGroup";

const itemsNotifications = [
  {
    label: "Email",
    checked: true,
  },
  {
    label: "Push Notifications",
    checked: true,
  },
  {
    label: "Text Messages",
    checked: false,
  },
  {
    label: "Phone Calls",
    checked: true,
  },
];

const itemsMessages = [
  {
    label: "Email",
    checked: true,
  },
  {
    label: "Push Notifications",
    checked: false,
  },
  {
    label: "Phone Calls",
    checked: true,
  },
];

const Settings = () => {
  return (
    <Layout isLogged>
      <Grid container>
        <Grid item xs={12} md={7} style={{ padding: 16 }}>
          <CardSettings
            title="Notifications"
            subheader="Manage the notifications"
            buttonLabel="Save"
          >
            <Grid container>
              <Grid item xs={12} sm={5}>
                <CheckboxGroup
                  title="Notifications"
                  items={itemsNotifications}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <CheckboxGroup title="Messages" items={itemsMessages} />
              </Grid>
            </Grid>
          </CardSettings>
        </Grid>
        <Grid item xs={12} md={5} style={{ padding: 16 }}>
          <CardSettings
            title="Password"
            subheader="Update password"
            buttonLabel="Update"
          >
            <CustomOutlinedInput htmlFor="password" label="Password" />
            <CustomOutlinedInput
              htmlFor="confirmPassword"
              label="Confirm password"
            />
          </CardSettings>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Settings;
