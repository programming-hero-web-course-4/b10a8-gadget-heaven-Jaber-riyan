import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DashProductCard from "./DashProductCard";
import { getStoredCartList, deleteFormCartList } from "../Utils/Utils";
import { toast } from "react-toastify";

// let dataCart = JSON.parse(localStorage.getItem('cart'));
const Cart = () => {
    const data = useLoaderData();
    const navigate = useNavigate();

    const [cartProducts, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const modalRef = useRef(null);

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const filteredCartProducts = [];
        storedCartList.forEach(id => {
            const matchingProduct = data.find(product => product.product_id === id);
            if (matchingProduct) {
                filteredCartProducts.push(matchingProduct);
            }
        });
        // const filteredCartProducts = data.filter(product => storedCartList.includes(product.product_id));
        setCartProducts(filteredCartProducts);
        const cartTotalPrice = filteredCartProducts.reduce((sum, product) => sum + product.price, 0);
        setTotalPrice(cartTotalPrice);
    }, []);


    const sortByPrice = () => {
        if (cartProducts.length > 0) {
            const sortedProducts = [...cartProducts].sort((a, b) => b.price - a.price);
            setCartProducts(sortedProducts);
        }
        else {
            toast.error("No Products in Cart List")
        }

    };

    const handlePurchase = () => {
        if (cartProducts.length > 0) {
            if (modalRef.current) {
                modalRef.current.showModal();
            }
        }
        else {
            toast.error("No Products in Cart List")
        }
    };

    const handleDelete = (id) => {
        deleteFormCartList(id)
        const storedCartList = getStoredCartList();
        const filteredCartProducts = [];
        storedCartList.forEach(id => {
            const matchingProduct = data.find(product => product.product_id === id);
            if (matchingProduct) {
                filteredCartProducts.push(matchingProduct);
            }
        });
        // const filteredCartProducts = data.filter(product => storedCartList.includes(product.product_id));
        setCartProducts(filteredCartProducts);
    }

    return (
        <div>
            <div className="flex justify-between mb-5 items-center">
                <div>
                    <h2 className="font-bold text-[#0B0B0B] text-2xl">Cart</h2>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <h2 className="font-bold text-[#0B0B0B] text-2xl">Total Cost : ${totalPrice}</h2>
                    <button onClick={sortByPrice} className="py-4 px-7 bg-white rounded-full font-semibold text-[#9538E2] border-2 border-[#9538E2] flex items-center justify-center gap-2">
                        <span>Sort By Price</span>
                    </button>
                    <button onClick={handlePurchase} className="py-4 px-7 rounded-full font-semibold text-[#fff] border-2 border-[#9538E2] bg-[#9538E2] flex items-center justify-center gap-2">
                        Purchase ({cartProducts?.length})
                    </button>
                </div>
            </div>
            {
                cartProducts.length > 0 ?
                    cartProducts && cartProducts.map((product, i) => (
                        <DashProductCard product={product} handleDelete={handleDelete} key={i} />
                    )) :
                    <h2 className="text-xl font-bold text-red-500 text-center">No Product in the Cart List :(</h2>


            }
            <div className="pb-10"></div>

            {/* modal start  */}
            <dialog ref={modalRef} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="flex justify-center mb-6">
                        <img src="https://i.ibb.co.com/FgDwf40/Group.png" alt="" />
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl text-[#09080F] text-center">Payment Successfully</h2>
                    </div>
                    <div className="divider"></div>
                    <div className="text-center font-medium text-[1rem] text-[#09080F99]">
                        <p>Thanks for purchasing.</p>
                        <p>Total: ${totalPrice}</p>
                    </div>
                    <div className="modal-action justify-center">
                        <button className="btn w-full rounded-3xl text-[1rem] font-bold text-[#09080F]" onClick={() => {
                            modalRef.current.close();
                            setTotalPrice(0);
                            localStorage.removeItem('cart');
                            setCartProducts([]);
                            navigate('/');
                        }}>Close</button>
                    </div>
                </div>
            </dialog>
            {/* modal end  */}
        </div>
    );
};

export default Cart;
