import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"
import { RouterProvider} from "react-router-dom"
import './styles/custom.scss'
import { router } from "./routes"

const rootContainer = document.getElementById("root")
const root = createRoot(rootContainer)

root.render(
  <RouterProvider router={router}/>
);

