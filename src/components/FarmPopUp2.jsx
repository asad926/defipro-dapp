import React, { Component } from "react";
class farmPopUp2 extends Component {
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
        <h3 className="farm-popup-CONFIRM-heading">ROI DEFIPRO AI - CAKE</h3>
        <div
          style={{
            padding: "2px",
            borderRadius: "12px",
          }}
        >
          <table
            className="formPopup_text"
            style={{
              width: "100%",
            }}
          >
            <thead>
              <tr
                style={{ borderTop: "1px solid white", paddingBottom: "20px" }}
              >
                <th style={{ marginBottom: "20px" }}>TIMEFRAME</th>
                <th>ROI</th>
                <th>Per $1,000</th>
              </tr>
            </thead>
            <tr>
              <td>1D</td>
              <td>0.21% </td>
              <td>$ 2.10</td>
            </tr>
            <tr>
              <td>2D</td>
              <td>1.48% </td>
              <td>$ 14.80</td>
            </tr>
            <tr>
              <td>7D</td>
              <td>6.50%</td>
              <td>$ 65.00</td>
            </tr>
            <tr>
              <td>365D</td>
              <td>115.05%</td>
              <td>$1150.5</td>
            </tr>
          </table>
        </div>
        <div className="mt-4">
          <p className="formPopup_text">
            Calculated based on current rates. Compounding once daily. Rates are
            estimates provided for your convenience only, and by no means
            represent guaranteed returns.
          </p>
        </div>
      </div>
    );
  }
}

export default farmPopUp2;
