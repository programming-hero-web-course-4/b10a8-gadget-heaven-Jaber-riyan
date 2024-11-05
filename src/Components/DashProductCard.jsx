/* eslint-disable react/prop-types */
import { ImCross } from 'react-icons/im';

const DashProductCard = ({ product, handleDelete }) => {

    const { product_title, product_image, price, description, product_id } = product;

    return (
        <div className='bg-white p-8 rounded-2xl mb-5'>
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <div>
                        <img className='w-52 h-32 rounded-xl' src={product_image} alt="" />
                    </div>
                    <div>
                        <h2 className='text-[#09080F] font-semibold text-2xl mb-4'>{product_title}</h2>
                        <p className='font-normal text-[#09080F99] text-[1rem] mb-4'>{description}</p>
                        <p className='font-semibold text-[#09080FCC] text-xl'>Price: ${price}</p>
                    </div>
                </div>
                <div className=''>
                    <button onClick={()=> handleDelete(product_id)} className='p-3 border-2 border-red-400 rounded-full'><ImCross className='text-red-500' /></button>
                </div>
            </div>
        </div>
    );
};

export default DashProductCard;