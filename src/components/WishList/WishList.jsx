import React, { useState } from 'react';
import WishListCard from '../WishListCard/WishListCard';

const WishList = () => {
    const [wishListProducts,setwishListProducs]=useState(JSON.parse(localStorage.getItem("wishLists")) || [])
    return (
        <div className="py-10 px-5">
        <div className="flex justify-between max-sm:flex-col items-center gap-5 max-md:flex-col">
          <h3 className="font-bold text-2xl">WishLists</h3>
        </div>
        <div className="py-10 ">
          {wishListProducts.length > 0 ? (
            wishListProducts.map((product, index) => (
              <WishListCard key={index} product={product} setwishListProducs={setwishListProducs} wishListProducts={wishListProducts}/>
            ))
          ) : (
            <h3 className="font-bold text-center py-20 text-2xl">Your WishLists is empty </h3>
          )}
        </div>
      </div>
    );
};

export default WishList;