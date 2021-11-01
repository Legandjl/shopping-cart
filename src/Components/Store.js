import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/store.css";
import { CartContext } from "./CartContext";
import LazyLoad from "react-lazyload";
const Store = () => {
  const { products } = useContext(CartContext);
  const storeItems = products.map((product) => {
    return (
      <div key={product.id}>
        <Link to={`/store/${product.id}`}>
          <LazyLoad height={200}>
            <img alt="cat" src={product.src} id={product.id} />
          </LazyLoad>
        </Link>
      </div>
    );
  });
  return <div className="store">{storeItems}</div>;
};
export default Store;
