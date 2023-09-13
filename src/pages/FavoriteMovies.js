import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Star from "./Star";
import "./FavoriteMovies.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

function FavoriteMovies() {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getMovieList();
  }, []);

  return (
    <div className="img-container">
      <Navbar />
      <div className="img-list">
        {movieList.map((image) => (
          <div className="img-item" key={image.id}>
            {console.log(image)}
            <img
              className="img"
              src={`https://image.tmdb.org/t/p/original/${image.key}`}
              alt=""
            />
            <Star movieId={image.key} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
