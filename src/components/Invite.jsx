import React, { Component } from "react";
import invite_banner from "../Img/invite_banner.png";
class invite extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid my-5" style={{ color: "white" }}>
        <div className="container px-lg-5">
          <h1
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              padding: "0 25px",
            }}
          >
            Invite Friends
          </h1>
          <img
            src={invite_banner}
            alt="invite banner"
            width="100%"
            style={{ borderRadius: "1.5rem", margin: "1.25rem 0 2.5rem 0" }}
          />
          <h1
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              padding: "0 25px",
            }}
          >
            Share Invitation
          </h1>
          <p style={{ fontSize: "18px", opacity: "0.6", padding: "0 25px" }}>
            by sharing your exclusive link
          </p>
          <form action="">
            <div
              className="row"
              style={{ marginTop: "100px", padding: "0 25px" }}
            >
              <div className="col-lg-3 col-md-3">
                <label
                  className="form-label"
                  style={{ color: "white" }}
                  htmlFor="exclusive_link"
                >
                  Exclusive Link
                </label>
              </div>
              <div className="col-lg-9 col-md-9">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Exclusive Link"
                    id="exclusive_link"
                  />
                  <button
                    class="btn btn-primary"
                    style={{
                      background:
                        "linear-gradient(90deg, #4925DB 0%, #2172E5 100%)",
                    }}
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{ marginTop: "40px", padding: "0 25px" }}
            >
              <div className="col-lg-3 col-md-3">
                <label
                  className="form-label"
                  style={{ color: "white" }}
                  htmlFor="exclusive_invitation_code"
                >
                  Exclusive Invitation Code
                </label>
              </div>
              <div className="col-lg-9 col-md-9">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Exclusive Invitation Code"
                    id="exclusive_invitation_code"
                  />
                  <button
                    class="btn btn-primary"
                    style={{
                      background:
                        "linear-gradient(90deg, #4925DB 0%, #2172E5 100%)",
                    }}
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default invite;
