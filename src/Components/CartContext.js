import React, { useState } from "react";
import products from "../productData/products";

const cartContext = React.createContext();

const CartContextProvider = (props) => {
  const [productData, setProductData] = useState(products);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    console.log(id);
    const productItem = productData.find((item) => {
      return item.id === id;
    });

    console.log(productItem);
    setCartItems((prev) => {
      return [...prev, productItem];
    });
  };

  return (
    <cartContext.Provider
      value={{ products: productData, addToCart, cartItems }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export { CartContextProvider, cartContext as CartContext };
