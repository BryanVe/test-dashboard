import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: 16,
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      overflowY: "scroll",
    },
  },
}));

const MainLayout = ({ children, isLogged = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar isLogged={isLogged} />
      {isLogged ? <Sidebar /> : null}
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
