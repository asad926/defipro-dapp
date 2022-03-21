import React, { Component } from "react";
import LOGIN_PAGE_BG from "../Img/LOGIN PAGE BG.png";
import DEFIPRO_LOGO2_1 from "../Img/DEFIPRO LOGO2 1.png";
import bi_eye_fill from "../Img/bi_eye-fill.png";
class signUp extends Component {
  state = {
          code_btn : "Get Code"
  };

  getCode= () =>{
    console.log("get Code!!!");
    if(this.state.code_btn != "Get Code") return;
    let countdown = 60;
    setInterval(() => {
        countdown = countdown - 1;
      this.setState({code_btn:countdown})
      if(countdown<0){
        this.setState({code_btn:"Get Code"})
        clearInterval();
      }
    }, 1000);

    var signup_email = document.getElementById('signup_email');
    var result = {email:signup_email.value}
    result = JSON.stringify(result)
    fetch('/api/send-code', {
method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',
},
body: result,
})
.then(response => response.json())
.then(data => {
})
.catch((error) => {
console.error('Error:', error);
});
  }

  user_signup= () =>{
    console.log("userRegistered!!!");
    this.signup_user();
  }

  signup_user = async ()=>{
    var myForm = document.getElementById('user_form');
    var formData = new FormData(myForm),
    result = {};

for (var entry of formData.entries())
{
    result[entry[0]] = entry[1];
}
//result['wallet'] = window.tronWeb.defaultAddress.base58;
result = JSON.stringify(result)

console.log("Data: "+result)
fetch('/api/signup', {
method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',
},
body: result,
})
.then(response => response.json())
.then(data => {
})
.catch((error) => {
console.error('Error:', error);
});
}

  render() {
    return (
      <div
        style={{
          backgroundImage: `url("${LOGIN_PAGE_BG}")`,
          marginTop: "-150px",
          paddingTop: "150px",
          minHeight: "900px",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
      >
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 login-col-6">
            <img src={DEFIPRO_LOGO2_1} alt="" width="400px" />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 login-col-6">
            <div className="signup-form-box">
              <h2 style={{ color: "white", fontWeight: "bold" }}>Sign Up</h2>
              <form id="user_form">
                <div className="d-flex justify-content-between flex-wrap">
                  <div style={{ marginTop: "20px", width: "280px" }}>
                    <label
                      className="form-label"
                      style={{ color: "white" }}
                      htmlFor="signup_username"
                    >
                      Username
                    </label>

                    <input
                      className="form-control"
                      id="signup_username"
                      type="text"
                      name="uname"
                      placeholder="Please enter the user name"
                    />
                  </div>
                  <div style={{ marginTop: "20px", width: "280px" }}>
                    <label
                      className="form-label"
                      style={{ color: "white" }}
                      htmlFor="signup_email"
                    >
                      Email*
                    </label>

                    <input
                      className="form-control"
                      id="signup_email"
                      type="text"
                      name="email"
                      placeholder="Please enter email"
                    />
                  </div>
                  <div style={{ marginTop: "20px", width: "280px" }}>
                    <label
                      className="form-label"
                      style={{ color: "white" }}
                      htmlFor="signup_password"
                    >
                      Password
                    </label>

                    <input
                      className="form-control"
                      id="signup_password"
                      type={this.state.input_type_pas}
                      name="password"
                      placeholder="Please enter the password"
                    />
                    <span
                      onClick={this.toggle_password}
                      style={{
                        position: "relative",
                        top: "-35px",
                        right: "-280px",
                      }}
                    >
                      <img src={bi_eye_fill} alt="" />
                    </span>
                  </div>
                  <div style={{ marginTop: "20px", width: "280px" }}>
                    <label
                      className="form-label"
                      style={{ color: "white" }}
                      htmlFor="signup_reEnter_pasword"
                    >
                      Re-Enter Password*
                    </label>

                    <input
                      className="form-control"
                      id="signup_reEnter_pasword"
                      type="text"
                      name="re_password"
                      placeholder="Please re-enter password"
                    />
                  </div>
                  <div style={{ marginTop: "20px", width: "280px" }}>
                    <label
                      className="form-label"
                      style={{ color: "white" }}
                      htmlFor="signup_verification_cod"
                    >
                      Verification Code*
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="verification"
                        className="form-control"
                        placeholder="Please enter verification code"
                        id="signup_verification_cod"
                      />
                      <button
                        className="btn btn-primary"
                        style={{
                          background:
                            "linear-gradient(90deg, #4925DB 0%, #2172E5 100%)",
                        }}
                        type="button"
                        onClick={this.getCode}
                        disabled={!this.state.code_btn === "Get Code"}
                      >
                        {this.state.code_btn}
                      </button>
                    </div>
                  </div>
                  <div style={{ marginTop: "20px", width: "280px" }}>
                    <label
                      className="form-label"
                      style={{ color: "white" }}
                      htmlFor="signup_invitation_cod"
                    >
                      Invitation Code*
                    </label>

                    <input
                      className="form-control"
                      id="signup_invitation_cod"
                      type="text"
                      name="invitation"
                      placeholder="Please enter invitation code"
                    />
                  </div>
                  <div style={{ marginTop: "20px", width: "280px" }}>
                    <label
                      className="form-label"
                      style={{ color: "white" }}
                      htmlFor="signup_bsc_address"
                    >
                      BSC Address*
                    </label>

                    <input
                      className="form-control"
                      id="signup_bsc_address"
                      type="text"
                      name="wallet"
                      placeholder="Please enter BCS Wallet Address"
                    />
                  </div>
                  <div style={{ marginTop: "20px", width: "280px" }}>
                    <label
                      className="form-label"
                      style={{ color: "white" }}
                      htmlFor="signup_contact"
                    >
                      Contact*
                    </label>

                    <input
                      className="form-control"
                      id="signup_contact"
                      type="text"
                      name="contact"
                      placeholder="Please enter contact number"
                    />
                  </div>
                </div>
                <div className="form-check mt-4 text-white">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                    />{" "}
                    I have read carefully the service agreement and user privacy
                    policy
                  </label>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button type="button" className="signup_form_submit" onClick={this.user_signup}>
                    <span>Register</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signUp;
