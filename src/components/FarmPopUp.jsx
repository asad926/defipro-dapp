import React, { Component } from "react";
class farmPopUp extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          background: "#00082C",
          boxShadow: "0px 4px 38px 19px #3253E1",
          borderRadius: "12px",
          padding: "20px 40px",
          color: "white",
        }}
      >
        <h3 className="farm-popup-CONFIRM-heading">STAKE YOUR TOKEN</h3>
        <div
          style={{
            padding: "2px",
            borderRadius: "12px",

            background: "linear-gradient(90deg, #4925DB 0%, #2172E5 100%)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "rgb(0, 8, 44)",
              borderRadius: "12px",
              padding: "30px",
            }}
          >
            <div className="d-flex justify-content-between mb-2">
              <span className="formPopup_text">STAKE</span>
              <span className="formPopup_text">BALANCE: 100.00 CAKE</span>
            </div>
            <div className="d-flex justify-content-between">
              <span
                className="formPopup_text"
                style={{
                  position: "relative",
                  top: "8px",
                }}
              >
                0
              </span>
              <button className="formPopup_max_btn">
                <span className="homePage-card1-values-btn-text">MAX</span>
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between mt-2 p-4">
          <button className="farm-popup-CONFIRM me-1">
            <span className="farm-popup-CONFIRM-text">CANCEL</span>
          </button>
          <button className="farm-popup-CONFIRM">
            <span className="farm-popup-CONFIRM-text">CONFIRM</span>
          </button>
        </div>
      </div>
    );
  }
}

export default farmPopUp;
