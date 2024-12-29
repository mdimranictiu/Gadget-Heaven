import React from "react";
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { LuHeart } from "react-icons/lu";



const ViewDetails = () => {
  // Initial array
let tasks = ['Task 1', 'Task 2', 'Task 3'];

// Store the array
localStorage.setItem('tasks', JSON.stringify(tasks));
  const location = useLocation();
  const product = location?.state;
  const { product_title,description, price, availability,Specification,rating,product_image } = product;
  document.title=`${product_title} Details View`

 const handleAddToCart=()=>{

  const getItem=localStorage.getItem('cart');
  const setItem=localStorage.setItem('cart');

  const existingCart=JSON.parse(getItem)

  // if the product is already in the cart
  const productIndex=existingCart.findIndex(item=>{
    item.product_id===product.product_id
  })

  if(productIndex>-1){
    existingCart[productIndex].quantity+=1;

  }
  else{
    existingCart.push({...product,quantity:1})
  }
  localStorage.setItem('cart',JSON.stringify(existingCart))
  alert(`${product_title} has been added to your cart!`);


}

  return (
    <div className="pb-[220px] relative">
      <div className="bg-[#9538E2]  gap-5 h-[400px] flex flex-col   items-center">
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
          
   <ol  >
   {Specification.map((sp, index) => (
     <li className="pl-3" key={index}>{sp}</li>
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
                            <button onClick={handleAddToCart} className="bg-white px-6 hover:bg-[#9538E2] text-[#9538E2] hover:text-white py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2]">Add to Cart</button>
                            <button className="bg-white px-6 hover:bg-[#9538E2] text-[#9538E2] hover:text-white py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2]"><LuHeart></LuHeart></button>
                          </div>

 

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
