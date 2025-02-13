import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import WishList from '../WishList/WishList';
const Dashboard = () => {
    document.title='Dashboard'
    const [isActive,setisActive]=useState({
        isCart:true,
        status:'Cart',
        isCartSection:true
        
    })
    const ToggleCart=(status)=>{
        if(status==='Cart'){
            setisActive({
                isCart:true,
                status:"Cart",
                isCartSection:true
            })
        }
        else{

            setisActive({
                isCart:false,
                status:"wishList",
                isCartSection:false
            })

        }
    }
  return (
        <div>
            <div className="bg-[#9538E2] py-5 text-center gap-5 flex flex-col   items-center">
        <h2 className="mt-12 text-white font-bold text-[32px]">
          Dashboard
        </h2>
        <p className="max-w-[600px] text-center text-white text-[16px]">
         Welcome to Dashboard. Check you wishlist and purchase the product. You can explore about different kinds of product.  
        </p>
        <div className='flex gap-6 text-xl py-5'>
            <button onClick={()=>ToggleCart('Cart')} className={isActive.isCart? 'px-10 rounded-[32px] py-3 bg-white border-2 border-white text-[#9538E2]':"px-10 rounded-[32px] py-3 border-2 text-white border-white "}>Cart</button>
            <button onClick={()=>ToggleCart('wishList')} className={isActive.isCart? "px-10 rounded-[32px] py-3 border-2 text-white border-white ":'px-10 rounded-[32px] py-3 bg-white border-2 border-white text-[#9538E2]'}>Wishlist</button>
        </div>
      </div>

       {
        isActive.isCartSection? <Cart></Cart>: <WishList></WishList>
       }

        </div>
    );
};

export default Dashboard;