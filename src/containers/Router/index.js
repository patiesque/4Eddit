import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import FeedPage from "../FeedPage";
import PostsPage from "../PostsPage";




const routes = {
  root: "/"
  // Outras rotas aqui
  // signupPage: "/signup"
  // feedPage: "/feed"
  // postsPage: "/posts"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} />
        {/* <Route path={routes.root} component={SignupPage} /> */}
        {/* <Route path={routes.root} component={FeedPage} /> */}
        {/* <Route path={routes.root} component={PostsPage} /> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
