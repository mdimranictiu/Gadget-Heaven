import React, { useContext, useEffect, useState } from 'react';
import Gadgets from '../Gadgets/Gadgets';
import { GadgetContext } from '../Context/GadgetContextProvider';



const ExploreGadgets = () => {
    const {gadgets,loading}=useContext(GadgetContext);
    const [newgadgets,setCategories]=useState([])
    const [activeClass,setActiveClass]=useState('all')

    useEffect(() => {
        if (gadgets) {
            setCategories(gadgets);
        }
    }, [gadgets]);


    const handleCategories=(cat)=>{
        setActiveClass(cat)

        if(cat==='all'){
            setCategories(gadgets)
        }
        else{
            const data= gadgets.filter((gadget)=>{
                return gadget.category===cat
               })
               setCategories(data)

        }

       
      

    }
    const activateClassbtn=(cat)=>{
        return cat===activeClass
        ? 'bg-[#9538E2] text-white px-8 py-3 text-[18px] font-semibold rounded-[32px]'
            : 'bg-white px-8   py-3 text-[18px] font-semibold rounded-[32px]';
       }
    
    return (
        <div className='mb-10'>
            <h2 className='text-3xl text-center pb-16 font-bold '>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-4 max-md:grid-cols-1 max-sm:grid-cols-1 gap-2'>
                <div className=''>
                    <div className='flex flex-col  items-center gap-10 py-10'>
                        <button onClick={()=>handleCategories('all')} className={activateClassbtn('all')} >All Product</button> 
                        <button onClick={()=>handleCategories('Laptops')} className={activateClassbtn('Laptops')}>Laptops</button>
                        <button onClick={()=>handleCategories('Phones')} className={activateClassbtn('Phones')}>Phones</button>
                        <button onClick={()=>handleCategories('Accessories')} className={activateClassbtn('Accessories')}>Accessories</button>
                        <button onClick={()=>handleCategories('Smart Watches')} className={activateClassbtn('Smart Watches')}>Smart Watches</button>
                        <button onClick={()=>handleCategories('MacBook')} className={activateClassbtn('MacBook')}>MacBook</button>
                        <button onClick={()=>handleCategories('iPhone')} className={activateClassbtn('iPhone')}>Iphone</button>
                    </div>
                </div>
                <div className=' col-span-3'>
                  <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 gap-6 p-10'>
                  {
  newgadgets.map((gadget) => (
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