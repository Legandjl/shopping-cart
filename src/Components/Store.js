import { useContext, useEffect, useState } from "react";
import "../styles/store.css";
import { CartContext } from "./CartContext";
import ImageElement from "./ImageElement";

const Store = () => {
  const { products } = useContext(CartContext);
  const [loadingStatus, setLoading] = useState(true);

  useEffect(() => {
    const cacheImages = async (products) => {
      const imagePromises = await products.map((product) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = product.src;
          img.onload = resolve();
          img.onerror = reject();
        });
      });
      await Promise.all(imagePromises).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 200);
      });
    };
    cacheImages(products);
  }, [products]);

  return (
    <div className="store">
      {loadingStatus ? (
        <div></div>
      ) : (
        products.map((product) => {
          return (
            <ImageElement src={product.src} key={product.id} id={product.id} />
          );
        })
      )}
    </div>
  );
};
export default Store;
