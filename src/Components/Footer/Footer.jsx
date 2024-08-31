import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="one-side">
        <p>cypherdev.com</p>
      </div>
      <div className="two-side">
        <p>Ozumba Mbadiwe Ave, Eti-Osa, Lagos 106104, Lagos</p>
      </div>
      <div className="three-side">
        <a href="https://www.instagram.com/thecypherr_">instagram</a>
        <a href="https://www.twitter.com/pehlumih">twitter</a>
        <a href="#">linkedIn</a>
      </div>
      <div className="four-side">
        <a href="https://www.instagram.com/thecypherr_">instagram</a>
        <a href="https://www.twitter.com/pehlumih">twitter</a>
        <a href="#">linkedIn</a>
        <a href="#">dev by CypherDev</a>
      </div>
    </section>
  );
};

export default Footer;
