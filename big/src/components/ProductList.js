import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import "bootstrap/dist/css/bootstrap.min.css";

import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
              <h4
                style={{
                  marginLeft: 600,
                  border: "2px solid rgba(0, 181, 204, 1)",
                  padding: "5px 10px",
                  width: 100,
                  borderRadius: "3px",
                  backgroundColor: "rgba(0, 181, 204, 1)",
                  color: "white",
                  fontSize: 20,
                  cursor: "pointer"
                }}
              >
                View all
              </h4>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
