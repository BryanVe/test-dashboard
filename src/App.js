import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Account from "./pages/Account";
import Settings from "./pages/Settings";

const routes = [
  {
    path: "/account",
    component: <Account />,
  },
  {
    path: "/settings",
    component: <Settings />,
  },
  {
    path: "/login",
    component: <Login />,
  },
];

const App = () => {
  const location = useLocation();

  if (localStorage.currentUser)
    return (
      <Switch>
        <Route path="/reload" component={null} />
        {routes.map(({ path, component }) => {
          if (location.pathname === "/") return <Redirect to="/login" />;
          else
            return (
              <Route key={path} path={path}>
                {component}
              </Route>
            );
        })}
      </Switch>
    );
  else
    return (
      <Switch>
        {location.pathname !== "/login" ? (
          <Redirect to="/login" />
        ) : (
          <Route path="/login">
            <Login />
          </Route>
        )}
      </Switch>
    );
};
export default App;
