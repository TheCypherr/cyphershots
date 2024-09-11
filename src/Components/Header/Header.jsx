import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useScroll } from "../../utils/ScrollContext";

const Header = () => {
  // imported scrollSection from ScrollContext
  const { scrollToSection } = useScroll();
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

  // onClick function to close menubar onclick
  const closeSideBar = () => {
    setIsOpen(false);
  };

  // onClick function for footer scroll
  const handleFooterScroll = (footerKey) => {
    setIsOpen(false);
    scrollToSection(footerKey);
  };

  // useEffect to prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

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
          <div onClick={toggleMenu} className="icon-menu">
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
        </div>
        {isOpen && <div className="back-drop"></div>}
        {isOpen && (
          <div className="h-two-main">
            <div className="h-links-new">
              <Link
                className="custom-links-new"
                to="/"
                onClick={() => closeSideBar()}
              >
                <h4>Home</h4>
              </Link>
              <Link
                className="custom-links-new"
                to="/about"
                onClick={() => closeSideBar()}
              >
                <h4>About</h4>
              </Link>
              <Link
                className="custom-links-new"
                to="/"
                onClick={() => handleFooterScroll("scrollToFooter")}
              >
                <h4>Contact</h4>
              </Link>
              <div onClick={handleTheme} className="theme-icon-two">
                {theme.background ? <FaSun size={20} /> : <FaMoon size={19} />}
              </div>
            </div>
          </div>
        )}

        <div className="h-two">
          <Link className="custom-links" to="/">
            <h4>Home</h4>
          </Link>
          <Link className="custom-links" to="/about">
            <h4>About</h4>
          </Link>
          <Link
            className="custom-links"
            to="/"
            onClick={() => handleFooterScroll("scrollToFooter")}
          >
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
