import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";

const Home = () => {
    const categories = useLoaderData();
    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     fetch('categories.json')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])
    console.log(categories);

    return (
        <div>
            {/* title change start  */}
            <HelmetProvider>
                <Helmet>
                    <title>GadgetHeaven ✨</title>
                    <link rel="canonical" href="http://localhost:5173/" />
                </Helmet>
            </HelmetProvider>
            {/* title change end  */}

            {/* main body start  */}
            <section className="mb-44">
                <div className="mb-12">
                    <h2 className="font-bold text-4xl text-center">Explore Cutting-Edge Gadgets</h2>
                </div>
                <div className="lg:flex gap-6 ">
                    <div className="lg:w-3/12">
                        <div className="flex lg:flex-col lg:gap-6 bg-white p-6 rounded-2xl">
                            <NavLink to='/' className={({ isActive }) =>
                                isActive ? 'bg-[#9538E2] text-white font-extrabold py-3 px-7 rounded-3xl' : "bg-[#09080F0D] py-3 px-7 text-[#09080F99] font-normal rounded-3xl"
                            }>ALL PRODUCTS</NavLink>
                            {
                                categories && categories.map(category => <NavLink key={category.category_id} to={`/category/${category.category_name}`} className={({ isActive }) =>
                                    isActive ? 'bg-[#9538E2] text-white font-extrabold py-3 px-7 rounded-3xl' : "bg-[#09080F0D] py-3 px-7 text-[#09080F99] font-normal rounded-3xl"
                                }>{category.category_name.toUpperCase()}</NavLink>)
                            }

                        </div>
                    </div>
                    <div className="lg:w-9/12">
                        <Outlet></Outlet>
                    </div>
                </div>
            </section>
            {/* main body end  */}
        </div>
    );
};

export default Home;