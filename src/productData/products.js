import cat1 from "../images/cat1.jpg";
import cat2 from "../images/cat2.jpg";
import cat3 from "../images/cat3.jpg";
import cat4 from "../images/cat4.jpg";
import cat5 from "../images/cat5.jpg";
import cat6 from "../images/cat6.jpg";
import cat7 from "../images/cat7.jpg";
import cat8 from "../images/cat8.jpg";
import cat9 from "../images/cat9.jpg";
import cat10 from "../images/cat10.jpg";
import cat11 from "../images/cat11.jpg";
import cat12 from "../images/cat12.jpg";
import cat13 from "../images/cat13.jpg";
import cat14 from "../images/cat14.jpg";
import cat15 from "../images/cat15.jpg";

const products = () => {
  const images = [
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
    cat6,
    cat7,
    cat8,
    cat9,
    cat10,
    cat11,
    cat12,
    cat13,
    cat14,
    cat15,
  ];

  const prices = [29.99, 39.99, 49.99];

  let priceIndex = 0;

  const products = images.map((img, i) => {
    if (priceIndex === 3) {
      priceIndex = 0;
    }
    let price = prices[priceIndex];
    priceIndex++;
    return {
      src: img,
      id: i,
      price: price,
    };
  });

  return products;
};

export default products();
