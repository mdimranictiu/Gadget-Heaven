import React, {  useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


const Gadgets = ({gadget,loading}) => {
    const [showContent, setShowContent] = useState(false);
  

    useEffect(()=>{

        const timer = setTimeout(() => {
            setShowContent(true); 
          }, 1000);
      
          return () => clearTimeout(timer);

    },[])
      
   
    if(loading || !showContent){
        return <>
       <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full bg-gray-300 animate-pulse rounded"></div>
        <div className="skeleton h-4 w-28 bg-gray-300 animate-pulse rounded"></div>
        <div className="skeleton h-4 w-full bg-gray-300 animate-pulse rounded"></div>
        <div className="skeleton h-4 w-full bg-gray-300 animate-pulse rounded"></div>
      </div></>
    }

    const {product_title,product_id,product_image,price}=gadget
    
   

    return (
        <div className="card  p-5 bg-base-100  w-full  mx-auto shadow-xl">
      
        <div className='h-[180px]'>
        <img className='w-full h-full rounded-xl'
            src={product_image}
            alt="Product Image" />
        </div>
       
        <div className="flex flex-col items-start py-3 gap-2">
          <h2 className="card-title">{product_title}</h2>
          <p className='font-bold'>Price: ${price}</p>
      <Link to='/viewDetails' state={gadget}>
      <button  className='bg-white px-6 hover:bg-[#9538E2] text-[#9538E2] hover:text-white py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2]'>View Details</button>
      </Link>  
        </div>
      </div>
    );
};

export default Gadgets;