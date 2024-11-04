import { CiShoppingCart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {

    const links = (
        <>
            <li
                className="hover:text-[#4b4bed] font-[700] text-[14px] cursor-pointer">
                <a>Home</a>
            </li>
            <li
                className="hover:text-[#4b4bed] font-[700] text-[14px] cursor-pointer">
                <a>Statistics</a>
            </li>
            <li
                className="hover:text-[#4b4bed] font-[700] text-[14px] cursor-pointer">
                <a>Dashboard</a>
            </li>
        </>
    );

    return (
        <div>
            <nav className="navbar text-white mb-12">
                <div className="navbar-start">
                    <a className="font-bold text-xl">Gadget Heaven</a>
                </div>
                <div className="md:block hidden">
                    <ul className="menu-horizontal px-1 space-x-7 items-center justify-center text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="navbar-end">
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0 text-black font-medium">
                                {links}
                                <a className=""><CiShoppingCart></CiShoppingCart> </a>
                                <a className=""><MdFavoriteBorder></MdFavoriteBorder>  </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <a className="md:block hidden p-3 text-xl font-bold mr-3 rounded-full bg-white text-[#3A3A3A]"><IoCartOutline ></IoCartOutline> </a>
                <a className="md:block hidden p-3 text-xl font-bold mr-3 rounded-full bg-white text-black"><MdFavoriteBorder></MdFavoriteBorder>  </a>

            </nav>
        </div >
    );
};

export default Navbar;