import React, { Component } from "react";
import bi_calendar_week_fill from "../Img/bi_calendar-week-fill.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
class reward1 extends Component {
  state = {};
  render() {
    return (
      <div
        className="mt-4 vh-100"
        style={{ color: "white", padding: "0px 25px" }}
      >
        <h5
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Reward
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "600px",
            marginBottom: "15px",
          }}
        >
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
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            to
          </span>
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
      </div>
    );
  }
}

export default reward1;
