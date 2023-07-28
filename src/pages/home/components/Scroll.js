import React from "react";
import { useState, useEffect } from "react";
import "./_scroll.scss"
import { BiUpArrowAlt } from "react-icons/bi";
const Scroll = () => {
  const [scrollBtn, setScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);
  const scrollUpTo = () =>{
    window.scrollTo({
        top :0,
        behavior : "smooth"
    })
  }
  return <>
    {scrollBtn && (
        <button onClick={scrollUpTo} className="btntop"><BiUpArrowAlt className="topicon" /></button>
    )}
  </>;
};

export default Scroll;
