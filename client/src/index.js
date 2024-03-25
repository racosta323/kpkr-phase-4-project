import ReactDOM from "react-dom";
import createRoot from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './styles/custom.scss'
import routes from "./routes"

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
)

// ReactDOM.render(
//         <Router> 
//           <Switch>
//             <Route path="/" exact component={App} />
//             <Route path="/goal" component={Goal}/>
//             <Route path="/goals" component={AllGoals}/>
//           </Switch>
//         </Router>,
//         document.getElementById("root")

// );
