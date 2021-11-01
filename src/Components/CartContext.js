import React, { useState } from "react";
import products from "../productData/products";

const cartContext = React.createContext();

const CartContextProvider = (props) => {
  const [productData] = useState(products);
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (id) => {
    const filteredArray = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(() => {
      return filteredArray;
    });
  };

  const emptyCart = () => {
    setCartItems(() => {
      return [];
    });
  };

  const addToCart = (id, total) => {
    setCartItems((prev) => {
      const alreadyInCart = prev.some((item) => {
        return item.id === id;
      });
      const toAdd = alreadyInCart
        ? {
            ...prev.find((item) => item.id === id),
            quantity: prev.find((item) => item.id === id).quantity + total,
          }
        : { ...productData.find((item) => item.id === id), quantity: total };

      return alreadyInCart
        ? [
            ...prev.filter((item) => {
              return item.id !== id;
            }),
            toAdd,
          ]
        : [...prev, toAdd];
    });
  };

  return (
    <cartContext.Provider
      value={{
        products: productData,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export { CartContextProvider, cartContext as CartContext };
