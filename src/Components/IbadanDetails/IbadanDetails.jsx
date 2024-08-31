import React, { useContext } from "react";
import "./IbadanDetails.css";
import { PictureContext } from "../../utils/PictureContext";
import { useParams } from "react-router-dom";

const IbadanDetails = () => {
  // Access homePics from context
  const { homePics } = useContext(PictureContext);

  const { id } = useParams(); // id is now extracted from URL parameters

  const picture = homePics.everything.find((pic) => pic.id === parseInt(id));
  // If homePics is an array of arrays, we use .flat() to access all pictures.

  return (
    <section className="gallery-wrapper">
      <div className="inner-gallery">
        <h3>More images I shot in UI</h3>
        <div className="related-container">
          {picture?.relatedImages?.map((related, index) => (
            // the ?. is an optional chaining operator which checks if the ppty exist before trying to access it
            <div key={index} className="related-images">
              <img src={related.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IbadanDetails;
