import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import './Styles/SomeStyles.css'
import { useEffect, useState } from "react";

const Navbar = () => {
    const [totalCartList, setTotalCartList] = useState(0);
    const [totalWishList, setTotalWishList] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const wish = JSON.parse(localStorage.getItem('wishlist'));

        // setTotalCartList(cart.length);
        // setTotalWishList(wish.length);
        if (cart && Array.isArray(cart)) {
            setTotalCartList(cart.length);
        }
        if (wish && Array.isArray(wish)) {
            setTotalWishList(wish.length)
        }
        else {
            setTotalCartList(0);
        }
    }, []);



    const links = (
        <>
            <li
                className="font-[700] text-[14px] cursor-pointer">
                <NavLink to='/'>Home</NavLink>
            </li>
            <li
                className="font-[700] text-[14px] cursor-pointer">
                <NavLink to='/statistics'>Statistics</NavLink>
            </li>
            <li
                className="font-[700] text-[14px] cursor-pointer">
                <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
            <li
                className="font-[700] text-[14px] cursor-pointer">
                <NavLink to='/about_us'>About_Us</NavLink>
            </li>
        </>
    );

    return (
        <div>
            <nav className="navbar text-white mb-12 relative">
                <div className="navbar-start">
                    <Link className="font-bold text-xl">Gadget Heaven</Link>
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
                                <Link className="md:block hidden p-3 text-xl font-bold mr-3 rounded-full bg-white text-[#3A3A3A]"><IoCartOutline ></IoCartOutline></Link>
                                <Link className="md:block hidden p-3 text-xl font-bold mr-3 rounded-full bg-black text-white"><MdFavoriteBorder></MdFavoriteBorder>  </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <Link to={'/dashboard/cart'} className="md:block hidden p-3 text-xl font-bold mr-3 rounded-full bg-white text-[#3A3A3A] relative"><IoCartOutline ></IoCartOutline><span className="p-2 rounded-full absolute bg-red-300 -top-7 left-5">{totalCartList}</span></Link>
                <Link to={'/dashboard/wishlist'} className="md:block hidden p-3 text-xl font-bold mr-3 rounded-full bg-white text-black relative"><MdFavoriteBorder></MdFavoriteBorder> <span className="p-2 rounded-full absolute bg-red-300 -top-7 left-5">
                    {totalWishList}
                </span> </Link>
            </nav>
        </div >
    );
};

export default Navbar;