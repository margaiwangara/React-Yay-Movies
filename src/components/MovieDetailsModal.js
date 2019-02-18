import React from "react";

const MovieDetailsModal = ({ singleMovieDetails }) => {
  const {
    id,
    title,
    poster,
    overview,
    runtime,
    voteAverage,
    voteCount
  } = singleMovieDetails;

  const modalStyle = {
    position: "fixed",
    background: "rgba(0, 0, 0, 0.4)",
    height: "100%",
    width: "100%",
    overflow: "auto"
  };
  return (
    <React.Fragment>
      <div className="modal" style={modalStyle}>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>title</td>
              <td>poster</td>
              <td>overview</td>
              <td>runtime</td>
              <td>vote average</td>
              <td>vote count</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{title}</td>
              <td>{poster}</td>
              <td>{overview}</td>
              <td>{runtime}</td>
              <td>{voteAverage}</td>
              <td>{voteCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default MovieDetailsModal;
