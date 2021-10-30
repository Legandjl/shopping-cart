import catBackground from "../images/catBackground.png";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="homePage">
      <p>Here at PawPrints we sell only the finest of cat photographs </p>{" "}
      <p>
        Take a look at our store page to find the purrfect artwork for your
        wall!{" "}
      </p>
      <img src={catBackground} />
    </div>
  );
};

export default Home;
