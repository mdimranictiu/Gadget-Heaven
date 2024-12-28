import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const Root = () => {
    return (
        <>
       
       
        <div className='w-4/5 max-md:w-[90%] max-sm:w-[90%] my-5 mx-auto'>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
        
       
        </>

    );
};

export default Root;