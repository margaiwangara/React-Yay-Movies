import React from "react";

const MovieList = ({
  poster,
  title,
  clickHandler,
  releaseDate,
  runtime,
  voteAverage,
  voteCount
}) => {
  return (
    <div className="movie">
      <div className="poster">
        <img src={poster} alt={title} />
      </div>
      <div className="content">
        <a href="#title" onClick={clickHandler}>
          <h3>{title}</h3>
        </a>
        <h5>
          <span>
            <i className="far fa-calendar-alt" /> {releaseDate}
          </span>
          <span>
            <i className="far fa-clock" /> {runtime}min
          </span>
        </h5>
        <h6>
          <i className="far fa-star" /> {voteAverage} / {voteCount} responses
        </h6>
      </div>
    </div>
  );
};

export default MovieList;
