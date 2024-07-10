import React from "react";
import img1 from "../assets/icons8-discord-48.png";
import img2 from "../assets/icons8-spotify-48.png";
import img3 from "../assets/icons8-telegram-48.png";
import img4 from "../assets/icons8-twitter-48.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerdiv">
        <div className="footerleft">
          <div className="foot1">
            <div className="foot1logo">
              <h1 className="logohead">intract.</h1>
            </div>
            <p className="foot1desc">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </p>
          </div>
        </div>
        <div className="footerright">
          <div className="foot2">
            <h4 className="foot2head">INTRACT</h4>
            <a href="" className="fooo2link">
              Explore Quests
            </a>
            <a href="" className="fooo2link">
              Comunities
            </a>
            <a href="" className="fooo2link">
              Alpha Hub
            </a>
          </div>
          <div className="foot2">
            <h4 className="foot2head">EARN</h4>
            <a href="" className="fooo2link">
              Refer & Earn
            </a>
            <a href="" className="fooo2link">
              Leaderboard
            </a>
            <a href="" className="fooo2link">
              Achievements
            </a>
          </div>
          <div className="foot2">
            <h4 className="foot2head">ABOUT</h4>
            <a href="" className="fooo2link">
              Product Roadmap
            </a>
            <a href="" className="fooo2link">
              Affiliate Program
            </a>
            <a href="" className="fooo2link">
              Sign up Program
            </a>
            <a href="" className="fooo2link">
              Growth Community
            </a>
            <a href="" className="fooo2link">
              Blogs
            </a>
          </div>
          <div className="foot2">
            <h4 className="foot2head">SUPPORT</h4>
            <a href="" className="fooo2link">
              Help Center
            </a>
            <a href="" className="fooo2link">
              Create your quest
            </a>
            <a href="" className="fooo2link">
              Terms of Service
            </a>
            <a href="" className="fooo2link">
              Privacy Policy
            </a>
            <a href="" className="fooo2link">
              Community Guidelines
            </a>
          </div>
        </div>
      </div>
      <div className="footerborder"></div>
      <div className="footnote">
        <p className="footnotepara">
          <span>Disclaimer:</span> Crypto Products, Virtual Digital Assets, and
          NFTs are unregulated and can be highly risky. There may be no
          regulatory recourse for any loss from such transactions. We advise the
          viewer to proceed with caution. Nothing in this website or any
          communication published by us amounts to, is intended to be, or should
          be construed as investment or purchase advice of any kind or financial
          advice or promotion under any applicable laws. Any decision made based
          on the content provided on this website or any communication published
          by us shall not be attributable to us.
        </p>
      </div>
      <div className="footerborder"></div>
      <div className="lastdiv">
        <div className="created">
          <p>
            CREATED BY <a href="">INTRACT</a>
          </p>
        </div>
        <div className="social">
          <div className="linklogo">
            <img src={img1} alt="img1" className="linkimg" />
          </div>
          <div className="linklogo">
            <img src={img2} alt="img2" className="linkimg" />
          </div>
          <div className="linklogo">
            <img src={img3} alt="img3" className="linkimg" />
          </div>
          <div className="linklogo">
            <img src={img4} alt="img4" className="linkimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
