import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-one">
        <Link to="/IbadanDetails" className="custom-link1">
          <h3>thecypherr_</h3>
        </Link>
      </div>
      <div className="h-two">
        <Link className="custom-links" to="/">
          <h4>Home</h4>
        </Link>
        <Link className="custom-links" to="/about">
          <h4>About</h4>
        </Link>
        <Link className="custom-links" to="/contact">
          <h4>Contact</h4>
        </Link>
      </div>
    </section>
  );
};

export default Header;
