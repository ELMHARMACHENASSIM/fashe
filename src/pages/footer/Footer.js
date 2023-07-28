import React from "react";
import "./_footer.scss";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { LiaSnapchatGhost } from "react-icons/lia";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { PiTiktokLogoThin } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="foot">
            <h2>GET IN TOUCH</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
              Obcaecati corrupti culpa magni
            </p>
            <div className="barricon">
              <CiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <BiLogoPinterestAlt className="icon" />
              <LiaSnapchatGhost className="icon" />
              <AiOutlineYoutube className="icon" />
              <PiTiktokLogoThin className="icon" />
            </div>
          </div>
          <div className="foot">
            <h2 className="txt">links</h2>
            <div className="linkat">
              <p>Search</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Retturns</p>
            </div>
          </div>
          <div className="foot">
            <h2 className="txt">links</h2>
            <div className="linkat">
              <p>Search</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Retturns</p>
            </div>
          </div>
        </div>
        <div className="coyyright">
<p>copyright &copy; All Rights Reserved ,FASHE</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
