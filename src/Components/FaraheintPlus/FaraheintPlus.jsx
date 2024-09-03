import React, { useContext } from "react";
// import "./FaraheintPlus.css";
import { PictureContext } from "../../utils/PictureContext";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { sliderSettings } from "../../utils/Common";
import { useParams } from "react-router-dom";

const FaraheintPlus = () => {
  // Access homePics from context
  const { homePics } = useContext(PictureContext);

  const { id } = useParams(); // id is now extracted from URL parameters

  const picture = homePics.everything.find((pic) => pic.id === parseInt(id));

  // Code for button to slide images below
  const SliderButtons = () => {
    const swiper = useSwiper();
    return (
      <div className="r-buttons">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    );
  };

  return (
    <section className="gallery-wrapper">
      <div className="inner-gallery">
        <div className="flex-container1">
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {picture?.relatedImages?.map((pic, index) => (
              // the ?. is an optional chaining operator which checks if the ppty exist before trying to access it
              <SwiperSlide key={index}>
                <div className="related-images">
                  {console.log("Image path:", pic.image)}
                  <img src={pic.image} alt={pic.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-container2">
          <h1>Lifestyle Photography</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            quasi quisquam eum rem similique accusamus, ut placeat maiores
            pariatur deserunt et qui at porro maxime vel illum quas blanditiis?
            Esse mollitia incidunt ipsa fugiat eius eos a perspiciatis corporis
            fugit eaque inventore quis suscipit obcaecati deleniti, illum amet
            illo maxime, earum, voluptates exercitationem debitis ratione in ut
            nemo. Veritatis illo, reprehenderit quidem, optio consequuntur
            eveniet corrupti sed vero exercitationem eaque officia illum minus
            tenetur ducimus explicabo eius aliquid non necessitatibus?
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FaraheintPlus;
