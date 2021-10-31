import thanks from "../images/thanks.png";
import "../styles/cartpage.css";

const ThanksPage = () => {
  return (
    <div className="thanksWrap">
      <div>
        <img alt={"thank you cat "} src={thanks} />
        <p>Thanks for your order!</p>
      </div>
    </div>
  );
};
export default ThanksPage;
