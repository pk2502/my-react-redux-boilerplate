import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./assets/scss/theme.scss";
import Layout from "./components/layouts/Layout";
import NonAuthLayout from "./components/layouts/NonAuthLayout";
import { authProtectedRoutes, publicRoutes } from "./routes";
import AppRoute from "./routes/route";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              component={route.component}
              layout={NonAuthLayout}
              key={idx}
              isAuthProtected={false}
            />
          ))}
          {authProtectedRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              component={route.component}
              layout={Layout}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
