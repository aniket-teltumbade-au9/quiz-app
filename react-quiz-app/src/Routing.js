import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Layout from "./components/Layout/";
import "./components/css/Routing.css";

const Routing = () => {
  return (
    <div className="container">
      <Router>
        <Layout.NavBar />
        <Switch>
          <Route exact path="/" component={Layout.Home} />
          <Route path="/quiz/:id" component={Layout.QuizPanel} />
          <Route path="/login" component={Layout.Login} />
          <Route path="/signup" component={Layout.Signup} />
          <Route path="/dashboard" />
        </Switch>
        <Layout.Footer />
      </Router>
    </div>
  );
};

export default Routing;
