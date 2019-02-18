import React, { Component } from "react";
import MovieList from "./MovieList";

import axios from "axios";

class NowShowing extends Component {
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
      vote_count: []
    };
  }

  componentDidMount() {
    const apiKey = "7538a1ba766c36605ab0e8e10bab23da";
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
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
                backdrop: [...this.state.backdrop, movieData.backdrop_path]
              });
            })
            .catch(error => console.log(error))
        )
      )
      .catch(error => console.log(error));
  }

  clickHandler(id, e) {
    e.preventDefault();
    alert(id);
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
    const data = title.map((movie, key) => (
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

    return <React.Fragment>{data}</React.Fragment>;
  }
}

export default NowShowing;
