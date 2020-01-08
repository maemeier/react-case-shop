import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Homepage";
import About from "./pages/AboutPage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage.js";
import Default from "./pages/Default.js";

import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Sidebar from "./components/sideBar";
import Sidecart from "./components/sideCart";
import Footer from "./components/footer";
class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart,footer*/}
        <NavBar />
        <Sidebar />
        <Sidecart />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
