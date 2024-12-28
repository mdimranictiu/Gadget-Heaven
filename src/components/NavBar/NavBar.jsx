import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center py-5 px-5 md:px-10 bg-[#9538E2] text-white rounded-t-xl">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold">Gadget Heaven</h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-xl font-semibold">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact</Link>
        </div>

        {/* Cart and Wishlist Icons */}
        <div className="hidden md:flex gap-4">
          <div className="rounded-full p-3 bg-white text-black">
            <FaCartPlus />
          </div>
          <div className="rounded-full p-3 bg-white text-black">
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
        <div className="flex flex-col gap-5 bg-[#9538E2] text-white p-5 md:hidden">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
