import React, { useEffect, useState } from "react";
import CartProduct from "../CartProduct/CartProduct";
import SuccessLogo from '../../assets/Group.png';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cost, setCost] = useState("");
  const [amount,setAmount]=useState(0)
  const navigate=useNavigate();
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  console.log(products);
  const totalCost = () => {
    let totalprice = 0;
    products.map((product) => {
      const productPrice = product.price;
      const productQty = product.quantity;
      const price = productPrice * productQty;
      totalprice = (totalprice + price);
    });
    setCost(totalprice.toFixed(2));
  };
  useEffect(() => {
    totalCost();
  });

  const handleSorting = (sortItem) => {
    const sorted = [...products].sort((a, b) => {
      if (sortItem === "price") {
        return b.price - a.price;
      } else if (sortItem === "quantity") {
        return b.quantity - a.quantity;
      }
      return 0;
    });
    setProducts(sorted);
  };
  
  const handlePurchase=()=>{
    document.getElementById('my_modal_4').showModal()
    setAmount(cost)
    localStorage.removeItem("cart");
    setProducts([])
    
  }
  const handleCloseModal=()=>{
    document.getElementById('my_modal_4').close()
    setAmount(0)
    navigate('/')


  }
  

  return (
    <div className="py-10 px-5">
      <div className="flex justify-between max-sm:flex-col items-center gap-5 max-md:flex-col">
        <h3 className="font-bold text-2xl">Cart</h3>
        <div className="flex items-center max-md:flex-col max-sm:flex-col gap-5">
          <h3 className="font-bold text-xl">Total cost: ${cost}</h3>
          <button className="bg-white px-2 text-[#9538E2]  py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2]">
            <select
              onChange={(e) => handleSorting(e.target.value)}
              className="w-full outline-none  h-full"
            >
              <option value="price">Price (High to low)</option>
              <option value="quantity">Quantity (Hight to High)</option>
            </select>
          </button>

          <button
  onClick={handlePurchase}
  disabled={products.length === 0}
  className={`bg-white text-center px-6 hover:bg-[#9538E2] text-[#9538E2] hover:text-white py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2] ${
    products.length === 0 ? "cursor-not-allowed opacity-50" : ""
  }`}
>
  Purchase
</button></div>
      </div>
      <div className="py-10 ">
        {products.length > 0 ? (
          products.map((product, index) => (
            <CartProduct key={index} product={product} setProducts={setProducts} products={products}/>
          ))
        ) : (
            <h3 className="font-bold text-center py-20 text-2xl">Your Cart is empty </h3>
        )}
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-3/5 flex flex-col items-center mx-auto ">
  <img src={SuccessLogo} alt="Success" />
 
    <h3 className="font-bold text-lg py-2">Payment Successfully</h3>
    <hr className="w-4/5 mx-auto" />
    <p className="py-4">Thanks for purchasing</p>
    <p>Total: ${amount}</p>

    <button onClick={handleCloseModal} className=" w-[200px] bg-white px-2 hover:text-white hover:bg-[#9538E2] text-[#9538E2] my-5 py-2 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2] mx-auto">Close</button>
  </div>
</dialog>
    </div>
  );
};

export default Cart;
