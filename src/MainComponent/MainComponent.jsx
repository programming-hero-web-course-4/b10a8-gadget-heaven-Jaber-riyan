/* eslint-disable no-unused-vars */
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MainComponent = () => {

    const location = useLocation();
    return (
        <div className="bg-[#09080F1A] pt-3">
            <div className="fixed top-0 z-10 bg-[#9538E2] w-[95%] mt-3 ml-9 rounded-3xl opacity-90">
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto bg-[#9538E2] rounded-b-3xl my-5">
                <div className="md:w-[80%] mx-auto mt-[112px]">
                    {/* Navbar section */}
                    {/* Banner Section */}
                    <div className="mb-96">
                        <Banner></Banner>
                        {/* {location.pathname !== '/dashboard' ? <Banner></Banner> : ''} */}
                    </div>
                </div>
                {/* Footer */}
            </div>
            <div className="md:w-[80%] mx-auto container">
                {/* Outlet */}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainComponent;