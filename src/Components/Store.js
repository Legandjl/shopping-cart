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
        setLoading(false);
      });
    };
    cacheImages(products);
  }, [products]);

  const imageElements = products.map((product) => {
    return <ImageElement src={product.src} key={product.id} id={product.id} />;
  });

  return (
    <div className="store">{loadingStatus ? <div></div> : imageElements}</div>
  );
};
export default Store;
