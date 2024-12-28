import React from 'react';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  
    return (
        <div className='flex items-center text-4xl justify-center min-h-screen'>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div> 

    );
};

export default ErrorPage;