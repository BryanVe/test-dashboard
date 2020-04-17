import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { StateContext } from "../../../context/StateContext";
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Topbar = ({ isLogged = true }) => {
  const { setState } = useContext(StateContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            edge="start"
            style={{ color: "#FFF" }}
            onClick={() => setState({ openSidebarMobile: true })}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6" className={classes.title}>
          Test
        </Typography>
        {isLogged ? (
          <React.Fragment>
            <IconButton
              edge="end"
              style={{ color: "#FFF" }}
              onClick={() => {
                localStorage.removeItem("currentUser");
                history.push("/login");
              }}
            >
              <ExitToAppRoundedIcon />
            </IconButton>
          </React.Fragment>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
