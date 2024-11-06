import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../MainComponent/MainComponent";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Error from "../Error/Error";
import AllProducts from "../Components/AllProducts";
import GadgetDetails from "../Pages/GadgetDetails";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import AboutUs from "../Pages/AboutUs";
import Statistics from "../Pages/Statistics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainComponent></MainComponent>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/categories.json'),
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
                ]
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>,
                loader: () => fetch('/productsData.json'),
            },
            {
                path: 'wishlist',
                element: <Wishlist></Wishlist>,
                loader: () => fetch('/productsData.json')
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
    {
        path: '/product/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/productsData.json')
    },
    {
        path: '/about_us',
        element: <AboutUs></AboutUs>
    },
    {
        path: '/statistics',
        element: <Statistics></Statistics>
    }
])

export default router;