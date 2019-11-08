import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
