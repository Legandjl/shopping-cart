import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const getNumberOfCartItems = () => {
    let total = 0;
    cartItems.forEach((element) => {
      total += element.quantity;
    });
    return total;
  };

  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <div className="cartIconWrap">
        <Link to="/cart">
          <i className="ri-shopping-cart-line"> </i>
          {cartItems.length === 0
            ? ""
            : getNumberOfCartItems() < 100
            ? getNumberOfCartItems()
            : 100 + "+"}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
