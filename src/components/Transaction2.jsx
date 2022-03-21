import React, { Component } from "react";
import bi_calendar_week_fill from "../Img/bi_calendar-week-fill.png";
import Calendar from "react-calendar";
class transaction2 extends Component {
  state = {
    deposit: "transaction2-btns",
    harvest: "transaction2-btns",
    withdraw: "transaction2-btns",
    all: "transaction2-btns-active",
  };
  click_deposit = () => {
    if (this.state.deposit == "transaction2-btns") {
      this.setState({ deposit: "transaction2-btns-active" });
    } else {
      this.setState({ deposit: "transaction2-btns" });
    }
  };
  click_harvest = () => {
    if (this.state.harvest == "transaction2-btns") {
      this.setState({ harvest: "transaction2-btns-active" });
    } else {
      this.setState({ harvest: "transaction2-btns" });
    }
  };
  click_withdraw = () => {
    if (this.state.withdraw == "transaction2-btns") {
      this.setState({ withdraw: "transaction2-btns-active" });
    } else {
      this.setState({ withdraw: "transaction2-btns" });
    }
  };
  click_all = () => {
    if (this.state.all == "transaction2-btns") {
      this.setState({ all: "transaction2-btns-active" });
    } else {
      this.setState({ all: "transaction2-btns" });
    }
  };
  render() {
    return (
      <div
        className="mt-4 vh-100"
        style={{ color: "white", padding: "25px 25px" }}
      >
        <h5
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            margin: "20px 0",
          }}
        >
          TRANSACTION HISTORY
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
        <div
          style={{
            padding: "10px 0px",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "50px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <button onClick={this.click_deposit} className={this.state.deposit}>
            <span style={{}}>deposit</span>
          </button>

          <button onClick={this.click_harvest} className={this.state.harvest}>
            <span style={{}}>harvest</span>
          </button>

          <button onClick={this.click_withdraw} className={this.state.withdraw}>
            <span style={{}}>withdraw</span>
          </button>

          <button onClick={this.click_all} className={this.state.all}>
            <span style={{}}>ALL</span>
          </button>
        </div>
      </div>
    );
  }
}

export default transaction2;
