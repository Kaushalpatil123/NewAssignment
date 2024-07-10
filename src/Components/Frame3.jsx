import React, { useState } from "react";
import Airdrop from "../assets/airdrop.png";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import t5 from "../assets/t5.jpg";
import Cat from "../assets/cat2.png";
import Gift from "../assets/kol-reward-12e6ae06.gif";

const Frame3 = () => {
  const [isToggleDivVisible, setIsToggleDivVisible] = useState(false);

  const handleclick = () => {
    setIsToggleDivVisible(!isToggleDivVisible);
  };
  return (
    <div className="frame3">
      <div className="frame3box">
        <div className="frame3left">
          <div className="catimg">
            <img src={Cat} alt="Cat" className="Catimg" />
          </div>
          <p className="catdeschead">Intract Certified: Earner NFT</p>
          <div>
            <p className="catdesc">
              Your proof of <br /> airdrop expertise
            </p>
          </div>
        </div>
        <div className="frame3right">
          <div className="">
            <div className="crypto" onClick={handleclick}>
              <div className="cruptoimg">
                <img src={Airdrop} alt="Airdropv" className="Cryptoimg" />
              </div>
              <div className="desc">
                <p className="cryptohead">Introduction to Airdrops</p>
                <p className="cryptopara">
                  The safest and easiest place to start your crypto journey!
                </p>
              </div>
            </div>
            {isToggleDivVisible && (
              <div className="togglediv">
                <div className="cryptobox">
                  <img src={t1} alt="t1" className="cryptoboximg" />
                  <div className="cryptodesc">
                    <h3 className="cryptodeschead">
                      #1: But what is crypto and web3?
                    </h3>
                    <p className="cryptodescpara">11 Task</p>
                  </div>
                </div>
                <div className="cryptobox">
                  <img src={t2} alt="t3" className="cryptoboximg" />
                  <div className="cryptodesc">
                    <h3 className="cryptodeschead">
                      #1: But what is crypto and web3?
                    </h3>
                    <p className="cryptodescpara">11 Task</p>
                  </div>
                </div>
                <div className="cryptobox">
                  <img src={t3} alt="t3" className="cryptoboximg" />
                  <div className="cryptodesc">
                    <h3 className="cryptodeschead">
                      #1: But what is crypto and web3?
                    </h3>
                    <p className="cryptodescpara">11 Task</p>
                  </div>
                </div>
                <div className="cryptobox">
                  <img src={t4} alt="t4" className="cryptoboximg" />
                  <div className="cryptodesc">
                    <h3 className="cryptodeschead">
                      #1: But what is crypto and web3?
                    </h3>
                    <p className="cryptodescpara">11 Task</p>
                  </div>
                </div>
                <div className="cryptobox">
                  <img src={t5} alt="t5" className="cryptoboximg" />
                  <div className="cryptodesc">
                    <h3 className="cryptodeschead">
                      #1: But what is crypto and web3?
                    </h3>
                    <p className="cryptodescpara">11 Task</p>
                  </div>
                </div>
                <div className="cryptobox">
                  <img src={t1} alt="t1" className="cryptoboximg" />
                  <div className="cryptodesc">
                    <h3 className="cryptodeschead">
                      #1: But what is crypto and web3?
                    </h3>
                    <p className="cryptodescpara">11 Task</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="reward">
        <div className="timerbox">
          <div className="time">
            <p className="reawardhead">Reward unlocks in</p>
            <div className="maintime">
              <div className="count">
                <h3 className="counth3">00</h3>
                <p className="countp">Days</p>
              </div>
              <div className="count">
                <h3 className="counth3">02</h3>
                <p className="countp">Hr</p>
              </div>
              <div className="count">
                <h3 className="counth3">23</h3>
                <p className="countp">Mins</p>
              </div>
              <div className="count">
                <h3 className="counth3">58</h3>
                <p className="countp">Sec</p>
              </div>
            </div>
          </div>
          <div className="luckydraw">
            <img src={Gift} alt="" className="luckyimg" />
            <div className="draw2">
              <p className="gray">Exclusive Community</p>
              <p className="drop">Earndrop</p>
            </div>
            <div className="draw3">
              <p className="gray">Complete all Essential quests</p>
              <p className="gray">Complete at least 1 Alpha Hub quest</p>
            </div>
            <button className="claimbtn">Claim Now</button>
          </div>
        </div>
        <div className="text">
          <p>Reward info</p>
          <p className="textp">
            Free access to paid KOL (crypto earning) communities!
          </p>
          <p>
            Win access to exclusive earning communities of some of the the
            greatest earners in crypto for a month, every 24 hours. Get access
            to unmatched insights, a close-knit community of the best airdrop
            earners, and more.
          </p>
          <p>
            To win: make sure you've connected your Twitter and Discord accounts
            - and follow our criteria!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
