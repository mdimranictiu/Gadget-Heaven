import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Gadgets from '../Gadgets/Gadgets';
import { GadgetContext } from '../Context/GadgetContextProvider';



const ExploreGadgets = () => {
    const {gadgets,error,loading}=useContext(GadgetContext);

   
    
    return (
        <div className='mb-10'>
            <h2 className='text-3xl text-center pb-16 font-bold '>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-4 max-md:grid-cols-1 max-sm:grid-cols-1 gap-2'>
                <div className=''>
                    <div className='flex flex-col  items-center gap-10 py-10'>
                        <button className='bg-white px-8 hover:bg-[#9538E2] hover:text-white py-3 text-[18px] font-semibold rounded-[32px]'>All Product</button>
                        <button>Laptops</button>
                        <button>Phones</button>
                        <button>Accessories</button>
                        <button>Smart Watches</button>
                        <button>MacBook</button>
                        <button>Iphone</button>
                    </div>
                </div>
                <div className=' col-span-3'>
                  <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 gap-6 p-10'>
                  {
  gadgets.map((gadget) => (
    <Gadgets key={gadget.product_id} loading={loading} gadget={gadget} />
  ))
}

                  </div>

                </div>
            </div>
        </div>
    );
};

export default ExploreGadgets;