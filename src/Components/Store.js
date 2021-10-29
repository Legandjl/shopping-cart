import { useContext } from "react";
import "../styles/store.css";
import { CartContext } from "./CartContext";
import Image from "./Image";

const Store = () => {
  const { products } = useContext(CartContext);
  const images = products.map((product) => {
    return (
      <div className="imageWrapper">
        <Image id={product.id} key={product.id} src={product.src} />
      </div>
    );
  });
  return <div className="store">{images}</div>;
};
export default Store;
