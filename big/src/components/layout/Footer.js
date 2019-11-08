import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div
        className="footer"
        style={{
          height: 70,
          backgroundColor: "rgba(236, 236, 236, 1)",
          marginTop: 40,
          width: 1550
        }}
      >
        <p style={{ marginLeft: 400, padding: "30px" }}>Cycles © 2019</p>
        <p style={{ marginLeft: 540, marginTop: -54 }}>Privacy and Legal</p>
        <p style={{ marginTop: -22, marginLeft: 680 }}>Contact</p>
        <p style={{ marginTop: -27, marginLeft: 760 }}>Careers</p>
        <p style={{ marginTop: -27, marginLeft: 850 }}>Get Newsletter</p>
        <p style={{ marginTop: -26, marginLeft: 980 }}>Forums</p>
        <p style={{ marginTop: -26, marginLeft: 1070 }}>Locations</p>
      </div>
    );
  }
}

export default Footer;
