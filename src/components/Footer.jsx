import React, { Component } from "react";
class footer extends Component {
  state = {};
  render() {
    return (
      <div style={{ background: "#10183a" }}>
        <div className="container footer-box">
          <p>Copyright 2021 DefiPro. All Rights Reserved</p>

          <p style={{ margin: "0px" }}>
            Privacy Policy - Terms and Conditions DefiPro is not an investment.{" "}
          </p>
          <p>
            DefiPro makes no promises and is not responsible for any losses or
            errors use at your own risk.
          </p>
        </div>
      </div>
    );
  }
}

export default footer;
