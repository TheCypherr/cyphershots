import React, { useContext } from "react";
// import "./OouStreet2.css";
import { PictureContext } from "../../utils/PictureContext";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { sliderSettings } from "../../utils/Common";
import { Link, useParams } from "react-router-dom";

const OouStreet2 = () => {
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
          <h1>Street Photography in OOU</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            earum sunt, quidem quo laboriosam minus, dolorem molestiae
            repudiandae quas placeat eaque non voluptatibus a omnis, officiis
            iusto unde eius ratione. Debitis voluptatibus voluptatem, voluptates
            molestias voluptas aliquid quam adipisci deleniti?
          </h3>
          <div className="r-btn">
            <Link to="/">
              <button>&lt; Back</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OouStreet2;
