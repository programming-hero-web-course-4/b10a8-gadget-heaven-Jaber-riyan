import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mb-24">
            <div className="mb-8">
                <h1 className="font-bold text-5xl text-white text-center mb-6">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="text-[1rem] text-center font-normal text-white w-[80%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="text-center">
                <Link><button className=" py-4 px-7 bg-white rounded-full mb-64 font-semibold text-[#9538E2]">Show Now</button></Link>
            </div>
            <div className="flex justify-center absolute -bottom-80 right-64">
                <div className=" border-2 p-4 bg-[#FFFFFF4D] rounded-3xl">
                    <img src="https://i.ibb.co.com/Xs4g9C7/banner.jpg" className="h-[500px] w-[800px] rounded-3xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;