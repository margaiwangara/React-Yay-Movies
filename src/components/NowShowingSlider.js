import React from "react";
import "../styles/NowShowing.css";

const NowShowingSlider = ({ image, title, overview, status }) => {
  const styling = {
    background: "url(" + image + ") no-repeat",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "500px",
    backgroundPosition: "center"
  };
  return (
    <div className={"carousel-item " + status} style={styling}>
      <div className="carousel-caption">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{overview}</p>
      </div>
    </div>
  );
};

export default NowShowingSlider;
