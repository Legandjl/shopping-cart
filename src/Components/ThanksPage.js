import thanks from "../images/thanks.png";
import "../styles/cartpage.css";

const ThanksPage = () => {
  return (
    <div className="thanksWrap">
      <div>
        <img src={thanks} />
        <p>Thanks for your order!</p>
      </div>
    </div>
  );
};
export default ThanksPage;
