import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";




const routes = {
  root: "/"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {/* <Route path={routes.root} component={LoginPage} /> */}
        <Route path={routes.root} component={SignupPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
