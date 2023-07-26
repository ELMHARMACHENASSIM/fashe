import React from "react";
import "./_header.scss";
import "../scssrules/_scssrules.scss";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineMenu,
  AiOutlineCloseCircle,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { LiaSnapchatGhost } from "react-icons/lia";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { PiTiktokLogoThin } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { useState } from "react";

// import { BsBag } from 'react-icons/bs';

const Header = () => {
  const [openDiv, setOpenDiv] = useState(false);

  const menuClick = () => {
    // Toggle the state when the button is clicked
    setOpenDiv(!openDiv);

  };

  return (
    <>
      <div className="headbarre">
        <div className="container">
          <div className="barricon">
            <CiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <BiLogoPinterestAlt className="icon" />
            <LiaSnapchatGhost className="icon" />
            <AiOutlineYoutube className="icon" />
            <PiTiktokLogoThin className="icon" />
          </div>
          <p>Free shipping for standard order over $100</p>
          <p>fashe@example.com</p>
        </div>
      </div>

      <header>
        <div className="container">
          <div className="logo">
            <h1>
              FASHE<span>.</span>
            </h1>
          </div>
          <ul className="links">
            <li>
              <NavLink to={"/"} className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/product"} className="link">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="link">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="list-icon">
            <div className="divicon">
              <AiOutlineHeart className="icon" />
              <span>0</span>
            </div>
            <div className="divicon">
              <AiOutlineShopping className="icon" />
              <span>0</span>
            </div>
          </div>
          <div className="burgmenu">
            <button onClick={menuClick} className="btnmenu">
              {!openDiv ? (
                <AiOutlineMenu className="icon " />
              ) : (
                <AiOutlineCloseCircle className="icon " />
              )}
            </button>
          </div>
        </div>
        <ul className={openDiv ? "links-mobile" : "hide"}>
          <li>
            <NavLink to={"/"} className="link-mobile">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/product"} className="link-mobile">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="link-mobile">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className="link-mobile">
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};
export default Header;
