import React from 'react'
import Crypto from "../assets/crypto.png"
import t1 from "../assets/t1.png"
import t2 from "../assets/t2.jpg"
import t3 from "../assets/t3.jpg"
import t4 from "../assets/t4.jpg"
import t5 from "../assets/t5.jpg"
import Cat from "../assets/cat.png"



const Frame2 = () => {
  return (
    <div className="frame2">
      <div className="left">
        <div className="leftbox">
          <div className="crypto">
            <div className="cruptoimg">
              <img src={Crypto} alt="Crypto" className="Cryptoimg" />
            </div>
            <div className="desc">
              <p className="cryptohead">Basics of Crypto</p>
              <p className="cryptopara">
                The safest and easiest place to start your crypto journey!
              </p>
            </div>
          </div>
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
        </div>
      </div>
      <div className="right">
        <div className="catimg">
          <img src={Cat} alt="Cat" className="Catimg" />
        </div>
        <p className="catdeschead">Intract Certified: Learner NFT</p>
        <div>
          <p className="catdesc">
            Your crypto black-belt <br /> certificate
          </p>
        </div>
      </div>
    </div>
  );
}

export default Frame2