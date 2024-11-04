import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../MainComponent/MainComponent";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Error from "../Error/Error";
import AllProducts from "../Components/AllProducts";
import GadgetDetails from "../Pages/GadgetDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainComponent></MainComponent>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('/categories.json'),
                children: [
                    {
                        path: '/',
                        element: <AllProducts></AllProducts>,
                        loader: () => fetch('/productsData.json')
                    },
                    {
                        path: '/category/:category_name',
                        element: <AllProducts></AllProducts>,
                        loader: ({ params }) =>
                            fetch(`/productsData.json`)
                                .then(response => response.json())
                                .then(data =>
                                    data.filter(item => item.category === params.category_name)
                                )
                    },
                    {
                        path: '/product/:product_id',
                        element: <GadgetDetails></GadgetDetails>
                    }
                ]
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
])

export default router;