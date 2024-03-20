import React from "react";
import Onboarding from "./components/Onboarding";
import CreateUser from "./components/CreateUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
        <Router> 
          <Switch>
            <Route path="/" exact component={Onboarding} />
            <Route path="/create-user" component={CreateUser} />
          </Switch>
        </Router>
);
