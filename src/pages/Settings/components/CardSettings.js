import React from "react";
import {
  Paper,
  Card,
  CardHeader,
  CardContent,
  Divider,
  CardActions,
  Button,
} from "@material-ui/core";

const CardSettings = ({ title, subheader, children, buttonLabel }) => {
  return (
    <Paper>
      <Card>
        <CardHeader
          title={title}
          subheader={subheader}
          titleTypographyProps={{ variant: "h4" }}
          subheaderTypographyProps={{ variant: "subtitle1" }}
        />
        <Divider />
        <CardContent>{children}</CardContent>
        <Divider />
        <CardActions>
          <Button variant="outlined" color="primary">
            {buttonLabel}
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default CardSettings;
