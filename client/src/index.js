import React from "react";
import ReactDOM from "react-dom";
import Onboarding from "./components/Onboarding";
import CreateUser from "./components/CreateUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

ReactDOM.render(
        <Router> 
          <Switch>
            <Route path="/" exact component={Onboarding} />
            <Route path="/create-user" component={CreateUser} />
          </Switch>
        </Router>,
        document.getElementById("root")

);
