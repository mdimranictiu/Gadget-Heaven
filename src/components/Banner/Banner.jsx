import React from 'react';
import bannarImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
       <div className='relative mb-[500px]'>
         <div className="py-24 bg-[#9538E2] h-[700px]">
        <div className="flex flex-col max-w-[1120px] py-5 gap-2 mx-auto items-center justify-center text-center space-y-6">
          <h2 className="text-5xl text-white font-bold max-sm:text-3xl">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <p className="text-lg text-white max-w-[600px]">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button className="px-8 py-3 bg-white hover:bg-[#a46dd1] hover:text-white text-[#9538E2] font-bold rounded-xl  transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
      <div className='rounded-[32px] border-2 bg-[#FFFFFF4D]  p-5 -mt-[240px] max-sm:-mt-[120px] ml-[12.5%] border-white absolute w-3/4 max-sm:w-4/5 max-sm:ml-[10%] h-[550px] max-sm:h-[300px]'>
       <div className='rounded-[32px] h-full'>
         <img className='w-full h-full rounded-[32px]' src={bannarImg} alt="Bannar Img" />
       </div>
      </div>
       </div>
      
    );
};

export default Banner;