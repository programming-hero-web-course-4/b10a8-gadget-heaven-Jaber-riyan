import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CiShoppingCart } from 'react-icons/ci';
import { IoCartOutline, IoLogoFacebook } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutUs = () => {

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
                    <title>About Us || GadgetHeaven ✨</title>
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
                    <h1 className="font-bold text-3xl text-white text-center mb-6">About Us</h1>
                    <p className="text-[1rem] text-center font-normal text-white w-[70%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            {/* banner end  */}
            <div className='w-[80%] mx-auto'>
                <div>
                    <h2 className='font-extrabold text-4xl mb-3'>About Gadget Heaven</h2>
                    <div className="divider"></div>

                    <p className='text-black/60 font-medium text-[1rem]'>
                        Welcome to Gadget Heaven, the ultimate online destination for tech lovers! Here, we bring you a vast selection of top-tier gadgets and electronics, designed to fit into your lifestyle and cater to every need. From high-tech accessories to the latest in smart devices, Gadget Heaven has something for everyone.
                        <br /><br />

                        Our platform is built with you in mind. With easy-to-use features like a customizable cart and wishlist, you can seamlessly explore, save, and shop for the products that catch your eye. Love a gadget but not ready to buy it? Simply add it to your wishlist and come back anytime. Ready to purchase? Just add to your cart, and enjoy a smooth, secure checkout experience.

                        <br /><br />
                        At Gadget Heaven, we don’t just sell gadgets—we offer an experience. Let us help you find that next essential device or the perfect gift, all with the convenience of online shopping. Dive into Gadget Heaven today and discover a world where innovation meets everyday life!
                    </p>
                </div>
                <div className="divider"></div>
                <div className='bg-gradient-to-r from-blue-500 to-indigo-600 p-9 rounded-lg'>
                    <h2 className='text-2xl font-bold text-white mb-6'>Founder of Project: </h2>
                    <div className='flex justify-center items-center'>
                        <div className='w-[50%]'>
                            <img className='w-64 rounded-3xl' src="https://i.ibb.co.com/ZNRB5GK/Whats-App-Image-2024-06-16-at-21-17-30-339e9296.jpg" alt="" />
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-white '>
                                <h3 className='text-3xl font-bold mb-3'>Hi, I`m</h3>
                                <span className='mr-12'></span><span className='font-medium'>Jaber Ahmed Riyan, a passionate web developer dedicated to crafting user-friendly and visually appealing websites. Currently immersed in the dynamic world of web development, I specialize in creating responsive and engaging digital experiences that connect with users and meet business needs.

                                    My work involves both front-end and back-end development, where I focus on ensuring seamless functionality, accessibility, and design. I’m constantly exploring new technologies and tools to stay at the forefront of the industry, driven by a commitment to delivering high-quality solutions that make an impact.

                                    Thank you for visiting my page, and feel free to reach out if you’d like to connect!</span>
                            </p>
                        </div>

                    </div>
                    <div className="divider"></div>
                    <div className="flex justify-center items-center gap-4">
                        <div className="text-xl text-white font-bold">Do Follow: </div>
                        <Link className='text-white' to={'https://www.facebook.com/profile.php?id=100072216951370'}>
                            <IoLogoFacebook size={40} />
                        </Link>
                        <Link className='text-white' to={'https://github.com/Jaber-riyan'}>
                            <FaGithub size={38} />
                        </Link>
                        <Link className='text-white' to={'https://www.linkedin.com/in/jaber-riyan/'}>
                            <FaLinkedin size={38} />
                        </Link>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;