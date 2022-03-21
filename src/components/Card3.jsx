import React, { Component } from "react";
import USDT from "../Img/USDT.png";
import CALCULATOR from "../Img/CALCULATOR.png";
import USDT_S from "../Img/USDT S.png";
import FarmPopUp2 from "./FarmPopUp2";
import FarmPopUp from "./FarmPopUp";
import Popup from "reactjs-popup";
class card3 extends Component {
  state = {
    approve: "homePage-card1-values-btn-active",
    harvest: "homePage-card1-values-btn",
    withdraw: "homePage-card1-values-btn",
  };
  click_approve = () => {
    if (this.state.approve == "homePage-card1-values-btn") {
      this.setState({ approve: "homePage-card1-values-btn-active" });
    } else {
      this.setState({ approve: "homePage-card1-values-btn" });
    }
  };
  click_harvest = () => {
    if (this.state.harvest == "homePage-card1-values-btn") {
      this.setState({ harvest: "homePage-card1-values-btn-active" });
    } else {
      this.setState({ harvest: "homePage-card1-values-btn" });
    }
  };
  click_withdraw = () => {
    if (this.state.withdraw == "homePage-card1-values-btn") {
      this.setState({ withdraw: "homePage-card1-values-btn-active" });
    } else {
      this.setState({ withdraw: "homePage-card1-values-btn" });
    }
  };
  render() {
    return (
      <div className="homePage-card1">
        <div className="homePage-card1-bg p-4">
          <div className="d-flex justify-content-between mb-5">
            <Popup
              trigger={
                <span className="card_main_icon">
                  <img
                    src={USDT}
                    alt=""
                    style={{ cursor: "pointer" }}
                    width="100%"
                    height="100%"
                  />
                </span>
              }
              modal
              nested
            >
              <FarmPopUp2 />
            </Popup>
            <h5 className="card_heading_text">DEFIPRO AI – USDT</h5>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="homePage-card1-titles">APY</span>
            <div>
              <img src={CALCULATOR} alt="" className="me-3" />
              <span className="homePage-card1-values">198.43%-414.91%</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="homePage-card1-titles">Farms</span>
            <span className="homePage-card1-values">USDT</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="homePage-card1-titles">Earn</span>
            <div>
              <span className="homePage-card1-values me-3">USDT</span>
              <img src={USDT_S} alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="homePage-card1-titles">Non-Deposit Lockup</span>
          </div>
          <div className="d-flex flex-wrap justify-content-between mb-2">
            <span
              style={{ position: "relative", top: "5px" }}
              className="homePage-card1-titles"
            >
              CAKE BALANCE
            </span>
            <div className="d-flex">
              <span
                style={{ position: "relative", top: "5px" }}
                className="homePage-card1-values me-3"
              >
                10000
              </span>
              <button
                onClick={this.click_approve}
                className={this.state.approve}
              >
                <span className="homePage-card1-values-btn-text"> APPROVE</span>
              </button>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between mb-2">
            <span
              style={{ position: "relative", top: "5px" }}
              className="homePage-card1-titles"
            >
              USDT EARNED
            </span>
            <div className="d-flex">
              <span
                style={{ position: "relative", top: "5px" }}
                className="homePage-card1-values me-3"
              >
                10000
              </span>
              <button
                onClick={this.click_harvest}
                className={this.state.harvest}
              >
                <span className="homePage-card1-values-btn-text"> HARVEST</span>
              </button>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between align-content-center mb-4">
            <span
              style={{ position: "relative", top: "5px" }}
              className="homePage-card1-titles"
            >
              CAKE STAKED
            </span>
            <div className="d-flex">
              <span
                style={{ position: "relative", top: "5px" }}
                className="homePage-card1-values me-3"
              >
                5000
              </span>
              <button
                onClick={this.click_withdraw}
                className={this.state.withdraw}
              >
                <span className="homePage-card1-values-btn-text">
                  {" "}
                  WITHDRAW
                </span>
              </button>
            </div>
          </div>
          <Popup
            trigger={
              <button className="homePage-card1-submit-btn">
                <span className="homePage-card1-values-btn-text">DEPOSIT</span>
              </button>
            }
            modal
            nested
          >
            <FarmPopUp />
          </Popup>
        </div>
      </div>
    );
  }
}

export default card3;
