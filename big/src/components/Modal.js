import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {hello => {
          const { modalOpen, closeModal } = hello;
          const { img, title, price } = hello.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                    >
                      <h5>Item added</h5>
                      <img src={img} className="img-fluid " />
                      <h5>{title}</h5>
                      <h5 className="text-muted"> price :${price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Continue shopping
                        </ButtonContainer>
                        <Link to="/cart">
                          <ButtonContainer cart onClick={() => closeModal()}>
                            Go to cart
                          </ButtonContainer>
                        </Link>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
