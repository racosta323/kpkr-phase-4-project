import AllGoals from "../src/components/AllGoals"
import Goal from "./components/Goal"
import App from "./components/App"

const routes = [
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/goals',
        element: <AllGoals/>
    },
    {
        path: '/goals/:id',
        element: <Goal/>
    }
]

export default routes