import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location=useLocation();
  const myLocation=location.pathname;

  return (
    <>
      <div className={`flex justify-between items-center py-5 px-5 md:px-10  ${myLocation==='/'? "bg-[#9538E2] text-white":""}  rounded-t-xl`}>
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold">Gadget Heaven</h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-xl font-semibold">
          <Link className={`${myLocation ==='/'?"text-black":" rounded-t-xl"}`} to="/">Home</Link>
          <Link className={`${myLocation ==='/dashboard'?"text-[#9538E2]":" rounded-t-xl"}`} to="/dashboard">Dashboard</Link>
          <Link className={`${myLocation ==='/stastics'?"text-[#9538E2]":" rounded-t-xl"}`} to="/stastics">Stastics</Link>
          <Link  className={`${myLocation ==='/support'?"text-[#9538E2]":" rounded-t-xl"}`} to="/support">Support</Link>
        </div>

        {/* Cart and Wishlist Icons */}
        <div className="hidden md:flex gap-4">
        <div className={`rounded-full p-3 ${myLocation==='/'? "bg-white ":"border-2 border-black"}  text-black`}>
        <FaCartPlus />
          </div>
          <div className={`rounded-full p-3 ${myLocation==='/'? "bg-white ":"border-2 border-black"}  text-black`}>
            <LuHeart />
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-5 bg-black text-white p-5 md:hidden">
          <Link to="/" className={`${myLocation ==='/'?"text-[#9538E2]":" rounded-t-xl"}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/dashboard" className={`${myLocation ==='/dashboard'?"text-[#9538E2]":" rounded-t-xl"}`} onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
          <Link to="/stastics" className={`${myLocation ==='/stastics'?"text-[#9538E2]":" rounded-t-xl"}`} onClick={() => setIsMenuOpen(false)}>Stastics</Link>
          <Link to="/support" className={`${myLocation ==='/support'?"text-[#9538E2]":" rounded-t-xl"}`} onClick={() => setIsMenuOpen(false)}>Support</Link>
          <div className="flex gap-4 justify-center mt-4">
            <div className="rounded-full p-3 bg-white text-black">
              <FaCartPlus />
            </div>
            <div className="rounded-full p-3 bg-white text-black">
              <LuHeart />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
