import React from "react";
import {
  Paper,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  LinearProgress,
  CardActions,
  Button,
  Divider,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatarAccount: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const ShowProfile = ({ currentUser }) => {
  const classes = useStyles();
  return (
    <Paper>
      <Card>
        <CardContent>
          <Grid item xs={12} container>
            <Grid item xs={10}>
              <Typography variant="h4">
                {currentUser.firstName} {currentUser.lastName}
              </Typography>
              <Typography variant="subtitle1">
                {currentUser.region} {currentUser.country}
              </Typography>
              <Typography variant="subtitle2">
                {currentUser.phoneNumber}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              container
              justify="flex-end"
              style={{ width: "auto" }}
            >
              <Avatar
                src={currentUser.avatar}
                className={classes.avatarAccount}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} container style={{ marginTop: "16px" }}>
            <div style={{ flexGrow: 1 }}>
              <Typography variant="subtitle2">
                Profile Completeness: 70%
              </Typography>
              <LinearProgress
                variant="determinate"
                color="primary"
                value={70}
              />
            </div>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <input hidden accept="image/*" id="upload-picture" type="file" />
          <label htmlFor="upload-picture">
            <Button variant="contained" color="primary" component="span">
              Upload picture
            </Button>
          </label>
          <Button>Remove picture</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default ShowProfile;
