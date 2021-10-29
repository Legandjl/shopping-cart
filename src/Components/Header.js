import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/cart">
        <i class="ri-shopping-cart-line"></i>
      </Link>
    </nav>
  );
};

export default Header;
