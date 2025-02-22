import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        {/*
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/" className="nav-link">
          <h1>Vapinsx</h1>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link" id="pro">
              Products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fa fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainDark);
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
    font-family: "Sniglet", cursive;
  }

  #pro {
    color: var(--mainWhite) !important ;
  }
  .nav-link:hover {
    color: var(--lightBlue);
  }
`;
