import React, { Component } from "react";
import MovieList from "./MovieList";

import axios from "axios";

class NowShowing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    const apiKey = "7538a1ba766c36605ab0e8e10bab23da";
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    axios
      .get(url)
      .then(resp => this.setState({ results: resp.data.results }))
      .catch(error => console.log(error));
  }

  clickHandler(id, e) {
    e.preventDefault();
    alert(id);
  }
  render() {
    const { results } = this.state;
    const data = results.map((movie, key) => {
      return key < 9 ? (
        <MovieList
          key={movie.id}
          title={movie.original_title}
          poster={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          clickHandler={this.clickHandler.bind(this, movie.id)}
        />
      ) : (
        ""
      );
    });

    return <React.Fragment>{data}</React.Fragment>;
  }
}

export default NowShowing;
