import "./styles/app.css";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import CartPage from "./Components/CartPage";
import Store from "./Components/Store";
import ProductDetails from "./Components/ProductDetails";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ThanksPage from "./Components/ThanksPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/store">
          <Store />
        </Route>

        <Route exact path="/store/:id">
          <ProductDetails />
        </Route>

        <Route path="/cart">
          <CartPage />
        </Route>

        <Route path="/thanks">
          <ThanksPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
