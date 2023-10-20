import Navbar from "./Navbar";
import Star from "./Star";
import "./FavoriteMovies.css";

function FavoriteMovies() {
  const favoriteMoviesId = Object.keys(localStorage);
  return (
    <div className="img-container">
      <Navbar />
      <div className="img-list">
        {favoriteMoviesId.map(
          (image) =>
            image && (
              <div className="img-item">
                <img
                  className="img"
                  src={`https://image.tmdb.org/t/p/original/${image}`}
                  alt=""
                />
                <Star movieId={image} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default FavoriteMovies;
