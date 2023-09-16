import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoriteMovies from "./pages/FavoriteMovies";
import Movies from "./pages/Movies";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";

function MovieDirector() {
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
    }, [moviesCollectionRef]);
  


  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Movies movieList={movieList} />} />
          <Route path="favorite-movies" element={<FavoriteMovies movieList={movieList}/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default MovieDirector;
