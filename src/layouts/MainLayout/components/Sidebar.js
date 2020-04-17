import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
} from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import { StateContext } from "../../../context/StateContext";

const sidebarWidth = 240;

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: sidebarWidth,
  },
  sidebarPaper: {
    width: sidebarWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  currentItem: {
    "&:active": {
      backgroundColor: "rgba(75, 144, 222, 0.5)",
    },
  },
}));

const subItemsSidebar = [
  {
    label: "Account",
    icon: <AccountCircleRoundedIcon />,
    route: "/account",
  },
  {
    label: "Settings",
    icon: <SettingsRoundedIcon />,
    route: "/settings",
  },
];

const Sidebar = () => {
  const { state, setState } = useContext(StateContext);
  const classes = useStyles();
  const history = useHistory();

  const deviceSidebar = (
    <div className={classes.sidebarContainer}>
      <List>
        {subItemsSidebar.map(({ label, icon, route }) => (
          <ListItem
            button
            key={label}
            onClick={() => {
              history.push(`${route}`);
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          className={classes.sidebar}
          classes={{
            paper: classes.sidebarPaper,
          }}
        >
          <Toolbar />
          {deviceSidebar}
        </Drawer>
      </Hidden>
      <Hidden lgUp>
        <Drawer
          className={classes.sidebar}
          classes={{
            paper: classes.sidebarPaper,
          }}
          open={state.openSidebarMobile}
          onClose={() => setState({ openSidebarMobile: false })}
        >
          {deviceSidebar}
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
};

export default Sidebar;
