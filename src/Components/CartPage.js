import { useContext } from "react";
import { CartContext } from "./CartContext";
import "../styles/cartpage.css";
import emptyCart from "../images/emptyCart.png";
import { useHistory } from "react-router";

const CartPage = () => {
  const cart = useContext(CartContext);
  const history = useHistory();

  const completeCheckout = () => {
    setTimeout(() => {
      history.push("/thanks");
      cart.emptyCart();
    }, 1000);
  };

  const getTotal = () => {
    let total = 0;
    cart.cartItems.forEach((element) => {
      for (let x = 0; x < element.quantity; x++) {
        total += element.price;
      }
    });
    return total;
  };

  const cartElements = cart.cartItems.map((item) => {
    return (
      <div key={item.id} className="cartItem">
        <img alt="cat" src={item.src}></img>
        <div className="productQuantity">
          <i
            className="ri-delete-bin-2-fill"
            onClick={() => cart.removeFromCart(item.id)}
          ></i>
          <p>quantity: {item.quantity}</p>
        </div>
      </div>
    );
  });

  return cartElements.length > 0 ? (
    <div className="cartWrap">
      <div className="cartPage">{cartElements}</div>
      <div className="checkOut">
        <p>
          Total:{" "}
          {getTotal().toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </p>
        <button
          onClick={() => {
            completeCheckout();
          }}
        >
          checkOut
        </button>
      </div>
    </div>
  ) : (
    <div className="emptyCart">
      <p>Your cart is empty! Head to the store page to start shopping! </p>
      <img alt="empty cart cat" src={emptyCart} />
    </div>
  );
};
export default CartPage;
