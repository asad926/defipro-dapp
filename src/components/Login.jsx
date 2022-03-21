import React, { Component } from "react";
import LOGIN_PAGE_BG from "../Img/LOGIN PAGE BG.png";
import DEFIPRO_LOGO2_1 from "../Img/DEFIPRO LOGO2 1.png";
import bi_eye_fill from "../Img/bi_eye-fill.png";
import arrow_right from "../Img/arrow-right.png";
import { Link } from "react-router-dom";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import {globalStateContext} from "../js/GlobalContext";
class login extends Component {
  static contextType = globalStateContext;
  state = {
    input_type_pas: "password",
    open:true
  };

  user_login = async ()=>{
    const {state,dispatch} = this.context
    var myForm = document.getElementById('login_form');
    var formData = new FormData(myForm),
    result = {};

for (var entry of formData.entries())
{
    result[entry[0]] = entry[1];
}
//result['wallet'] = window.tronWeb.defaultAddress.base58;
result = JSON.stringify(result)

console.log("Data: "+result)
fetch('/api/login', {
method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',
},
body: result,
})
.then(response => response.json())
.then(data => {
  console.log(data.authenticated)
  dispatch({loggedIn:data.authenticated});  

})
.catch((error) => {
console.error('Error:', error);
});
}

  toggle_password = () => {
    if (this.state.input_type_pas == "password") {
      this.setState({ input_type_pas: "text" });
    } else {
      this.setState({ input_type_pas: "password" });
    }
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: `url("${LOGIN_PAGE_BG}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: "-115px",
          paddingTop: "150px",
          minHeight: "900px",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
      >
        <div className="row">
          <div className="col-lg-6 login-col-6">
            <img src={DEFIPRO_LOGO2_1} alt="" width="400px" />
          </div>
          <div className="col-lg-6 login-col-6">
            <div className="login-form-box">
              <h2 style={{ color: "white", fontWeight: "bold" }}>Login</h2>
              <form id="login_form">
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
                    name="uname"
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
                    name="password"
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
                <button onClick={this.user_login} type="button" className="login_form_submit">
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
                  <Link
                    style={{
                      display: "inline-block",
                      textDecorationLine: "none",
                    }}
                    to="/signup"
                  >
                    <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                      Sign Up
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>        
      </div>

    );
  }
}

export default login;
