import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#f4efef4d] py-10'>
            <div className='flex flex-col items-center '>
            <h3 className='text-3xl font-bold py-3'>Gadget Heaven</h3>
            <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='grid grid-cols-3  py-10 max-md:grid-cols-2 max-sm:grid-cols-1'>
                <div className='flex flex-col text-center items-center'>
                <h2 className='text-2xl py-4  font-bold'>Services</h2>
                <ul className='font-semibold'>
                    <li><Link to="/">Product Support</Link></li>
                    <li><Link to="/">Order Tracking</Link></li>
                    <li><Link to="/">Shipping & Delivery</Link></li>
                    <li><Link to="/">Returns</Link></li>

                </ul>
                </div>
                <div className='flex flex-col text-center items-center'>
                    <h2 className='font-bold py-4  text-2xl'>Company</h2>
                    <ul className='font-semibold'>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Carrier</Link></li>
                    <li><Link to="/">Contact us</Link></li>
                    

                </ul>

                </div>
                <div className='flex flex-col text-center items-center'>
                    <h2 className='text-xl py-4 font-bold'>Legal</h2>
                    <ul className='font-semibold'>
                    <li><Link to="/">Terms of Service</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Cookie Policy</Link></li>
                    

                </ul>

                </div>
            </div>
        </div>
    );
};

export default Footer;