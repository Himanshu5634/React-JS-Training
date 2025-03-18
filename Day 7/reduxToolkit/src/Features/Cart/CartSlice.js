import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  products : [
    {
      id: 1,
      productName: "product 1",
      productPrice: "1000",
    },
    {
      id: 2,
      productName: "product 2",
      productPrice: "1000",
    },
  ]
};



export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      try {
        console.log(action,"adca");
        
        const cartItem = state.cartItems.find(
          (cartItem) => cartItem.productId === action.payload       
        );
        
          if (cartItem) {
          state.cartItems = state.cartItems.map((cartItem) =>
            cartItem.productId == action.payload
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          const product = state.products.find((product) => product.id === action.payload)
          console.log(product,"product");
          
          const newCartItem = {
            id: nanoid(),
            productId : product.id,
            productName: product.productName,
            quantity: 1,
            productPrice: product.productPrice,
          };
          state.cartItems.push(newCartItem);
        }
      
      } catch (error) {
        console.log(error);
      }
    },
    removeFromCart: (state, action) => {
      try {
        console.log(action);
        
        const cartItem = state.cartItems.find(
          (cartItem) => cartItem.id == action.payload
        );

        if (cartItem.quantity > 1) {
          state.cartItems = state.cartItems.map((cartItem) =>
            cartItem.id == action.payload
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        } else {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id != action.payload
          );
        }
      } catch (error) {
        console.log(error);
      }
    },

  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
