import React, { createContext, useState } from "react";
import HomePicData from "./HomePicData";

export const PictureContext = createContext();

export const PictureProvider = ({ children }) => {
  // HomePicData import for homePics & setHomePics
  const { homePics, setHomePics } = HomePicData();

  //   useState for Picture Shuffle
  const [currentPicture, setCurrentPicture] = useState("everything");

  const shufflePicture = (picture) => {
    setHomePics((prevHomePics) => {
      const shuffledPicture = [...prevHomePics[picture]];
      shuffledPicture.sort(() => Math.random() - 0.5);
      return { ...prevHomePics, [picture]: shuffledPicture };
    });
  };

  //   click function to shuffle pictures
  const handlePictureShuffle = (picture) => {
    setCurrentPicture(picture);
    shufflePicture(picture);
  };

  return (
    <PictureContext.Provider
      value={{
        homePics,
        currentPicture,
        handlePictureShuffle,
      }}
    >
      {children}
    </PictureContext.Provider>
  );
};
