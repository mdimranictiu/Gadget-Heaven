import React from 'react';
import deleteIcon from '../../assets/icons8-delete-48.png';
import Swal from 'sweetalert2';


const WishListCard = ({product,setwishListProducs,wishListProducts}) => {
    const  {product_title,product_image,description,price,availability,product_id}=product;
    const removeProduct=()=>{
        const updateCart=wishListProducts.filter((product)=>product.product_id !==product_id)
        setwishListProducs(updateCart)
        localStorage.setItem('wishLists', JSON.stringify(updateCart));
       }
     const handleAddToCart = () => {
        const products = JSON.parse(localStorage.getItem("cart")) || [];
    
        // Check if the product already exists in the cart
        const productIndex = products.findIndex(
          (item) => item.product_id === product.product_id
        );
        let productAdded = false;
        if (productIndex !== -1) {
          // Product found, increase quantity by 1
          const existingProduct = products[productIndex];
          existingProduct.quantity += 1;
          productAdded = false;
        } else {
          // Product not found, add with quantity 1
          products.push({ ...product, quantity: 1 });
          productAdded = true;
        }
    
        // Update the cart in localStorage with the updated products array
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
        removeProduct();
    
       
      };
    return (
         <div className='flex justify-between  gap-5 mt-5 rounded-xl max-sm: items-center shadow-xl border-1 p-5 '>
                <div className='flex max-sm:flex-col max-sm:items-start max-sm:gap-5 gap-10 items-center'>
                    <div className='w-[220px] h-[120px] rounded-xl '>
                     <img src={product_image}  className='w-full rounded-xl h-full' alt="Product Image" />
                    </div>
                    <div className='flex flex-col'>
                    <h2 className="font-bold text-xl">{product_title}</h2>
          <p className="text-gray-700">{description}</p>
          <h3 className="text-gray-900 ">Item Price: $ {price.toFixed(2)}</h3>
          <button onClick={handleAddToCart}
                disabled={!availability}
                className={`bg-white px-6 w-[200px]  hover:bg-[#9538E2]  text-[#9538E2] my-3 hover:text-white py-3 text-[16px] font-semibold rounded-[32px] border-2 border-[#9538E2] ${
                  !availability ? "cursor-not-allowed" : ""
                }`}
              >
                Add to Cart
              </button>
                    </div>
                </div>
                <div><img title={`Remove ${product_title}`} onClick={removeProduct} src={deleteIcon} alt="DeleteIcon" /></div>
            </div>
    );
};

export default WishListCard;