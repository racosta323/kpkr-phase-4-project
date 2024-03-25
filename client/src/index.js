
import ReactDOM from "react-dom";
import App from "./components/App";
import FakePage from "./components/FakePage";
import Goal from "./components/Goal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/custom.scss'


ReactDOM.render(
        <Router> 
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/goal" component={Goal}/>
          </Switch>
        </Router>,
        document.getElementById("root")

);
