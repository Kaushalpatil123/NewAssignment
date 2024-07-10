import React from 'react'
import Cryptoimg from "../assets/cryptoimg.png"

const Frame5 = () => {
  return (
    <div className="Frame5">
      <h2>Crypto Dictionary</h2>
      <p>Your one-stop to catch up on all crypto terms</p>
      <a href="https://docs.intract.io/v/intract-academy" target="blank">
        <img src={Cryptoimg} alt="Cryptoimg" className="Cryptoimg2" />
      </a>

      <div className="btns">
        <div className="first">Essentials</div>
        <div className="second">Alpha Hub</div>
      </div>
      <div className="border"></div>
    </div>
  );
}

export default Frame5