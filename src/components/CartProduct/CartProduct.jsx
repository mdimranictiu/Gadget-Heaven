import React from 'react';
import deleteIcon from '../../assets/icons8-delete-48.png';

const CartProduct = ({product,setProducts,products}) => {
    
   const  {product_title,product_image,description,price,quantity,product_id}=product;
   const removeProduct=()=>{
    const updateCart=products.filter((product)=>product.product_id !==product_id)
    setProducts(updateCart)
    localStorage.setItem('cart', JSON.stringify(updateCart));
   }
    return (
        <div className='flex justify-between  gap-5 mt-5 rounded-xl max-sm: items-center shadow-xl border-1 p-5 '>
        <div className='flex max-sm:flex-col max-sm:items-start max-sm:gap-5 gap-10 items-center'>
            <div className='w-[220px] h-[120px] rounded-xl '>
             <img src={product_image}  className='w-full rounded-xl h-full' alt="Product Image" />
            </div>
            <div className='flex flex-col'>
            <h2 className="font-bold text-xl">{product_title}</h2>
  <p className="text-gray-700">{description}</p>
  <span className="font-bold text-gray-800 ">Quantity: {quantity}</span>
  <h3 className="text-gray-900 ">Item Price: $ {price.toFixed(2)}</h3>
  <h3 className="text-gray-900 font-semibold">
    Total Price: $ {(price * quantity).toFixed(2)}
  </h3>
            </div>
        </div>
        <div onClick={removeProduct} title={`Remove ${product_title}`} ><img className='' src={deleteIcon} alt="DeleteIcon" /></div>
    </div>
    );
};

export default CartProduct;