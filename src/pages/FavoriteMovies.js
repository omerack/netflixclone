import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Star from "./Star";
import axios from "axios";

function FavoriteMovies() {
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
            <Star movieId={movie.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;

// function FavoriteMovies() {
//   useEffect(() => {
//     const storedStars = localStorage.getItem(`${movieId}`);
//     const filteredMovies = storedStars.filter((star) => {
//       star === "🌟";
//     });
//   }, [movieId]);

//   return (
//     <div className="movies-container">
//       <Navbar />
//       {filteredMovies.map((FavoriteMovie) => {
//         <div className="movie-item" key={FavoriteMovie.id}>
//           <img
//             className="movie-img"
//             src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
//             alt=""
//           />
//           <Star movieId={movie.id} />
//         </div>;
//       })}
//     </div>
//   );
// }
