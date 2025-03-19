import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Features/Cart/CartSlice";
import { s25_ultra } from "../../assets/assets";

const Products = () => {

  const products = useSelector((state) => state.products)
  console.log(products);
  
  const dispatch = useDispatch();

  /**
   * 
   * @param {product} productDetails
   */
  const handleAddToCart = (product) => {
    try {
      dispatch(addToCart(product));
    } catch (error) {
      console.log("ADD TO CART ERROR : ", error);
    }
  };
  // const { productName = "xyz", productPrice = "1000" } = products;
  return (
    <div className="product">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-img">
            <img src={s25_ultra} alt={product.productName} />
          </div>
          <div className="product-name"><h3>{product.productName}</h3></div>
          <div className="product-price">{product.productPrice}</div>
          <div className="add-to-cart">
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
