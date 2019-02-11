import React from "react";

const MovieList = ({ poster, title }) => {
  return (
    <div className="col-md-2 col-sm-4">
      <div className="card">
        <img src={poster} alt="sample" height="200" width="150" />
      </div>
    </div>
  );
};

export default MovieList;
