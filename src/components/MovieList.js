import React from "react";

const MovieList = ({ poster, title }) => {
  const darkOverlay = {
    background: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%"
  };

  const cardStyling = {
    width: "150px",
    margin: "5px"
  };
  return (
    <div className="card" style={cardStyling}>
      <a href="#main">
        <img src={poster} alt="sample" className="img-fluid" />
      </a>
      <div className="card-img-overlay text-center">
        <a href="#movies">{title}</a>
        <div className="dark-overlay" style={darkOverlay} />
      </div>
    </div>
  );
};

export default MovieList;
