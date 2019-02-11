import React from "react";

const MovieList = ({ poster, title }) => {
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
      </div>
    </div>
  );
};

export default MovieList;
