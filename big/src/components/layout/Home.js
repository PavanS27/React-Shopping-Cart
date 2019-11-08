import React, { Component, useRef, useEffect } from "react";
import { ScrollTo } from "react-scroll-to";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import styled from "styled-components";
import ProductList from "../ProductList";

const HoverText = styled.h4`
  :hover {
    background-color: white;
  }
`;

const Font1 = styled.h1`
  font-family: "Noto Sans JP", sans-serif;
`;

export default class Home extends Component {
  render() {
    return (
      <div className="container" style={{ width: 1550, marginLeft: -16 }}>
        <div className="row">
          <div className="col-md-12">
            <div
              id="carousel-example-generic"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators" style={{ marginLeft: 400 }}>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="1"
                ></li>

                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="3"
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="4"
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="5"
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="6"
                ></li>
              </ol>
              <div className="carousel-inner" style={{ width: 1500 }}>
                <div className="item ">
                  <img
                    src="https://images.pexels.com/photos/2766334/pexels-photo-2766334.jpeg"
                    alt="First slide"
                    style={{ width: "100%", height: 700, opacity: 0.8 }}
                  />
                  <div className="carousel-caption">
                    <Bounce top duration="3000">
                      <ScrollTo>
                        {({ scrollTo }) => (
                          <i
                            style={{ fontSize: 30, cursor: "pointer" }}
                            className=" glyphicon glyphicon-chevron-down"
                            onClick={() =>
                              scrollTo({ x: 20, y: 700, smooth: true })
                            }
                          ></i>
                        )}
                      </ScrollTo>
                    </Bounce>
                  </div>
                </div>
                <div className="item">
                  <img
                    src="https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg"
                    alt="Second slide"
                    style={{ width: "100%", height: 700, opacity: 0.65 }}
                  />
                  <div className="carousel-caption">
                    <ScrollTo>
                      {({ scrollTo }) => (
                        <i
                          style={{ fontSize: 30, cursor: "pointer" }}
                          className=" glyphicon glyphicon-chevron-down"
                          onClick={() =>
                            scrollTo({ x: 20, y: 700, smooth: true })
                          }
                        ></i>
                      )}
                    </ScrollTo>
                  </div>
                </div>
                <div className="item active">
                  <img
                    src="https://images.pexels.com/photos/1117272/pexels-photo-1117272.jpeg"
                    alt="Third slide"
                    style={{ width: "100%", height: 700, opacity: 0.8 }}
                  />
                  <div className="carousel-caption">
                    <ScrollTo>
                      {({ scrollTo }) => (
                        <i
                          style={{ fontSize: 30, cursor: "pointer" }}
                          className=" glyphicon glyphicon-chevron-down"
                          onClick={() =>
                            scrollTo({ x: 20, y: 700, smooth: true })
                          }
                        ></i>
                      )}
                    </ScrollTo>
                  </div>
                </div>
                <div className="item">
                  <img
                    src="https://images.pexels.com/photos/2422574/pexels-photo-2422574.jpeg"
                    alt="fourth slide"
                    style={{ width: "100%", height: 700, opacity: 0.65 }}
                  />
                  <div className="carousel-caption">
                    <ScrollTo>
                      {({ scrollTo }) => (
                        <i
                          style={{ fontSize: 30, cursor: "pointer" }}
                          className=" glyphicon glyphicon-chevron-down"
                          onClick={() =>
                            scrollTo({ x: 20, y: 700, smooth: true })
                          }
                        ></i>
                      )}
                    </ScrollTo>
                  </div>
                </div>
                <div className="item">
                  <img
                    src="https://images.pexels.com/photos/2344620/pexels-photo-2344620.jpeg"
                    alt="Fifth slide"
                    style={{ width: "100%", height: 700, opacity: 0.65 }}
                  />
                  <div className="carousel-caption">
                    <ScrollTo>
                      {({ scrollTo }) => (
                        <i
                          style={{ fontSize: 30, cursor: "pointer" }}
                          className=" glyphicon glyphicon-chevron-down"
                          onClick={() =>
                            scrollTo({ x: 20, y: 700, smooth: true })
                          }
                        ></i>
                      )}
                    </ScrollTo>
                  </div>
                </div>
                <div className="item">
                  <img
                    src="https://images.pexels.com/photos/1451355/pexels-photo-1451355.jpeg"
                    alt="Sixth slide"
                    style={{ width: "100%", height: 700, opacity: 0.65 }}
                  />
                  <div className="carousel-caption">
                    <ScrollTo>
                      {({ scrollTo }) => (
                        <i
                          style={{ fontSize: 30, cursor: "pointer" }}
                          className=" glyphicon glyphicon-chevron-down"
                          onClick={() =>
                            scrollTo({ x: 20, y: 700, smooth: true })
                          }
                        ></i>
                      )}
                    </ScrollTo>
                  </div>
                </div>
                <div className="item">
                  <img
                    src="https://images.pexels.com/photos/1534134/pexels-photo-1534134.jpeg"
                    alt="Seventh slide"
                    style={{ width: "100%", height: 700, opacity: 0.9 }}
                  />
                  <div className="carousel-caption">
                    <ScrollTo>
                      {({ scrollTo }) => (
                        <i
                          style={{ fontSize: 30, cursor: "pointer" }}
                          className=" glyphicon glyphicon-chevron-down"
                          onClick={() =>
                            scrollTo({ x: 20, y: 700, smooth: true })
                          }
                        ></i>
                      )}
                    </ScrollTo>
                  </div>
                </div>
              </div>
              <a
                className="left carousel-control"
                href="#carousel-example-generic"
                data-slide="prev"
              >
                <span className="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a
                className="right carousel-control"
                href="#carousel-example-generic"
                data-slide="next"
                style={{ marginRight: -400 }}
              >
                <span className="glyphicon glyphicon-chevron-right"></span>
              </a>
            </div>
            <div className="main-text ">
              <div className="col-md-12 text-center">
                <Roll top>
                  <Font1
                    style={{
                      position: "absolute",
                      marginTop: -500,
                      marginLeft: 620,
                      fontSize: 100,
                      color: "white",
                      textShadow: "2px 2px  black"
                    }}
                  >
                    Cycles
                  </Font1>
                </Roll>
              </div>
              <div>
                <Fade left duration="3000">
                  <h4
                    style={{
                      position: "absolute",
                      marginTop: -370,
                      marginLeft: 680,
                      fontSize: 16,
                      color: "white",
                      textShadow: "2px 2px  black",

                      fontFamily: "'Raleway', sans-serif;"
                    }}
                  >
                    Always living with you
                  </h4>
                </Fade>
                <div>
                  <LightSpeed delay="3000">
                    <h4
                      style={{
                        position: "absolute",
                        marginTop: -270,
                        marginLeft: 570,
                        fontSize: 20,
                        color: "white",
                        border: "2px solid rgba(0, 181, 204, 1)",
                        padding: "16px 32px",
                        cursor: "pointer",
                        borderRadius: "30px",
                        backgroundColor: "rgba(0, 181, 204, 1)",
                        textShadow: "2px 2px  black",
                        boxShadow: "5px 10px 16px #888888"
                      }}
                    >
                      Products
                    </h4>
                  </LightSpeed>
                </div>
                <div>
                  <LightSpeed delay="5000">
                    <HoverText
                      style={{
                        position: "absolute",
                        marginTop: -270,
                        marginLeft: 800,
                        fontSize: 20,
                        color: "white",
                        border: "2px solid white",
                        padding: "16px 32px",
                        cursor: "pointer",
                        borderRadius: "30px",
                        textShadow: "2px 2px  black",
                        boxShadow: "5px 10px 16px #888888"
                      }}
                    >
                      Services
                    </HoverText>
                  </LightSpeed>
                </div>
                <div>
                  <h4
                    data-toggle="modal"
                    data-target="#myModal"
                    style={{
                      position: "absolute",
                      marginTop: -670,
                      marginLeft: 1050,
                      fontSize: 20,
                      color: "white",
                      border: "2px solid rgba(0, 181, 204, 1)",
                      padding: "16px 32px",
                      cursor: "pointer",
                      borderRadius: "30px",
                      textShadow: "2px 2px  black",
                      boxShadow: "5px 10px 16px #888888",
                      backgroundColor: "rgba(0, 181, 204, 1)"
                    }}
                  >
                    Login
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      position: "absolute",
                      marginTop: -670,
                      marginLeft: 1200,
                      fontSize: 20,
                      color: "white",
                      border: "2px solid rgba(0, 181, 204, 1)",
                      padding: "16px 32px",
                      cursor: "pointer",
                      borderRadius: "30px",
                      textShadow: "2px 2px  black",
                      boxShadow: "5px 10px 16px #888888",
                      backgroundColor: "rgba(0, 181, 204, 1)",
                      width: 260
                    }}
                  >
                    Partnership Program
                  </h4>
                </div>
                <div class="modal fade" id="myModal" role="dialog">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                        <h4 class="modal-title">Modal Header</h4>
                      </div>
                      <div class="modal-body">
                        <p>Some text in the modal.</p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductList />
      </div>
    );
  }
}
