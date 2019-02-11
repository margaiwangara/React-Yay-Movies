import React from "react";

const MovieList = ({ poster, title, clickHandler }) => {
  const cardStyling = {
    width: "150px"
  };
  return (
    <div className="card m-0 p-0" style={cardStyling}>
      <a href="#main">
        <img src={poster} alt="sample" className="img-fluid" />
      </a>
      <div className="card-img-overlay text-center">
        <a href="#movies" onClick={clickHandler}>
          {title}
        </a>
      </div>
    </div>
  );
};

export default MovieList;
