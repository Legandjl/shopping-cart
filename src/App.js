import "./styles/app.css";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import CartPage from "./Components/CartPage";
import Store from "./Components/Store";
import ProductDetails from "./Components/ProductDetails";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <p></p>
        </Route>

        <Route exact path="/store">
          <Store />
        </Route>

        <Route exact path="/store/:id">
          <ProductDetails />
        </Route>

        <Route path="/cart">
          <p></p>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
