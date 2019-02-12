import React from "react";

const MovieList = ({ poster, title, clickHandler }) => {
  const cardStyling = {
    height: "230px",
    background: "url(" + poster + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return (
    <div className="card m-0 p-0" style={cardStyling}>
      <div className="card-img-overlay text-center">
        <a href="#movies" onClick={clickHandler}>
          {title}
        </a>
      </div>
    </div>
  );
};

export default MovieList;
