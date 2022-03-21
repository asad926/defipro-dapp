import React, { Component } from "react";
import front_2 from "../Img/front 2.png";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import ai_1 from "../Img/ai 1.png";
import PRINCIPLED_ICON from "../Img/PRINCIPLED ICON.png";
import RITUALED_ICON from "../Img/RITUALED ICON.png";
import ADVANCEMENT_ICON from "../Img/ADVANCEMENT ICON.png";
import EARN_STABLE_GAIN_BG from "../Img/EARN · STABLE · GAIN BG.png";
import You_are_in_control from "../Img/You are in control.png";
import User_Friendly from "../Img/User Friendly.png";
import Transparency from "../Img/Transparency.png";
import Community from "../Img/Community.png";
import Longevity from "../Img/Longevity.png";
import Trust from "../Img/Trust.png";
import home_last_bg from "../Img/home last bg.png";
import Telecom from "../Img/Telecom.png";
import Twitter from "../Img/Twitter.png";
import arrow_right from "../Img/arrow-right.png";
import { Link } from "react-router-dom";
class homePage extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <div className="defipro_homepage_back">
          <Link
            style={{
              textDecorationLine: "none",
              display: "inline-block",
            }}
            to="/defipro"
          >
            <button className="defipro_learn_btn">
              <span>Learn more</span>
              <span>
                <img
                  src={arrow_right}
                  alt=""
                  style={{
                    marginLeft: "10px",
                    position: "relative",
                    top: "2px",
                  }}
                />
              </span>
            </button>
          </Link>
        </div>
        <div className="text-white mb-3 container">
          <div className="row">
            <div
              className="d-flex justify-content-center "
              style={{ marginTop: "70px", marginBottom: "110px" }}
            >
              <h1 className="stacks_to_earn_usdt">
                STACKS . TO EARN <span style={{ color: "#2d5be2" }}>USDT</span>
              </h1>
            </div>
            <div className="col-lg-4 homePage-stock mb-4 px-3">
              <Card1 />
            </div>
            <div className="col-lg-4 homePage-stock mb-4 px-3">
              <Card2 />
            </div>
            <div className="col-lg-4 homePage-stock mb-4 px-3">
              <Card3 />
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="homePage-card1-submit-btn"
                style={{ padding: "18px 24px", width: "318px" }}
              >
                <span
                  className="homePage-card1-values-btn-text"
                  style={{ fontSize: "18px" }}
                >
                  FARMS MORE
                </span>{" "}
              </button>
            </div>
          </div>
        </div>
        <div style={{ padding: "0 20px" }}>
          <div
            className="container"
            style={{
              color: "#FFFFFF",
              marginTop: "100px",
            }}
          >
            <h1 style={{ textAlign: "center" }}>
              INTRODUCING ARTIFICIAL INTELLIGENCE(AI) IN THE AGE OF DEFI
            </h1>
          </div>
          <div
            className="container px-4"
            style={{
              color: "#FFFFFF",
            }}
          >
            <p
              style={{
                textAlign: "center",
                opacity: "0.6",
              }}
            >
              DefiPro brings Artificial Intelligence (AI) to Defi and one major
              benefit of DeFi is the large quantity of public data being
              generated surrounding financial transactions. This vast collection
              of financial data can be used to train and improve artificial
              intelligence (AI) models, such as arbitrage bots that attempt to
              maximize gain from anticipated asset price fluctuations.
            </p>
          </div>
          <div className="ai_background">
            <div className="container">
              <div className="d-flex justify-content-between flex-wrap">
                <button className="homePage-card1-submit-btn ai_btns">
                  Error Reduction
                </button>
                <button className="homePage-card1-submit-btn ai_btns">
                  No Risks
                </button>
              </div>
              <div className="d-flex justify-content-between flex-wrap">
                <button className="homePage-card1-submit-btn ai_btns">
                  Unbiased Decisions
                </button>
                <button className="homePage-card1-submit-btn ai_btns">
                  24*7 Availability
                </button>
              </div>
              <div className="d-flex justify-content-between flex-wrap">
                <button className="homePage-card1-submit-btn ai_btns">
                  Quicker Decision-Making
                </button>
                <button className="homePage-card1-submit-btn ai_btns">
                  Increase Efficiency
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="px-4 container"
          style={{
            backgroundImage: `url("${EARN_STABLE_GAIN_BG}")`,
            minHeight: "790px",
            paddingTop: "160px",
          }}
        >
          <h1 className="text-center text-white earn_stable_gain">
            EARN · STABLE · GAIN
          </h1>
          <div
            className="d-flex justify-content-center"
            style={{ marginBottom: "100px" }}
          >
            <span style={{ color: "white", opacity: "0.6", fontSize: "24px" }}>
              DEFIPRO OFFERINGS:
            </span>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="container-fluid">
                <div className="earn-stable-gain">
                  <span className="earn-stable-gain-icon">
                    <img
                      style={{ display: "block", marginBottom: "20px" }}
                      src={PRINCIPLED_ICON}
                      alt=""
                      width="66px"
                    />
                    <h5 style={{ color: "white", marginBottom: "20px" }}>
                      PRINCIPLED
                    </h5>
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "21px",
                    color: "white",
                    opacity: "0.6",
                  }}
                >
                  DefiPro is designed on strong principles: providing a stable
                  platform for the long-term, community first and fairly in all
                  aspects, and prioritizing stable wealth creation.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container-fluid">
                <div className="earn-stable-gain">
                  <span className="earn-stable-gain-icon">
                    <img
                      style={{ display: "block", marginBottom: "20px" }}
                      src={RITUALED_ICON}
                      alt=""
                      width="66px"
                    />
                    <h5 style={{ color: "white", marginBottom: "20px" }}>
                      RITUALED
                    </h5>
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "21px",
                    color: "white",
                    opacity: "0.6",
                  }}
                >
                  DefiPro reward those who work and build together with us. The
                  protocol is designed to reward the community and those who
                  give most and contribute their efforts.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container-fluid">
                <div className="earn-stable-gain">
                  <span className="earn-stable-gain-icon">
                    <img
                      style={{ display: "block", marginBottom: "20px" }}
                      src={ADVANCEMENT_ICON}
                      alt=""
                      width="66px"
                    />
                    <h5 style={{ color: "white", marginBottom: "20px" }}>
                      ADVANCEMENT
                    </h5>
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "21px",
                    color: "white",
                    opacity: "0.6",
                  }}
                >
                  DefiPro offer an advanced development plan for the benefits of
                  platform’s users and also the lucrative reward plan to help
                  users build their network family tree.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ padding: "20px 20px 100px 20px" }}>
          <h1 className="defipro_community_heading">CORE VALUES</h1>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="core_values_inControl_img"
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #00082D -2.03%, rgba(0, 8, 45, 0) 100%)",
                    display: "flex",
                  }}
                >
                  <img
                    className="core_values_img_hidde"
                    src={You_are_in_control}
                    alt=""
                    width="214px"
                    height="206px"
                    style={{ marginRight: "10px" }}
                  />
                  <div>
                    <h5
                      style={{
                        fontSize: "24px",
                        lineHeight: "28px",
                        color: "white",
                        fontWeight: "500",
                        marginTop: "20px",
                      }}
                    >
                      You are in control
                    </h5>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "white",
                        opacity: "0.6",
                      }}
                    >
                      All user funds are locked in smart contracts without any
                      third party having direct access to those funds. DefiPro
                      is non-custodial and is never taking control of any
                      assets. It can be used directly from a wallet that you
                      control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="core_values_friendly_img"
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #00082D -2.03%, rgba(0, 8, 45, 0) 100%)",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    className="core_values_img_hidde"
                    src={User_Friendly}
                    alt=""
                    width="214px"
                    height="206px"
                    style={{ marginRight: "10px" }}
                  />
                  <div>
                    <h5
                      style={{
                        fontSize: "24px",
                        lineHeight: "28px",
                        color: "white",
                        fontWeight: "500",
                        marginTop: "20px",
                      }}
                    >
                      User Friendly
                    </h5>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "white",
                        opacity: "0.6",
                      }}
                    >
                      The page design of DefiPro is simple and easy to use.
                      Users can start their buy/sell with just a few clicks,
                      allowing users to use it more smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="core_values_transparency_img"
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #00082D -2.03%, rgba(0, 8, 45, 0) 100%)",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    className="core_values_img_hidde"
                    src={Transparency}
                    alt=""
                    width="214px"
                    height="206px"
                    style={{ marginRight: "10px" }}
                  />
                  <div>
                    <h5
                      style={{
                        fontSize: "24px",
                        lineHeight: "28px",
                        color: "white",
                        fontWeight: "500",
                        marginTop: "20px",
                      }}
                    >
                      Transparency
                    </h5>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "white",
                        opacity: "0.6",
                      }}
                    >
                      DefiPro will use various social platforms to let members
                      understand every stage of the company's development and
                      continuously announce the latest news.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="core_values_community_img"
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #00082D -2.03%, rgba(0, 8, 45, 0) 100%)",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    className="core_values_img_hidde"
                    src={Community}
                    alt=""
                    width="214px"
                    height="206px"
                    style={{ marginRight: "10px" }}
                  />
                  <div>
                    <h5
                      style={{
                        fontSize: "24px",
                        lineHeight: "28px",
                        color: "white",
                        fontWeight: "500",
                        marginTop: "20px",
                      }}
                    >
                      Community
                    </h5>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "white",
                        opacity: "0.6",
                      }}
                    >
                      DefiPro is like a big family, a community-owned company,
                      so we strongly encourage members to cooperate in
                      development, marketing, information sharing and so on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="core_values_longgevity_img"
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #00082D -2.03%, rgba(0, 8, 45, 0) 100%)",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    className="core_values_img_hidde"
                    src={Longevity}
                    alt=""
                    width="214px"
                    height="206px"
                    style={{ marginRight: "10px" }}
                  />
                  <div>
                    <h5
                      style={{
                        fontSize: "24px",
                        lineHeight: "28px",
                        color: "white",
                        fontWeight: "500",
                        marginTop: "20px",
                      }}
                    >
                      Longevity
                    </h5>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "white",
                        opacity: "0.6",
                      }}
                    >
                      DefiPro hopes to establish more long-term partnerships. We
                      believe that long-term plans will bring more investment
                      and should not stop at short-term trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="core_values_trust_img"
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #00082D -2.03%, rgba(0, 8, 45, 0) 100%)",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    className="core_values_img_hidde"
                    src={Trust}
                    alt=""
                    width="214px"
                    height="206px"
                    style={{ marginRight: "10px" }}
                  />
                  <div>
                    <h5
                      style={{
                        fontSize: "24px",
                        lineHeight: "28px",
                        color: "white",
                        fontWeight: "500",
                        marginTop: "20px",
                      }}
                    >
                      Trust
                    </h5>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "white",
                        opacity: "0.6",
                      }}
                    >
                      There is no substitute for trust when it comes to
                      cryptocurrencies. We will ensure the safety of the user's
                      funds and information, and ensure that we will continue to
                      bring more profits to everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url("${home_last_bg}")`,
          }}
        >
          <div
            style={{
              minHeight: "650px",
              background: "#160E33",
              opacity: "0.8",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="container">
              <h1 className="defipro_community_heading">
                JOIN OUR DEFIPRO COMMUNITY
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  lineheight: "21px",
                  color: "white",
                  textAlign: "center",
                  opacity: "0.6",
                  marginBottom: "50px",
                }}
              >
                DefiPro is the most advanced automatic liquidity acquisition
                yield farm and decentralized exchange running on Binance Smart
                Chain with lots of unique and creative features that let you
                earn and develop your network.
              </p>
              <div className="d-flex flex-wrap justify-content-around">
                <button className="homePage-join-community-btn">
                  <span className="homePage-join-community-btn-icon">
                    <img src={Telecom} alt="" width="100%" />
                  </span>
                  <span className="homePage-join-community-btn-text">
                    Telegram
                  </span>{" "}
                </button>
                <button className="homePage-join-community-btn">
                  <span className="homePage-join-community-btn-icon">
                    <img src={Twitter} alt="" width="100%" />
                  </span>
                  <span className="homePage-join-community-btn-text">
                    Twitter
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default homePage;
