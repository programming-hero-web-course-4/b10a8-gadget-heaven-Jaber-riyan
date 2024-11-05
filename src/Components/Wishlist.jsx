import { useLoaderData } from "react-router-dom";
import DashProductCard from "./DashProductCard";
import { useEffect, useMemo, useState } from "react";
import { deleteFormWishList, getStoredWishList } from "../Utils/Utils";

let dataWishList = JSON.parse(localStorage.getItem('wishlist'));

const Wishlist = () => {
    const data = useLoaderData();

    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => {
        const storedCartList = getStoredWishList();
        const filteredCartProducts = [];
        storedCartList.forEach(id => {
            const matchingProduct = data.find(product => product.product_id === id);
            if (matchingProduct) {
                filteredCartProducts.push(matchingProduct);
            }
        });
        // const filteredCartProducts = data.filter(product => storedCartList.includes(product.product_id));
        setWishlistProducts(filteredCartProducts);
    }, []);

    const handleDelete = (id) => {
        deleteFormWishList(id)
        const storedCartList = getStoredWishList();
        const filteredCartProducts = [];
        storedCartList.forEach(id => {
            const matchingProduct = data.find(product => product.product_id === id);
            if (matchingProduct) {
                filteredCartProducts.push(matchingProduct);
            }
        });
        // const filteredCartProducts = data.filter(product => storedCartList.includes(product.product_id));
        setWishlistProducts(filteredCartProducts);
    }

    return (
        <div>
            <div className="mb-8">
                <h2 className="font-bold text-[#0B0B0B] text-2xl">Wishlist</h2>
            </div>
            {
                wishlistProducts.length === 0 ? <h2 className="text-xl font-bold text-red-500 text-center">No Product in the Wishlist :(</h2>
                    :
                    wishlistProducts.map(product => (
                        <DashProductCard product={product} handleDelete={handleDelete} key={product.product_id} />
                    ))
            }
            <div className="pb-10"></div>
        </div>
    );
};

export default Wishlist;