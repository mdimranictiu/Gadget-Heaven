import React, { useState } from "react";
import { ScrollRestoration, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { LuHeart } from "react-icons/lu";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const [active,setActive]=useState(true)
  const location = useLocation();
  const product = location?.state;
  const {
    product_title,
    description,
    price,
    availability,
    Specification,
    rating,
    product_image,
  } = product;
  document.title = `${product_title} Details View`;

  const handleAddToCart = () => {
    const products = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists 
    const productIndex = products.findIndex(
      (item) => item.product_id === product.product_id
    );
    let productAdded = false;
    if (productIndex !== -1) {
      const existingProduct = products[productIndex];
      existingProduct.quantity += 1;
      productAdded = false;
    } else {
      // Product not found
      products.push({ ...product, quantity: 1 });
      productAdded = true;
    }

    localStorage.setItem("cart", JSON.stringify(products));

    if (productAdded) {
      Swal.fire({
        title: "Success!",
        text: "Product added to cart successfully!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: "Quantity to cart successfully!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    }

   
  };
  const handleWishList = () => {
    const wishLists = JSON.parse(localStorage.getItem("wishLists")) || [];
    const productIndex = wishLists.findIndex(
      (item) => item.product_id === product.product_id
    );
  
    if (productIndex === -1) {
      const newWishList = [...wishLists, product];
      localStorage.setItem("wishLists", JSON.stringify(newWishList));
      setActive(false); 
      Swal.fire({
        title: "Added to Wishlist!",
        text: "Product successfully added to your wishlist.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "Already in Wishlist",
        text: "This product is already in your wishlist.",
        icon: "info",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };
  

      
      

  //   }
  return (
    <div className="relative min-h-screen">
      <div className="bg-[#9538E2]  gap-5 h-[400px] flex flex-col   items-center">
        <ScrollRestoration></ScrollRestoration>
        <h2 className="mt-12 text-white font-bold text-[32px]">
          Product Details
        </h2>
        <p className="max-w-[600px] text-center text-white text-[16px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="grid max-sm:grid-cols-1 max-md:grid-cols-1 gap-5 shadow-lg p-5 rounded-[32px] w-4/5 -mt-[200px] ml-[10%] max-auto grid-cols-3 bg-white">
        <div className="py-10">
          <div className="">
            <img
              src={product_image}
              className="max-w-full rounded-[32px] max-h-full object-contain"
              alt="Product"
            />
          </div>
        </div>

        <div className="col-span-2 gap-2 rounded-[32px]  py-10">
          <div className="px-10 gap-5">
            <h2 className="font-bold text-2xl mb-2">{product_title}</h2>
            <p className="font-bold mb-2">Price: ${price}</p>
            {availability ? (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-xl font-semibold">
                In Stock
              </span>
            ) : (
              <span className="bg-red-500 text-white px-3 py-1 rounded-xl font-semibold">
                Out of Stock
              </span>
            )}

            <p className="py-2">{description}</p>
            <h3 className="py-2 font-bold">Specification:</h3>

            <ol>
              {Specification.map((sp, index) => (
                <li className="pl-3" key={index}>
                  {sp}
                </li>
              ))}
            </ol>
            <ReactStars
              count={5}
              value={rating}
              size={30}
              activeColor="#c96e23"
              isHalf={true}
              edit={false}
            />

            <div className="py-2 flex items-center gap-5">
              <button
                onClick={handleAddToCart}
                disabled={!availability}
                className={`bg-white px-6 hover:bg-[#9538E2] text-[#9538E2] hover:text-white py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2] ${
                  !availability ? "cursor-not-allowed" : ""
                }`}
              >
                Add to Cart
              </button>
              <button onClick={handleWishList}  disabled={!active} className={`px-6 py-2 hover:bg-[#9538E2]  hover:text-white   text-[16px] font-semibold rounded-[32px] border-2 text-[#9538E2] ${
                  !active ? "cursor-not-allowed disabled bg-white" : "bg-white   border-[#9538E2]"
                }`}
              >
                <LuHeart></LuHeart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
