import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@material-ui/core";

import FormEditInfo from "./FormEditInfo";

const EditProfile = () => {
  const history = useHistory();
  const location = useLocation();
  const [newForm, setNewForm] = useState();

  const handleNewForm = (data) => {
    setNewForm(data);
  };

  const reload = () => {
    const current = location.pathname;
    history.replace(`/reload`);
    setTimeout(() => {
      history.replace(current);
    });
  };

  return (
    <Paper>
      <Card>
        <CardHeader
          title="Profile"
          subheader="The information can be edited"
          titleTypographyProps={{ variant: "h5" }}
          subheaderTypographyProps={{
            variant: "subtitle1",
          }}
        />
        <Divider />
        <CardContent>
          <FormEditInfo handleNewForm={handleNewForm} />
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              // localStorage.setItem("currentUser", JSON.stringify(newForm));
              if (validateForm(newForm)) {
                localStorage.setItem("currentUser", JSON.stringify(newForm));
                reload();
              } else alert("Specify fields required");
            }}
          >
            Save details
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

const validateForm = (form) => {
  if (
    form.firstName === "" ||
    form.LastName === "" ||
    form.email === "" ||
    form.country === ""
  )
    return false;
  else return true;
};

export default EditProfile;
