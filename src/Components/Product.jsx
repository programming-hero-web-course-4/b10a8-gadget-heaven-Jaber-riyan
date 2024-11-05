import { Link } from "react-router-dom";

const Product = ({ product }) => {

    const {product_title, product_image, price, product_id} = product;

    return (
        <div className="bg-white p-5 rounded-2xl shadow-lg">
            <div className="mb-6">
                <img className="rounded-xl object-contain w-72 h-44" src={product_image} alt="" />
            </div>
            <div className="mb-4">
                <h2 className="font-semibold text-2xl mb-3">{product_title}</h2>
                <p className="font-medium text-[#09080F99] text-[1rem]">Price: ${price}</p>
            </div>
            <div>
                <Link to={`/product/${product_id}`} className="text-[#9538E2] py-3 px-5 border-2 border-[#9538e2c0] text-[1rem] font-semibold rounded-3xl">View Details</Link>
            </div>
        </div>
    );
};

export default Product;