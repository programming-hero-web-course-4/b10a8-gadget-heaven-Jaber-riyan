import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import { MdFavoriteBorder } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import Footer from '../Components/Footer';

const Dashboard = () => {
    const links = (
        <>
            <li>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? "font-[700] text-[14px] cursor-pointer text-[#9538E2]" : ""
                }>Home</NavLink>
            </li>
            <li>
                <NavLink to='/statistics' className={({ isActive }) =>
                    isActive ? "font-[700] text-[14px] cursor-pointer text-[#9538E2]" : ""
                }>Statistics</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard' className={({ isActive }) =>
                    isActive ? "font-[700] text-[14px] cursor-pointer text-[#9538E2]" : ""
                }>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to='/about_us' className={({ isActive }) =>
                    isActive ? "font-[700] text-[14px] cursor-pointer text-[#9538E2]" : ""
                }>About_Us</NavLink>
            </li>
        </>
    );
    return (
        <div className='bg-[#efefef]'>
            <HelmetProvider>
                <Helmet>
                    <title>Dashboard || GadgetHeaven ✨</title>
                </Helmet>
            </HelmetProvider>
            {/* navbar start  */}
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
                    <a className="md:block hidden p-3 text-xl font-bold mr-3 rounded-full bg-white text-[#3A3A3A]"><IoCartOutline ></IoCartOutline> </a>
                    <a className="md:block hidden p-3 text-xl font-bold mr-3 rounded-full bg-white text-black"><MdFavoriteBorder></MdFavoriteBorder>  </a>
                </nav>
                {/* navbar end  */}
            </div>
            {/* banner start  */}
            <div className="bg-[#9538E2]">
                <div className="mb-8 pt-5">
                    <h1 className="font-bold text-3xl text-white text-center mb-6">Dashboard</h1>
                    <p className="text-[1rem] text-center font-normal text-white w-[70%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="text-center pb-10">
                    <NavLink to='cart'
                        className={({ isActive }) =>
                            isActive ?
                                `py-4 px-7 bg-white rounded-full font-semibold text-[#9538E2] mr-3`

                                :

                                `py-4 px-7 bg-transparent border-2 rounded-full font-semibold text-[#ffff] mr-3`
                        }
                    >Cart</NavLink>
                    <NavLink to='wishlist'
                        className={({ isActive }) =>
                            isActive ?
                                `py-4 px-7 bg-white rounded-full font-semibold text-[#9538E2] mr-3`

                                :

                                `py-4 px-7 bg-transparent border-2 rounded-full font-semibold text-[#ffff] mr-3`
                        }
                    >Wishlist</NavLink>
                </div>
            </div>
            {/* banner end  */}

            {/* outlet start  */}
            <div className='md:w-[80%] container mx-auto mt-12'>
                <Outlet></Outlet>
            </div>
            {/* outlet start  */}

            {/* footer start  */}
            <Footer></Footer>
            {/* footer start  */}
        </div>
    );
};



export default Dashboard;
