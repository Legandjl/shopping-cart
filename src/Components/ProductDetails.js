import { useParams } from "react-router";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import "../styles/detailpage.css";
const ProductDetails = () => {
  const params = useParams();
  const { products } = useContext(CartContext);
  const selectedItem = products.find((item) => {
    return item.id === parseInt(params.id);
  });
  return (
    <div className="productDetail">
      <div className="productInfo">
        <div className="detailWrap">
          <img alt="cat" src={selectedItem.src} />
        </div>
        <div className="productText">
          <p>Name:</p>
          <p>Personality:</p>
          <p>Age:</p>
          <p>Price:</p>
          <button>Add to Cart</button>
          <div class="amountWrap">
            <i class="ri-indeterminate-circle-fill"></i>
            <p>1</p>
            <i class="ri-add-circle-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
