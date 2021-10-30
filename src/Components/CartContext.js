import React, { useState } from "react";
import products from "../productData/products";

const cartContext = React.createContext();

const CartContextProvider = (props) => {
  const [productData, setProductData] = useState(products);
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

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
    const productItem = productData.find((item) => {
      return item.id === id;
    });

    setCartItems((prev) => {
      const alreadyInCart = prev.some((item) => {
        return item.id === id;
      });

      if (alreadyInCart) {
        const currentCartItem = cartItems.find((item) => {
          return item.id === id;
        });
        total = currentCartItem.quantity += total;
      }
      return alreadyInCart
        ? [
            ...prev.filter((item) => {
              return item.id !== id;
            }),
            { ...productItem, quantity: total },
          ]
        : [...prev, { ...productItem, quantity: total }];
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
