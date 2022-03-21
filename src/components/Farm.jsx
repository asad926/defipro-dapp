import React, { Component } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
class farm extends Component {
  state = {};
  render() {
    return (
      <div
        className="px-5 container"
        style={{ color: "white", paddingBottom: "180px", paddingTop: "50px" }}
      >
        <h1 className="stacks_to_earn_usdt">
          STACKS . TO EARN <span className="defilabs-text-gradient">USDT</span>
        </h1>
        <div className="row">
          <div className="col-lg-4 mt-4 px-3">
            <Card1 />
          </div>
          <div className="col-lg-4 mt-4 px-3">
            <Card2 />
          </div>
          <div className="col-lg-4 mt-4 px-3">
            <Card3 />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mt-4 px-3">
            <Card1 />
          </div>
          <div className="col-lg-4 mt-4 px-3">
            <Card2 />
          </div>
          <div className="col-lg-4 mt-4 px-3">
            <Card3 />
          </div>
        </div>
      </div>
    );
  }
}

export default farm;
