import React, { Component } from "react";
import bi_eye_fill from "../Img/bi_eye-fill.png";
import arrow_right from "../Img/arrow-right.png";
class loginPopup extends Component {
  state = {};
  render() {
    return (

      <div className="login-form-box">
        
        <h2 style={{ color: "white", fontWeight: "bold" }}>Login</h2>
        <form action="">
          <div style={{ marginTop: "20px" }}>
            <label
              className="form-label"
              style={{ color: "white" }}
              htmlFor="login_username"
            >
              Username
            </label>

            <input
              className="form-control"
              id="login_username"
              type="text"
              placeholder="xxxxxxxx"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label
              className="form-label"
              style={{ color: "white" }}
              htmlFor="login_password"
            >
              Password
            </label>

            <input
              className="form-control"
              id="login_password"
              type={this.state.input_type_pas}
              placeholder="xxxxxxxx"
            />
            <span
              onClick={this.toggle_password}
              style={{
                position: "relative",
                top: "-35px",
                right: "-320px",
              }}
            >
              <img src={bi_eye_fill} alt="" />
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginBottom: "30px",
            }}
          >
            <a
              style={{ display: "inline-block" }}
              className="login_forget_pas"
              href=""
            >
              Forgot password!
            </a>
          </div>
          <button type="submit" class="login_form_submit">
            <span style={{ marginRight: "20px" }}>Let’s Go</span>
            <span>
              <img src={arrow_right} alt="" />
            </span>
          </button>
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <span>Do you have account?</span>
            <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
              Sign Up
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default loginPopup;
