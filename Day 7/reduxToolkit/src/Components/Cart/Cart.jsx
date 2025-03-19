import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart,addToCart,removeItemFromCart } from "../../Features/Cart/CartSlice";
import { s25_ultra } from "../../assets/assets.js";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  // const cartItems = JSON.parse(localStorage.getItem("cart")) || []

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * @param {id}  productId
   * @description  remove 1 quantity of product from cart
   */
  const handleQuantity = (id,action) => {
   if(action == "plus"){
    dispatch(addToCart(id))
   }else{
    dispatch(removeFromCart(id));
   }    
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id))
  }

  return (
    <div className="cart">
      <div className="cart-card">
        {cartItems.length > 0 ? (
          <>
            {cartItems?.map((cartItem, index) => (
              <div className="card" key={index}>
                <div className="item-img">
                  <img src={s25_ultra} alt="" />
                </div>
                <div className="item-name">
                  <p> {cartItem.productName}</p>
                </div>
                <div className="item-price">
                  <p> {cartItem.productPrice}</p>
                </div>
                <div className="item-quantity">
                 <button onClick={() => handleQuantity(cartItem.id,"plus")}>+</button> <p> {cartItem.quantity}</p> <button onClick={() => handleQuantity(cartItem.id,"desc")}>-</button>
                </div>
                <div className="item-total-price">
                <p>total : {cartItem.productPrice * cartItem.quantity}</p>
                </div>
                <div className="remove-btn">
                <button onClick={() => handleRemoveFromCart(cartItem.id)}>
                  remove From cart
                </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>no data found</>
        )}
      </div>
      <hr />
      <div className="total">
        total :{" "}
        {cartItems.reduce(
          (a, cartItem) =>
            parseInt(cartItem.productPrice) * cartItem.quantity + a,
          0
        )}
      </div>
    </div>
  );
};

export default Cart;
