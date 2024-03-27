import AllGoals from "../src/components/AllGoals"
import Goal from "./components/Goal"
import App from "./components/App"
import { createBrowserRouter } from "react-router-dom"

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            // {index: true, element: <App/>},
            {
                path: 'goals',
                element: <AllGoals />
                // children:[
                //     {index: true, element: <App/>}
                //     {
                //         path: '/goals/:id',
                //         element: <Goal/>
                //     }
                // ]
            }
            
        ]
    }
]

export const router = createBrowserRouter(routes)