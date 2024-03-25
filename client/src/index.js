
import ReactDOM from "react-dom";
import App from "./components/App";
import FakePage from "./components/AllGoals";
import Goal from "./components/Goal";
import AllGoals from "./components/AllGoals"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/custom.scss'


ReactDOM.render(
        <Router> 
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/goal" component={Goal}/>
            <Route path="/goals" component={AllGoals}/>
          </Switch>
        </Router>,
        document.getElementById("root")

);
