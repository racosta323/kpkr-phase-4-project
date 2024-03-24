
import ReactDOM from "react-dom";
import App from "./components/App";
import Onboarding from "./components/Onboarding"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/custom.scss'


ReactDOM.render(
        <Router> 
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/create-user" component={Onboarding} />
          </Switch>
        </Router>,
        document.getElementById("root")

);
