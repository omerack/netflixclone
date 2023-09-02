import axios from "axios";
import { useState, useEffect } from "react";
import "./Movies.css";
import Star from "./Star";

function Movies() {
  const [presentedMovies, setPresentedMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("");

  function popularMovies() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ededa9be17da78a3b91e37d61a4008b1"
      )
      .then((res) => {
        console.log(res.data.results);
        setPresentedMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(e) {
    setMovieInput(e.target.value);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${movieInput}&api_key=ededa9be17da78a3b91e37d61a4008b1`
      )
      .then((res) => {
        console.log(res.data.results);
        setPresentedMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    popularMovies();
  }, []);

  return (
    <div className="movies-container">
      <input
        placeholder="Name Of The Movie"
        value={movieInput}
        onChange={handleChange}
      />
      <div className="movie-list">
        {presentedMovies.map((movie, index) => (
          <div className="movie-item" key={index}>
            <img
              className="movie-img"
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt=""
            />
            <Star />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
