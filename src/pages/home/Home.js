import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import  "../scssrules/_scssrules.scss";
import "./_home.scss";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import prd1 from "../../assets/images/prd1.jpg";
import prd3 from "../../assets/images/prd3.jpg";
import prd4 from "../../assets/images/prd4.jpg";
import { NavLink } from "react-router-dom";
import TabsProduct from "./components/TabsProduct";
import VideoBg from "./components/VideoBg";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Carousel className="slides" infiniteLoop="true">
        <div className="slide">
          <img src={img1} alt="" srcSet="" />
          <div className="info">
            <p className="title">Leather bags</p>
            <p className="title-two">New Collection</p>
            <NavLink to={"/"} className="link-shop">
              Shop Now
            </NavLink>
          </div>
        </div>
        <div className="slide">
          <img src={img2} alt="" srcSet="" />
          <div className="info">
            <p className="title">Leather bags</p>
            <p className="title-two">New Collection</p>
            <NavLink to={"/"} className="link-shop">
              Shop Now
            </NavLink>
          </div>
        </div>
        <div className="slide">
          <img src={img3} alt="" srcSet="" />
          <div className="info">
            <p className="title">Leather bags</p>
            <p className="title-two">New Collection</p>
            <NavLink to={"/"} className="link-shop">
              Shop Now
            </NavLink>
          </div>
        </div>
        <div className="slide">
          <img src={img4} alt="" srcSet="" />
          <div className="info">
            <p className="title">Leather bags</p>
            <p className="title-two">New Collection</p>
            <NavLink to={"/"} className="link-shop">
              Shop Now
            </NavLink>
          </div>
        </div>
      </Carousel>
      <div className="coming-soon">
        <div className="container">
          <div className="card">
            <img src={prd1} alt="" />
            <span>Comming soon</span>
          </div>
          <div className="card">
            <img src={prd4} alt="" />
            <span>Comming soon</span>
          </div>
          <div className="card">
            <img src={prd3} alt="" />
            <span>Comming soon</span>
          </div>
        </div>
      </div>
      <div className="our-product">
      <div className="heading">
        <h1>
         Our Products
        </h1>
      </div>
        <div className="container">
        <TabsProduct />
        </div>
      </div>
      <VideoBg />
      <Footer />
    </>
  );
};
export default Home;
