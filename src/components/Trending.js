import React, { Component } from "react";
import MovieList from "./MovieList";

import axios from "axios";

class Trending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };

    //this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const apiKey = "7538a1ba766c36605ab0e8e10bab23da";
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
    axios
      .get(url)
      .then(res => this.setState({ results: res.data.results }))
      .catch(error => console.log(error));
  }

  clickHandler(id, e) {
    e.preventDefault();
    alert(id);
  }
  render() {
    const { results } = this.state;
    const movieList = results.map((movie, key) => {
      return key < 8 ? (
        <MovieList
          key={movie.id}
          title={movie.original_title}
          poster={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          id={movie.id}
          clickHandler={this.clickHandler.bind(this, movie.id)}
        />
      ) : (
        ""
      );
    });

    return (
      <section id="trending">
        <div className="trending-inner py-5 px-4">
          <h3 className="display-5 py-3 mb-3 border-bottom">Trending Today</h3>
          <div>
            <div className="movie-grid">{movieList}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Trending;

//card, image,
