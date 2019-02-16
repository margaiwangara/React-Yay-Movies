import React from "react";

const MovieList = ({ poster, title, clickHandler }) => {
  return (
    <div class="movie">
      <div class="poster">
        <img src={poster} alt={title} />
      </div>
      <div class="content">
        <a href="#title" onClick={clickHandler}>
          <h3>{title}</h3>
        </a>

        <h4>superhero, adventure</h4>
        <h5>
          <span>
            {" "}
            <i class="far fa-calendar-alt" /> 2019-2-21{" "}
          </span>
          <span>
            {" "}
            <i class="far fa-clock" /> 123min{" "}
          </span>
        </h5>
        <h6>
          <i class="far fa-star" /> 8.2/156
        </h6>
      </div>
    </div>
  );
};

export default MovieList;
