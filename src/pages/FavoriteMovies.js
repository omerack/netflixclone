import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Star from "./Star";

function FavoriteMovies() {
  const [presentedMovies, setPresentedMovies] = useState([]);

  async function getMovies() {
    await axios
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

  useEffect(() => {
    getMovies();
  });

  return (
    <div className="movies-container">
      <Navbar />
      <div className="movie-list">
        {presentedMovies.map((movie) => (
          <div className="movie-item" key={movie.id}>
            <img
              className="movie-img"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
            <Star movieId={movie.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
