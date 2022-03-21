import React, { Component } from "react";
import defiPEO_2_1 from "../Img/defiPEO 2 1.png";
class defilabs extends Component {
  state = {};
  render() {
    return (
      <div style={{ color: "white" }}>
        <div
          className="defilabs_learn_img_cover"
          style={{
            backgroundImage: `url("${defiPEO_2_1}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            className="defilabs_learn_cover"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 8, 44, 0) 0%, #00082C 100%)",
            }}
          ></div>
        </div>
        <div className="container px-5" style={{ paddingBottom: "250px" }}>
          <h1 className="defilabs_learn_titles">
            WHAT IS <span className="defilabs-text-gradient">DEFIPRO</span>?
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
            DefiPro is the fastest moving Defi-based platform within the DeFi
            ecosystem. As a well-established DeFi platform today.DefiPro is a
            non-custodial asset management platform that aggregates Defi
            activities in one place. DefiPro is also designed to optimize Defi
            users experience in today’s Defi World, especially in the process of
            staking and trading.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
            At DefiPro, it feeds real-world data to smart contracts on the
            blockchain – serving as a link between the unprecedented amount of
            information going back and forth between crypto DApps. This platform
            is developed by open-source software which utilized use smart
            contracts to build different decentralized applications.
          </p>
          <h1 className="defilabs_learn_titles">
            What is{" "}
            <span className="defilabs-text-gradient"> Defi Staking</span>?
          </h1>
          <h5 className="defilabs-text-gradient mb-5">An Overview</h5>
          <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
            DefiPro is the fastest moving Defi-based platform within the DeFi
            ecosystem. As a well-established DeFi platform today. DefiPro is a
            non-custodial asset management platform that aggregates Defi
            activities in one place. DefiPro is also designed to optimize Defi
            users experience in today’s Defi World, especially in the process of
            staking and trading.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
            DeFi staking is one of the hottest trends in the cryptocurrency
            industry today. Staking is still considered one of the best ways to
            generate passive income. The concept of cryptocurrency staking has
            been around for many years now. It is a powerful way of
            incentivizing users to hold on to their crypto holdings. In return
            for doing so, these users will receive staking rewards. Thus,
            compared to traditional savings account returns, staking rewards are
            a far more appealing option.{" "}
          </p>
          <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
            At DefiPro, it feeds real-world data to smart contracts on the
            blockchain – serving as a link between the unprecedented amount of
            information going back and forth between crypto DApps. This platform
            is developed by open-source software which utilized use smart
            contracts to build different decentralized applications.
          </p>
          <h5 className="defilabs-text-gradient my-5">
            Why Explore DeFi Staking?
          </h5>
          <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
            To some people, the option of DeFi staking may not make sense.
            However, it is a safer and less risky way of generating passive
            revenue compared to traditional means. Moreover, users can tap into
            higher interest rates compared to savings accounts and traditional
            products. With fewer intermediaries, the profit potential increases
            exponentially. More importantly, users will always retain complete
            control over their funds, empowering participants in DeFi staking.
          </p>
          <h5 className="defilabs-text-gradient my-5">
            Earning passive income with DeFi Staking
          </h5>
          <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
            DeFi staking is the process of 'locking' your crypto tokens into a
            DeFi smart contract to earn more of those tokens in return. It is
            akin to having a fixed deposit with your bank, and the bank pays you
            interest on your money deposited with them. Most times, the token
            used for staking is the native asset of the blockchain protocol.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "21px", opacity: "0.6" }}>
            By locking/staking your crypto asset in a DeFi system, you have
            become a part of the validators for the network. Every
            proof-of-stake blockchain protocol relies on these validators to
            ensure the security of the protocol. Therefore, the task of ensuring
            that no one cheats the system rests on these validators. In return,
            these people who have staked a part of their token to secure the
            network will be rewarded for their actions.
          </p>
        </div>
      </div>
    );
  }
}

export default defilabs;
