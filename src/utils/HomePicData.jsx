import { useState } from "react";

export default function HomePicData() {
  const [homePics, setHomePics] = useState({
    everything: [
      {
        id: 1,
        image: "/ibadan1.jpg",
        link: "/IbadanDetails",
        relatedImages: [
          {
            image: "/ibadan1.jpg",
          },
          {
            image: "/ibadan2.jpg",
          },
          {
            image: "/ibadan3.jpg",
          },
          {
            image: "/ibadan4.jpg",
          },
        ],
      },
      {
        id: 2,
        image: "/energy1.jfif",
        link: "/BlockParty",
        relatedImages: [
          {
            image: "/energy1.jfif",
          },
          {
            image: "/energy2.jfif",
          },
        ],
      },
      {
        id: 3,
        image: "/feran0.jpg",
        link: "/Faraheint",
        relatedImages: [
          {
            image: "/feran0.jpg",
          },
          {
            image: "/feran5.jfif",
          },
          {
            image: "/feran6.jfif",
          },
          {
            image: "/feran7.jfif",
          },
          {
            image: "/feran8.jfif",
          },
        ],
      },
      {
        id: 4,
        image: "/cynthia5.jfif",
        link: "/Ceci",
        relatedImages: [
          {
            image: "/cynthia2.jfif",
          },
          {
            image: "/cynthia3.jfif",
          },
          {
            image: "/cynthia4.jfif",
          },
          {
            image: "/cynthia5.jfif",
          },
          {
            image: "/cynthia6.jfif",
          },
        ],
      },
      {
        id: 5,
        image: "/feran3.jfif",
        link: "/FaraheintPlus",
        relatedImages: [
          {
            image: "/feran2.jfif",
          },
          {
            image: "/feran3.jfif",
          },
          {
            image: "/feran4.jfif",
          },
          {
            image: "/feran1.jfif",
          },
        ],
      },
      {
        id: 6,
        image: "/bella33.jfif",
        link: "/Bella",
        relatedImages: [
          {
            image: "/bella4.jfif",
          },
          {
            image: "/bella33.jfif",
          },
          {
            image: "/bella2.jfif",
          },
          {
            image: "/bella1.jfif",
          },
        ],
      },
      {
        id: 7,
        image: "/OOU0.jpg",
        link: "/OouStreet1",
        relatedImages: [
          {
            image: "/OOU2.jfif",
          },
          {
            image: "/OOU0.jpg",
          },
          {
            image: "/OOU3.jfif",
          },
        ],
      },
      {
        id: 8,
        image: "/poco1.jfif",
        link: "/Pocolee",
        relatedImages: [
          {
            image: "/poco3.jfif",
          },
          {
            image: "/poco1.jfif",
          },
          {
            image: "/poco4.jfif",
          },
          {
            image: "/poco2.jfif",
          },
        ],
      },
      {
        id: 9,
        image: "/cynthia6.jfif",
        link: "/Ceci",
        relatedImages: [
          {
            image: "/cynthia5.jfif",
          },
          {
            image: "/cynthia3.jfif",
          },
          {
            image: "/cynthia4.jfif",
          },
          {
            image: "/cynthia2.jfif",
          },
          {
            image: "/cynthia6.jfif",
          },
        ],
      },
      {
        id: 10,
        image: "/victony1.jfif",
        link: "/Victony",
        relatedImages: [
          {
            image: "/victony4.jfif",
          },
          {
            image: "/victony2.jfif",
          },
          {
            image: "/victony1.jfif",
          },
          {
            image: "/victony3.jfif",
          },
        ],
      },
      {
        id: 11,
        image: "/OOU4.jfif",
        link: "/OouStreet2",
        relatedImages: [
          {
            image: "/OOU6.jfif",
          },
          {
            image: "/OOU4.jfif",
          },
          {
            image: "/OOU5.jfif",
          },
        ],
      },
      {
        id: 12,
        image: "/tizzy1.jfif",
        link: "/Tizzy",
        relatedImages: [
          {
            image: "/tizzy2.jfif",
          },
          {
            image: "/tizzy1.jfif",
          },
        ],
      },
    ],

    // Life Style Photography
    lifestyle: [
      {
        id: 1,
        image: "/ibadan1.jpg",
        link: "/IbadanDetails",
        relatedImages: [
          {
            image: "/ibadan1.jpg",
          },
          {
            image: "/ibadan2.jpg",
          },
          {
            image: "/ibadan3.jpg",
          },
          {
            image: "/ibadan4.jpg",
          },
        ],
      },
      {
        id: 3,
        image: "/feran0.jpg",
        link: "/Faraheint",
        relatedImages: [
          {
            image: "/feran0.jpg",
          },
          {
            image: "/feran5.jfif",
          },
          {
            image: "/feran6.jfif",
          },
          {
            image: "/feran7.jfif",
          },
          {
            image: "/feran8.jfif",
          },
        ],
      },
      {
        id: 4,
        image: "/cynthia5.jfif",
        link: "/Ceci",
        relatedImages: [
          {
            image: "/cynthia2.jfif",
          },
          {
            image: "/cynthia3.jfif",
          },
          {
            image: "/cynthia4.jfif",
          },
          {
            image: "/cynthia5.jfif",
          },
          {
            image: "/cynthia6.jfif",
          },
        ],
      },
      {
        id: 5,
        image: "/feran3.jfif",
        link: "/FaraheintPlus",
        relatedImages: [
          {
            image: "/feran2.jfif",
          },
          {
            image: "/feran3.jfif",
          },
          {
            image: "/feran4.jfif",
          },
          {
            image: "/feran1.jfif",
          },
        ],
      },
      {
        id: 7,
        image: "/OOU0.jpg",
        link: "/OouStreet1",
        relatedImages: [
          {
            image: "/OOU2.jfif",
          },
          {
            image: "/OOU0.jpg",
          },
          {
            image: "/OOU3.jfif",
          },
        ],
      },
      {
        id: 4,
        image: "/cynthia6.jfif",
        link: "/Ceci",
        relatedImages: [
          {
            image: "/cynthia5.jfif",
          },
          {
            image: "/cynthia3.jfif",
          },
          {
            image: "/cynthia4.jfif",
          },
          {
            image: "/cynthia2.jfif",
          },
          {
            image: "/cynthia6.jfif",
          },
        ],
      },
    ],

    // Celebrities Photography
    celebrities: [
      {
        id: 2,
        image: "/energy1.jfif",
        link: "/BlockParty",
        relatedImages: [
          {
            image: "/energy1.jfif",
          },
          {
            image: "/energy2.jfif",
          },
        ],
      },
      {
        id: 6,
        image: "/bella33.jfif",
        link: "/Bella",
        relatedImages: [
          {
            image: "/bella4.jfif",
          },
          {
            image: "/bella33.jfif",
          },
          {
            image: "/bella2.jfif",
          },
          {
            image: "/bella1.jfif",
          },
        ],
      },
      {
        id: 8,
        image: "/poco1.jfif",
        link: "/Pocolee",
        relatedImages: [
          {
            image: "/poco3.jfif",
          },
          {
            image: "/poco1.jfif",
          },
          {
            image: "/poco4.jfif",
          },
          {
            image: "/poco2.jfif",
          },
        ],
      },
      {
        id: 10,
        image: "/victony1.jfif",
        link: "/Victony",
        relatedImages: [
          {
            image: "/victony4.jfif",
          },
          {
            image: "/victony2.jfif",
          },
          {
            image: "/victony1.jfif",
          },
          {
            image: "/victony3.jfif",
          },
        ],
      },
      {
        id: 12,
        image: "/tizzy1.jfif",
        link: "/Tizzy",
        relatedImages: [
          {
            image: "/tizzy2.jfif",
          },
          {
            image: "/tizzy1.jfif",
          },
        ],
      },
    ],
  });
  return { homePics, setHomePics };
}
