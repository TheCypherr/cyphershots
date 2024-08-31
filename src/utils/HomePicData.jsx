import { useState } from "react";

export default function HomePicData() {
  const [homePics, setHomePics] = useState({
    everything: [
      {
        id: 1,
        image: "./ibadan1.jpg",
        link: "/IbadanDetails",
        relatedImages: [
          {
            image: "./ibadan1.jpg",
          },
          {
            image: "./ibadan2.jpg",
          },
          {
            image: "./ibadan3.jpg",
          },
          {
            image: "./ibadan4.jpg",
          },
        ],
      },
      {
        id: 2,
        image: "./energy1.jfif",
      },
      {
        id: 3,
        image: "./feran0.jpg",
      },
      {
        id: 4,
        image: "./cynthia5.jfif",
      },
      {
        id: 5,
        image: "./feran3.jfif",
      },
      {
        id: 6,
        image: "./bella33.jfif",
      },
      {
        id: 7,
        image: "./OOU0.jpg",
      },
      {
        id: 8,
        image: "./poco1.jfif",
      },
      {
        id: 9,
        image: "./cynthia6.jfif",
      },
      {
        id: 10,
        image: "./victony1.jfif",
      },
      {
        id: 11,
        image: "./OOU4.jfif",
      },
      {
        id: 12,
        image: "./tizzy1.jfif",
      },
    ],

    // Life Style Photography
    lifestyle: [
      {
        id: 1,
        image: "./ibadan1.jpg",
      },
      {
        id: 2,
        image: "./feran0.jpg",
      },
      {
        id: 3,
        image: "./cynthia5.jfif",
      },
      {
        id: 4,
        image: "./feran3.jfif",
      },
      {
        id: 5,
        image: "./OOU0.jpg",
      },
      {
        id: 6,
        image: "./cynthia6.jfif",
      },
    ],

    // Celebrities Photography
    celebrities: [
      {
        id: 1,
        image: "./energy1.jfif",
      },
      {
        id: 2,
        image: "./bella2.jfif",
      },
      {
        id: 3,
        image: "./poco1.jfif",
      },
      {
        id: 4,
        image: "./victony1.jfif",
      },
      {
        id: 5,
        image: "./tizzy1.jfif",
      },
    ],
  });
  console.log(homePics);
  return { homePics, setHomePics };
}
