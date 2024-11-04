import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainComponent = () => {
    return (
        <div className="container mx-auto bg-[#9538E2] rounded-3xl my-5">
            <div className="md:w-[80%] mx-auto">
                {/* Navbar section */}
                <Navbar></Navbar>
                {/* Banner Section */}
                
                {/* Outlet */}
                <Outlet></Outlet>
                {/* Footer */}
            </div>
        </div>
    );
};

export default MainComponent;