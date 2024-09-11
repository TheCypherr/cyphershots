import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        // You can adjust this value
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.scrollToTopButton}>
          &#8679;
        </button>
      )}
    </>
  );
}

const styles = {
  scrollToTopButton: {
    position: "fixed",
    bottom: "50px",
    right: "20px",
    padding: "5px 10px",
    fontSize: "22px",
    backgroundColor: "var(--bg-color)",
    borderRadius: "50%",
    color: "var(--text-color)",
    border: "none",
    cursor: "pointer",
    zIndex: 1000,
  },
};

export default ScrollToTopButton;
