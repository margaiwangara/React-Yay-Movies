import React, { Component } from "react";
import NowShowingSlider from "./NowShowingSlider";

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
  render() {
    const { results } = this.state;
    const data = results.map((movie, key) => {
      return key < 6 ? (
        <NowShowingSlider
          key={movie.id}
          title={movie.original_title}
          overview={movie.overview}
          image={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
          status={key === 0 ? "active" : ""}
        />
      ) : (
        ""
      );
    });

    const nowShowingStyling = {
      minHeight: "500px",
      maxWidth: "100%"
    };
    return (
      <section id="now-showing" style={nowShowingStyling}>
        <div className="carousel slide" data-ride="carousel" id="myCarousel">
          <div className="carousel-inner">{data}</div>
        </div>
      </section>
    );
  }
}

export default NowShowing;
