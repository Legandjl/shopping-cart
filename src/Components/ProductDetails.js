import { useHistory, useParams } from "react-router";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import "../styles/detailpage.css";
const ProductDetails = () => {
  const { id } = useParams();

  const { products, addToCart } = useContext(CartContext);
  const history = useHistory();
  const [total, setTotal] = useState(1);
  const selectedItem = products.find((item) => {
    return item.id === parseInt(id);
  });
  const prevItem = () => {
    history.push(`${parseInt(id) - 1}`);
  };
  const nextItem = () => {
    history.push(`${parseInt(id) + 1}`);
  };
  return (
    <div className="productDetail">
      <div className="productInfo">
        <div className="detailWrap">
          {id > 0 && (
            <i
              className="ri-arrow-left-fill"
              style={{ position: "fixed", left: 10, top: "50vh" }}
              onClick={() => prevItem()}
            ></i>
          )}

          <img alt="cat" src={selectedItem.src} />
          {id < products.length - 1 && (
            <i
              className="ri-arrow-right-fill"
              style={{ position: "fixed", right: 10, top: "50vh" }}
              onClick={() => nextItem()}
            ></i>
          )}
        </div>
        <div className="productText">
          <p>
            {selectedItem.price.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </p>
          <button onClick={() => addToCart(parseInt(id), total)}>
            Add to Cart
          </button>
          <div className="amountWrap">
            <i
              className="ri-indeterminate-circle-fill"
              onClick={() => {
                setTotal((prev) => {
                  if (prev > 1) {
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
