import Navbar from "./Navbar";
import Star from "./Star";
import "./FavoriteMovies.css";

function FavoriteMovies({ movieList }) {
  return (
    <div className="img-container">
      <Navbar />
      <div className="img-list">
        {movieList.map(
          (image) =>
            image && (
              <div className="img-item" key={image.id}>
                <img
                  className="img"
                  src={`https://image.tmdb.org/t/p/original/${image.img}`}
                  alt=""
                />
                <Star movieId={image.id} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default FavoriteMovies;
