import { useParams } from "react-router";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import "../styles/detailpage.css";
const ProductDetails = () => {
  const params = useParams();
  const { products, addToCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  console.log(total);
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
          <p>
            {selectedItem.price.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </p>
          <button onClick={() => addToCart(parseInt(params.id))}>
            Add to Cart
          </button>
          <div className="amountWrap">
            <i
              className="ri-indeterminate-circle-fill"
              onClick={() => {
                setTotal((prev) => {
                  if (prev > 0) {
                    return prev - 1;
                  }
                  return prev;
                });
              }}
            ></i>
            <p>{total}</p>
            <i
              className="ri-add-circle-fill"
              onClick={() => {
                setTotal((prev) => {
                  return prev + 1;
                });
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
