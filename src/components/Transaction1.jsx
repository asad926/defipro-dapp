import React, { Component } from "react";
class transaction1 extends Component {
  state = {};
  render() {
    return (
      <div className="vh-100" style={{ color: "white", padding: "50px 25px" }}>
        <h5 className="bouns_plan_heading" style={{ textAlign: "left" }}>
          Current Stake List
        </h5>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <table
            className="table-col-right-border"
            style={{
              width: "100%",
              background: "rgba(51, 49, 70, 0.3)",
              textAlign: "center",
              borderRadius: "20px 20px 0 0",
            }}
          >
            <thead>
              <tr>
                <th>Balance</th>
                <th>PRICE</th>
                <th>TVL</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default transaction1;
