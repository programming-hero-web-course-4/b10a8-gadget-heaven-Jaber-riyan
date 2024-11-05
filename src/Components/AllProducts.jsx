import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const AllProducts = () => {
    const data = useLoaderData();
    console.log(data);


    return (
        <div>
            {
                data.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            data && data.map(product => <Product product={product} key={product.product_id}></Product>)
                        }
                    </div>
                    :
                    <h1 className="text-3xl text-red-500"> Have no products !!</h1>
            }

        </div>
    );
};

export default AllProducts;