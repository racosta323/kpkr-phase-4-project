import AllGoals from "../src/components/AllGoals"
import App from "./components/App"

const routes = [
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/goals/:id',
        element: <AllGoals/>
    }
]

export default routes