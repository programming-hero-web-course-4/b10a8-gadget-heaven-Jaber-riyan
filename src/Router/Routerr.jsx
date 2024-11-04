import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../MainComponent/MainComponent";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainComponent></MainComponent>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default router;