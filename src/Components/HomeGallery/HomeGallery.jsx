import React, { useContext, useState } from "react";
import "./HomeGallery.css";
import { PictureContext } from "../../utils/PictureContext";
import { Link } from "react-router-dom";

const HomeGallery = () => {
  const { homePics, currentPicture, handlePictureShuffle } =
    useContext(PictureContext);

  // useState for selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // onclick function to change style for selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="hgallery-wrapper">
      <div className="btn">
        <button
          className={
            selectedCategory === "everything" ? "activeColor" : "inactiveColor"
          }
          onClick={() => {
            handlePictureShuffle("everything");
            handleCategoryClick("everything");
          }}
        >
          Everything
        </button>
        <button
          className={
            selectedCategory === "lifestyle" ? "activeColor" : "inactiveColor"
          }
          onClick={() => {
            handlePictureShuffle("lifestyle");
            handleCategoryClick("lifestyle");
          }}
        >
          Lifestyle
        </button>
        <button
          className={
            selectedCategory === "celebrities" ? "activeColor" : "inactiveColor"
          }
          onClick={() => {
            handlePictureShuffle("celebrities");
            handleCategoryClick("celebrities");
          }}
        >
          Celebrities
        </button>
      </div>

      <div className="picture-container">
        {homePics[currentPicture].map((pic) => (
          <Link to={`${pic.link}/${pic.id}`}>
            <div key={pic.id} className="main-container">
              {/* {console.log(`${pic.link}/${pic.id}`)} */}
              <img src={pic.image} alt={pic.name} />
              <div className="overlay">
                <div className="overlay-content"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeGallery;
