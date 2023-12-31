import axios from "axios";
import { useState, useEffect } from "react";
import "./Movies.css";
import Star from "./Star";
import Navbar from "./Navbar";
import MovieInfo from "./MovieInfo";

function Movies() {
  const [presentedMovies, setPresentedMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("");

  const popularMovies =
    "https://api.themoviedb.org/3/movie/popular?api_key=ededa9be17da78a3b91e37d61a4008b1";

  const searchedMovies = `https://api.themoviedb.org/3/search/movie?query=${movieInput}&api_key=ededa9be17da78a3b91e37d61a4008b1`;

  useEffect(() => {
    const getMovies = async () => {
      await axios
        .get(movieInput === "" ? popularMovies : searchedMovies)
        .then((res) => {
          console.log(res.data.results);
          setPresentedMovies(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getMovies();
  }, [movieInput, searchedMovies]);

  function handleChange(e) {
    setMovieInput(e.target.value);
  }
  return (
    <div className="movies-container">
      <Navbar />
      <input
        className="input"
        placeholder="Name Of The Movie"
        value={movieInput}
        onChange={handleChange}
      />
      <div className="movie-list">
        {presentedMovies.map((movie) => (
          <div className="movie-item" key={movie.id}>
            <img
              className="movie-img"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
            <MovieInfo info={movie} />
            <Star movieId={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
