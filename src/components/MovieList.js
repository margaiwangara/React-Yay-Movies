import React from "react";

const MovieList = ({ poster, title }) => {
  const cardStyling = {
    width: "150px"
  };
  return (
    <div className="col-md-2 col-sm-4 col-xs-6 movie-card m-0 p-0">
      <div className="card m-0 p-0" style={cardStyling}>
        <a href="#main">
          <img src={poster} alt="sample" className="img-fluid" />
        </a>
        <div className="card-img-overlay text-center">
          <a href="#movies">{title}</a>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
