import AllGoals from "../src/components/AllGoals"
import Goal from "./components/Goal"
import App from "./components/App"
import Landing from "./components/Landing"
import Auth from "./components/Auth"
import Intake from "./components/OnboardingFlow/Intake"
import { createBrowserRouter } from "react-router-dom"

const routes = [
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Landing />,
            },
            {
                path:'/login',
                element: <Auth/>
            },
            {
                path:'/signup',
                element: <Auth/>
            },
            {
                path:'/onboarding',
                element: <Intake/>
            },
            {
                path: '/goals',
                element: <AllGoals />,
            },
            {
                path: '/goals/:id',
                element: <Goal/>
            }
        ]
    }
]


export const router = createBrowserRouter(routes)