import React, { useRef, useEffect } from "react";
import "./Footer.css";
import { useScroll } from "../../utils/ScrollContext";

const Footer = () => {
  const targetRef = useRef(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef("scrollToFooter", targetRef.current);
  }, [registerRef]);
  return (
    <section className="footer-wrapper" ref={targetRef}>
      <div className="inner-footer">
        <div className="one-side">
          <p>cypherdev.com</p>
        </div>
        <div className="three-side">
          <a href="https://www.instagram.com/thecypherr_">instagram</a>
          <a href="https://www.twitter.com/pehlumih">twitter</a>
          <a href="#">linkedIn</a>
        </div>
        <div className="two-side">
          <p>10 Agbolade Street, Cele Egbe, Ikotun Lagos.</p>
        </div>
        <div className="four-side">
          <a href="https://www.instagram.com/thecypherr_">instagram</a>
          <a href="https://www.twitter.com/pehlumih">twitter</a>
          <a href="#">linkedIn</a>
          <a href="#">dev by CypherDev</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved By CypherDev</p>
      </div>
    </section>
  );
};

export default Footer;
