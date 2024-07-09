import React from "react";
import spotlightimg from "../assets/spotlight.png";
import gift from "../assets/academy-animated-logo-.gif";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";
import Frame4 from "./Frame4";


const Mainbody = () => {
  return (
    <>
      <div className="spotlight">
        <div className="box">
          <img src={gift} alt="img" className="gift" />
          <div className="textbox">
            <p>
              Intract users have together made more than $100 million in web3.
              Join them and learn how to earn crypto!
            </p>
          </div>
          <button className="spotbtn">Get Started</button>
        </div>
      </div>
      <Frame2 />
      <Frame3 />
      <Frame4/>
    </>
  );
};

export default Mainbody;
