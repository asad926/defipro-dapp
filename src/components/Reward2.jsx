import React, { Component } from "react";
import bi_calendar_week_fill from "../Img/bi_calendar-week-fill.png";
class reward2 extends Component {
  state = {};
  render() {
    return (
      <div
        className="mt-4"
        style={{ color: "#FFFFFF", padding: "0px 25px 50px 25px" }}
      >
        <h1 className="bouns_plan_heading">
          DEFIPRO <span className="defilabs-text-gradient">BONUS PLAN</span>
        </h1>
        <div style={{ marginBottom: "50px" }}>
          <table className="table-col-right-border bouns_plan_table_text">
            <thead
              style={{
                background: "linear-gradient(90deg, #4925DB 0%, #2172E5 100%)",
              }}
            >
              <tr>
                <th
                  style={{
                    borderRight: "2px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "20px 0 0 0",
                  }}
                  rowSpan="2"
                >
                  Rank
                </th>
                <th
                  style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.3)" }}
                  colSpan="2"
                >
                  Rank Advancement
                </th>
                <th
                  style={{
                    borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "0 20px 0 0",
                  }}
                  colSpan="3"
                >
                  Team Bonus
                </th>
              </tr>
              <tr>
                <th
                  style={{ borderRight: "2px solid rgba(255, 255, 255, 0.3)" }}
                >
                  Staking (USDT)
                </th>
                <th
                  style={{ borderRight: "2px solid rgba(255, 255, 255, 0.3)" }}
                >
                  Direct Sponsor
                </th>
                <th
                  style={{ borderRight: "2px solid rgba(255, 255, 255, 0.3)" }}
                >
                  Level 1
                </th>
                <th
                  style={{ borderRight: "2px solid rgba(255, 255, 255, 0.3)" }}
                >
                  Level 2
                </th>
                <th>Level 3</th>
              </tr>
            </thead>

            <tr>
              <td>VIP 1</td>
              <td>200</td>
              <td>3 x Direct Farmer</td>
              <td>6%</td>
              <td>2%</td>
              <td style={{ borderRight: "none" }}>1%</td>
            </tr>
            <tr>
              <td>VIP 2</td>
              <td>500</td>
              <td>3 x Direct VIP 1</td>
              <td>7%</td>
              <td>3%</td>
              <td style={{ borderRight: "none" }}>2%</td>
            </tr>
            <tr>
              <td>VIP 3</td>
              <td>500</td>
              <td>3 x Direct VIP 2</td>
              <td>8%</td>
              <td>4%</td>
              <td style={{ borderRight: "none" }}>3%</td>
            </tr>
            <tr>
              <td>VIP 4</td>
              <td>5,000</td>
              <td>3 x Direct VIP 3</td>
              <td>9%</td>
              <td>5%</td>
              <td style={{ borderRight: "none" }}>4%</td>
            </tr>
            <tr>
              <td>VIP 5</td>
              <td>10,000</td>
              <td>3 x Direct VIP 4</td>
              <td>10%</td>
              <td>6%</td>
              <td style={{ borderRight: "none" }}>5%</td>
            </tr>
          </table>
        </div>
        <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
          The DefiPro Rewards Program introduces an easy-to-follow system of
          rewards for our international users. It is surprisingly simple and
          gives everyone, from a networker to a professional business builder an
          equal opportunity for success.
        </p>
        <h5
          className="defilabs-text-gradient"
          style={{
            margin: "50px 0px",
            fontSize: "28px",
            lineHeight: "33px",
            fontWeight: "bold",
          }}
        >
          SPONSOR
        </h5>
        <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
          Being SPONSOR means you invite your friend or downline via the
          invitation code or invitation link and he or she must fill in your
          invitation code in their registration page.
        </p>
        <h5
          className="defilabs-text-gradient"
          style={{
            margin: "50px 0px",
            fontSize: "28px",
            lineHeight: "33px",
            fontWeight: "bold",
          }}
        >
          Rank and Staking
        </h5>
        <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
          The recognition rank (VIP 1 – VIP 5) is determined by staked amount
          generated by the user and also number of direct sponsored downline
          user. Example: The user will be recognized and paid as VIP 3 when his
          or her staked amount reaches 1000 USDT and also has 3 direct sponsored
          downline users achieve VIP 2 Rank.
        </p>
        <h5
          className="defilabs-text-gradient"
          style={{
            margin: "50px 0px",
            fontSize: "28px",
            lineHeight: "33px",
            fontWeight: "bold",
          }}
        >
          Team Bonus
        </h5>
        <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
          Earn a Team Bonus every time your downline user earns their interest
          earned from their staking and Team Bonus is paid one time per interest
          earned from your direct sponsored downline user. Example: When your
          staked amount reaches 200 USDT and also has 3 direct sponsored users,
          you will be eligible for a Team Bonus up to 3 levels and earn 6% of
          their interest earned by every downline user that you have personally
          sponsored (Level 1). Also earn 2% of Team Bonus on Level 2 user’s
          interest earned and 1% of Team Bonus on Level 3 user’s interest
          earned. As you progress through the ranks, you become eligible for an
          additional percentage of Team Bonus on the interest earned of up to 3
          levels deep in your group.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
          *** The number of percentages on which you can earn the bonus is
          determined by your current rank in the DefiPro Bonus Plan.
        </p>
      </div>
    );
  }
}

export default reward2;