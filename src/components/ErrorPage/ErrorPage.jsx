import React from 'react';
import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
  
    return (
        <div className='flex items-center flex-col  justify-center min-h-screen'>
      <p className='text-[#9538E2] text-4xl'>
        {error.statusText || error.message}
      </p>
      <br />
     <Link to="/"><button className='bg-white w-[200px] px-5 py-2 hover:bg-[#9538E2] text-[#9538E2] hover:text-white  text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2]'>Back to Home</button></Link>
    </div> 

    );
};

export default ErrorPage;