import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  // useState for changing theme
  const [theme, setTheme] = useState({
    background: true,
    textColor: false,
    headTextColor: false,
  });
  // useState for dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // onClick function to handle dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to update CSS variable
  const updateCSSVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
  };

  // Helper function to handle background theme change
  const setBackground = (value) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      background: value,
    }));
    updateCSSVariable("--bg-color", value ? "#000000ea" : "#fffedf");
  };

  // Helper function to handle text color change
  const setTextColor = (value) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      textColor: value,
    }));
    updateCSSVariable("--text-color", value ? "#000000ea" : "#fffedf");
  };

  // onClick function to handle all theme changes
  const handleTheme = () => {
    setBackground(!theme.background);
    setTextColor(!theme.textColor);
  };

  return (
    <section className="h-wrapper">
      <div className={`inner-h ${isOpen ? "menu-open" : ""}`}>
        <div className="h-one">
          <Link to="/" className="custom-link1">
            <h3>thecypherr_</h3>
          </Link>
        </div>
        <div className="icons">
          <div onClick={handleTheme} className="theme-icon-two">
            {theme.background ? <FaSun size={20} /> : <FaMoon size={19} />}
          </div>
          <div onClick={toggleMenu} className="icon-menu">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>

        {isOpen && (
          <div className="h-two-main">
            <Link className="custom-links-new" to="/">
              <h4>Home</h4>
            </Link>
            <Link className="custom-links-new" to="/about">
              <h4>About</h4>
            </Link>
            <Link className="custom-links-new" to="/contact">
              <h4>Contact</h4>
            </Link>
          </div>
        )}

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
            {theme.background ? <FaSun size={20} /> : <FaMoon size={19} />}
          </div>
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
