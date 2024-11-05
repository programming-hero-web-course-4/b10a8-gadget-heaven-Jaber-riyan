import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CiShoppingCart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';

const Error = () => {

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
            setTotalCartList(0);  // Default to 0 if cart is null or not an array
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
            <HelmetProvider>
                <Helmet>
                    <title>Error || GadgetHeaven ✨</title>
                </Helmet>
            </HelmetProvider>
            {/* navbar start  */}
            <div className='z-10 fixed w-full top-3 bg-white'>
                <div className='md:w-[80%] mx-auto'>
                    <nav className="navbar text-black">
                        <div className="navbar-start">
                            <Link to='/' className="font-bold text-xl">Gadget Heaven</Link>
                        </div>
                        <div className="md:block hidden">
                            <ul className="menu-horizontal px-1 space-x-7 items-center justify-center text-black">
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
                                        <Link className=""><CiShoppingCart></CiShoppingCart> </Link>
                                        <Link className=""><MdFavoriteBorder></MdFavoriteBorder>  </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Link to={'/dashboard/cart'} className="md:block hidden p-3 text-xl font-bold mr-3 rounded-full bg-white text-[#3A3A3A] relative"><IoCartOutline ></IoCartOutline><span className="p-2 rounded-full absolute bg-red-300 -top-7 left-5">{totalCartList}</span></Link>
                        <Link to={'/dashboard/wishlist'} className="md:block hidden p-3 text-xl font-bold mr-3 rounded-full bg-white text-black relative"><MdFavoriteBorder></MdFavoriteBorder> <span className="p-2 rounded-full absolute bg-red-300 -top-7 left-5">
                            {totalWishList}
                        </span> </Link>
                    </nav>
                    {/* navbar end  */}
                </div>
            </div>
            {/* banner start  */}
            <div className="bg-[#9538E2] mt-16">
                <div className="mb-8 pt-5">
                    <h1 className="font-bold text-3xl text-white text-center mb-6">Error</h1>
                    <p className="text-[1rem] text-center font-normal text-white w-[70%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            {/* banner end  */}
            <h3 className='text-red-500 text-4xl font-bold text-center mt-[83px] mb-[82px]'>Not Found</h3>
            <Footer></Footer>
        </div>
    );
};

export default Error;