import { useLoaderData, useParams } from "react-router-dom";

const AllProducts = () => {
    const { category_name } = useParams();
    const data = useLoaderData();
    console.log(data);


    return (
        <div>
            all data of category {data.length} is
        </div>
    );
};

export default AllProducts;