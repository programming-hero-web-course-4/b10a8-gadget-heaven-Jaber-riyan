/* eslint-disable no-unused-vars */
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";
import { addToStoredCartList, addToStoredWishList } from "../Utils/Utils";


const GadgetDetails = () => {

    const { product_id } = useParams();
    const data = useLoaderData();
    const [detailData, setDetailData] = useState([]);


    const findDetailProducts = useMemo(() => {
        return data.filter(product => product.product_id === parseInt(product_id));
    }, [product_id, data]);

    useEffect(() => {
        setDetailData(findDetailProducts);

    }, [findDetailProducts])


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
        <div className='bg-[#efefef]'>
            <HelmetProvider>
                <Helmet>
                    <title>Detail Product || GadgetHeaven ✨</title>
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
            {/* detail start  */}
            <div className="mb-80 relative mt-16">
                <div className=" pt-5 bg-[#9538E2] pb-72">
                    <h1 className="font-bold text-3xl text-white text-center mb-6">Product Details</h1>
                    <p className="text-[1rem] text-center font-normal text-white w-[70%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    {/* <p>{detailData.length}</p> */}
                </div>
                <div className="flex justify-center absolute top-36 left-20">
                    <div className="p-8 border-2 bg-[#ffffff] rounded-3xl flex gap-8">
                        <div>
                            <img src={detailData[0]?.product_image} className="h-[500px] w-[500px] rounded-3xl object-contain" alt="" />
                        </div>
                        <div>
                            <div>
                                <h1 className="font-semibold text-3xl text-[#09080F] mb-3">Samsung Galaxy S23 Ultra</h1>
                                <p className="font-semibold text-[#09080FCC] text-xl mb-4">Price: ${detailData[0]?.price}</p>
                            </div>
                            <button className={
                                detailData[0]?.availability ?
                                    `py-2 px-4 mb-4 border-2 bg-[#309C081A] text-[#309C08] text-[1rem] font-medium border-[#2f9c08] rounded-3xl`

                                    :

                                    `py-2 px-4 mb-4 border-2 bg-red-500 text-[#fff] text-[1rem] font-medium border-red-800 rounded-3xl`}>{detailData[0]?.availability ? 'In Stock' : 'Stock Out'}</button>



                            <p className="font-normal text-[#09080F99] text-[1rem] mb-4">{detailData[0]?.description}</p>
                            <div className="mb-4">
                                <h3 className="font-bold text-[#09080F] text-[1rem] mb-4">Specification:</h3>
                                <ul className="">
                                    {detailData[0]?.Specification.map((specific, i) => <li key={i}># {specific}</li>)}
                                </ul>
                            </div>
                            <div className="mb-4">
                                <p className="font-bold text-[#09080F] text-[1rem] mb-3">Rating ⭐ </p>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div> <span className="py-2 px-3 bg-[#09080F0D] rounded-3xl">{detailData[0]?.rating}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button onClick={() => addToStoredCartList(detailData[0]?.product_id)} className="flex justify-center items-center gap-3 py-3 px-5 bg-[#9538E2] text-white rounded-3xl font-bold text-[1rem]"><span>Add To Cart</span> <IoCartOutline size={22}></IoCartOutline></button>

                                <Link onClick={() => addToStoredWishList(detailData[0]?.product_id)} className="md:block hidden p-4 border-2 text-xl font-bold mr-3 rounded-full bg-white text-black"><MdFavoriteBorder></MdFavoriteBorder></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* detail end  */}


            {/* footer start  */}
            <div className="mt-44">

                <Footer></Footer>
            </div>
            {/* footer start  */}
        </div>
    );
};

export default GadgetDetails;