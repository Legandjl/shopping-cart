import React, { useState } from "react";
import products from "../productData/products";

const cartContext = React.createContext();

const CartContextProvider = (props) => {
  const productData = products;
  return (
    <cartContext.Provider value={{ products: productData }}>
      {props.children}
    </cartContext.Provider>
  );
};

export { CartContextProvider, cartContext as CartContext };
