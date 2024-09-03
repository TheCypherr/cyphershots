import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState({
    background: true,
    textColor: false,
  });

  const handleTheme = () => {
    // CODE to change background
    const setBackground = (value) => {
      setTheme((prevTheme) => ({
        ...prevTheme,
        background: value,
      }));
      document.body.style.backgroundColor = value ? "#000000ea" : "#fffedf";
    };
    const newBackground = !theme.background;
    setBackground(newBackground);

    // CODE to change text color
    const setTextColor = (value) => {
      setTheme((prevTheme) => ({
        ...prevTheme,
        textColor: value,
      }));
      document.body.style.color = value ? "#000000ea" : "#fffedf";
    };
    const newTextColor = !theme.textColor;
    setTextColor(newTextColor);
  };

  return (
    <section className="h-wrapper">
      <div className="h-one">
        <Link to="/" className="custom-link1">
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

        <div onClick={handleTheme} className="theme-icon">
          {theme.background ? <FaSun size={20} /> : <FaMoon size={20} />}
        </div>
      </div>
    </section>
  );
};

export default Header;

// const [background, setBackground] = useState(true);
// const [textColor, setTextColor] = useState(false);

//   // CODE to change background
//   const newBackground = !background;
//   setBackground(newBackground);
//   // take note of the code that says ".body" OLODO boy!
//   document.body.style.backgroundColor = newBackground
//     ? "#000000ea"
//     : "#fffedf"; // Corrected to "#fff" for white

//   // CODE to chnage text onClick
//   const newTextColor = !textColor;
//   setTextColor(newTextColor);
//   document.body.style.color = newTextColor ? "#000000ea" : "#fffedf";
//   // document.querySelector(".small-box").style.color = newTextColor
// };
