import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../MainComponent/MainComponent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainComponent></MainComponent>
    }
])

export default router;