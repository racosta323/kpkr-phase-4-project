import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Onboarding from "./components/Onboarding"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/custom.scss'
import FakePage from "./components/FakePage";

ReactDOM.render(
        <Router> 
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/create-user" component={Onboarding} />
            <Route path='/fakepage' component={FakePage}/>
          </Switch>
        </Router>,
        document.getElementById("root")

);
