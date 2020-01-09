import React from "react";
import { FaBars, FaCart, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductComsumer } from "../context";
import logo from "../images/logo.svg";
const Navbar = () => {
  return (
    <ProductComsumer>
      {value => {
        const { cartItems, handleSideBar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSideBar} />
              <img src={logo} alt="company-log" />
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart} />
                <div className="cart-items"> {cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductComsumer>
  );
};

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%
  padding:1rem 1.5rem;
  background:var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  .nav-center{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer
  }
  .nav-cart{
    position:relative;
  }
  .cart-items{
    background:var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -6px;
    padding: 0 5px;
    border-radius: 90px;

  }
`;
export default Navbar;
