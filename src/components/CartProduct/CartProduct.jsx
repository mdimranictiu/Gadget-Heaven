import React from 'react';
import deleteIcon from '../../assets/icons8-delete-48.png';

const CartProduct = ({product}) => {
   const  {product_title,product_image,description,price,quantity}=product;
    return (
        <div className='flex justify-between gap-5 mt-5 rounded-xl max-sm: items-center shadow-xl border-1 p-5 '>
        <div className='flex max-sm:flex-col max-sm:items-start max-sm:gap-5 gap-10 items-center'>
            <div className='w-[220px] h-[120px] rounded-xl '>
             <img src={product_image}  className='w-full rounded-xl h-full' alt="Product Image" />
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='font-bold text-xl'>{product_title}</h2>
                <p className=''>{description}</p>
                <p className='font-bold'>Quantity: {quantity}</p>
                <h3 className='font-bold'>$ {price}</h3>
            </div>
        </div>
        <div><img className='mr-5' src={deleteIcon} alt="DeleteIcon" /></div>
    </div>
    );
};

export default CartProduct;