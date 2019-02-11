import React from "react";

const MovieList = ({ poster, title }) => {
  return (
    <div className="col-md-1 col-sm-3">
      <div
        className="card"
        style={{ width: "150px", height: "200px", margin: "5px" }}
      >
        <a href="#main">
          <img src={poster} alt="sample" className="img-fluid" />
        </a>
        <div className="card-img-overlay">
          <a href="#movies">{title}</a>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
