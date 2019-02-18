import React, { Component } from "react";
import MovieList from "./MovieList";

import axios from "axios";

class ComingSoon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: [],
      title: [],
      genres: [],
      release_date: [],
      runtime: [],
      poster: [],
      backdrop: [],
      vote_average: [],
      vote_count: [],
      overview: []
    };
  }

  componentDidMount() {
    const apiKey = "7538a1ba766c36605ab0e8e10bab23da";
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
    const movieUrl = `https://api.themoviedb.org/3/movie`;
    axios
      .get(url)
      .then(resp =>
        resp.data.results.map(data =>
          axios
            .get(`${movieUrl}/${data.id}?api_key=${apiKey}`)
            .then(movie => {
              let movieData = movie.data;
              //set state
              this.setState({
                id: [...this.state.id, movieData.id],
                title: [...this.state.title, movieData.title],
                release_date: [
                  ...this.state.release_date,
                  movieData.release_date
                ],
                poster: [...this.state.poster, movieData.poster_path],
                runtime: [...this.state.runtime, movieData.runtime],
                vote_average: [
                  ...this.state.vote_average,
                  movieData.vote_average
                ],
                vote_count: [...this.state.vote_count, movieData.vote_count],
                backdrop: [...this.state.backdrop, movieData.backdrop_path],
                overview: [...this.state.overview, movieData.overview]
              });
            })
            .catch(error => console.log(error))
        )
      )
      .catch(error => console.log(error));
  }

  clickHandler(movieId, e) {
    e.preventDefault();

    const {
      id,
      title,
      overview,
      runtime,
      poster,
      vote_average,
      vote_count
    } = this.state;
    const movieDetails = {};

    id.forEach((value, key) => {
      if (value === movieId) {
        movieDetails.id = value;
        movieDetails.title = title[key];
        movieDetails.overview = overview[key];
        movieDetails.runtime = runtime[key];
        movieDetails.voteAverage = vote_average[key];
        movieDetails.voteCount = vote_count[key];
        movieDetails.poster = poster[key];
      }
    });
    console.log(movieDetails);
  }
  render() {
    const {
      title,
      id,
      poster,
      release_date,
      runtime,
      vote_average,
      vote_count
    } = this.state;
    const movieList = title.map((movie, key) => (
      <MovieList
        key={id[key]}
        title={movie}
        poster={"https://image.tmdb.org/t/p/original" + poster[key]}
        releaseDate={release_date[key]}
        runtime={runtime[key]}
        voteAverage={vote_average[key]}
        voteCount={vote_count[key]}
        clickHandler={this.clickHandler.bind(this, id[key])}
      />
    ));

    return <React.Fragment>{movieList}</React.Fragment>;
  }
}

export default ComingSoon;
