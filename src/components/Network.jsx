import React, { Component } from "react";
import bi_calendar_week_fill from "../Img/bi_calendar-week-fill.png";
import bx_bxs_right_arrow_circle from "../Img/bx_bxs-right-arrow-circle.png";
import Calendar from "react-calendar/dist/umd/Calendar";
class network extends Component {
  state = {};
  render() {
    return (
      <div style={{ color: "white", padding: "50px 25px" }} className="vh-100">
        <div className="d-flex justify-content-between flex-wrap mb-4">
          <div className="">
            <h5 className="network_heading" style={{ fontWeight: "bold" }}>
              NETWORK SIZE:
            </h5>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>$0</span>
          </div>
          <div className="dropdown">
            <div
              style={{ cursor: "pointer" }}
              className="reward_date_box "
              data-bs-toggle="dropdown"
            >
              <div className="d-flex align-content-center justify-content-between">
                <span className="reward_date_box_icon">
                  <img
                    src={bi_calendar_week_fill}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ verticalAlign: "baseline" }}
                  />
                </span>
                <span className="reward_date_box_text">11-02-2022</span>
              </div>
            </div>
            <div className="dropdown-menu" style={{ background: "#00000000" }}>
              <Calendar />
            </div>
          </div>
        </div>
        <div className="network_table_text">
          <table
            style={{
              width: "100%",
              background: "rgba(51, 49, 70, 0.3)",
              textAlign: "center",
              borderRadius: "20px 20px 0 0",
            }}
          >
            <thead>
              <tr>
                <th>MEMBER ID</th>
                <th>
                  <span>
                    <img src={bx_bxs_right_arrow_circle} alt="" />
                  </span>
                </th>
                <th>UPLINE ID</th>
                <th>DEPTH</th>
                <th>PERSONAL TVL</th>
                <th>GROUP TVL</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default network;
