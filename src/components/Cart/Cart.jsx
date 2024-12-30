import React, { useEffect, useState } from 'react';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
    const [cost,setCost]=useState('')
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(products);
    const totalCost=()=>{
        let totalprice=0;
        products.map((product)=>{
            const productPrice=product.price;
            const productQty=product.quantity;
            const price=productPrice*productQty;
            totalprice=Math.floor(totalprice+price);
            
        })
      setCost(totalprice)
    }
useEffect(()=>{
    totalCost();
})
    return (
        <div className="py-10 px-5">
            <div className="flex justify-between max-sm:flex-col items-center gap-5 max-md:flex-col">
                <h3 className="font-bold text-2xl">Cart</h3>
                <div className="flex items-center max-md:flex-col max-sm:flex-col gap-5">
                    <h3 className="font-semibold text-xl">Total cost: ${cost}</h3>
                    <button className="bg-white px-6 hover:bg-[#9538E2] text-[#9538E2] hover:text-white py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2]">
                        Sort by price
                    </button>
                    <button className="bg-white px-6 hover:bg-[#9538E2] text-[#9538E2] hover:text-white py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2]">
                        Purchase
                    </button>
                </div>
            </div>
            <div className="py-10 ">
                {
                    products.length > 0 ? 
                    products.map((product, index) => (
                        <CartProduct key={index} product={product} />
                    )) :
                    <p>Your cart is empty.</p>
                }
            </div>
        </div>
    );
};

export default Cart;
