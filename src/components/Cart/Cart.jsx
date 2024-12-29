import React from 'react';

const Cart = () => {
    return (
        <div className='py-10 px-5'>
            <div className='flex justify-between max-sm:flex-col items-center gap-5 max-md:flex-col '>
                <h3 className='font-bold text-2xl'>Cart</h3>
                <div className='flex items-center max-md:flex-col max-sm:flex-col gap-5'>
                    <h3 className='font-semibold text-xl'>Total cost: $98444</h3>
                    <button className='bg-white px-6 hover:bg-[#9538E2] text-[#9538E2] hover:text-white py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2]'>Sort by price</button>
                    <button className='bg-white px-6 hover:bg-[#9538E2] text-[#9538E2] hover:text-white py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2]'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;