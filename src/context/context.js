import React, { Component } from "react";

const ProductContext = React.createContext();

// Provider
// Consumer
class ProductProvider extends Component {
  state = {
    sideBarOpen: false,
    cartOpen: false,
    cartItems: 10
  };

  handleSideBar = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen
    });
  };

  handleCart = () => {
    this.setState({
      cartOpen: !this.state.sideBarOpen
    });
  };

  // close cart
  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };

  //open cart
  openCart = () => {
    this.setState({
      cartOpen: true
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSideBar: this.handleSideBar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductComsumer = ProductContext.Consumer;
export { ProductProvider, ProductComsumer };
