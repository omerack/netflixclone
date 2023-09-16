import { useEffect, useState } from "react";
import "./Star.css";
import { getDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

function Star({ movieId }) {
  const [click, setClick] = useState(movieId);

  useEffect(() => {
    const fetchFavorite = async () => {
      const movieDocRef = doc(db, "movies", movieId);
      const movieSnapshot = await getDoc(movieDocRef);

      if (movieSnapshot.exists()) {
        const movieData = movieSnapshot.data();
        setClick(movieData.favorite);
      }
    };
    fetchFavorite();
  }, [movieId]);

  const toggleClick = async () => {
    const movieDocRef = doc(db, "movies", movieId);
    const clickState = !click;
    setClick(clickState);
    if (clickState) {
      await addDoc(movieDocRef);
    } else {
      await deleteDoc(movieDocRef);
    }
  };

  return (
    <button className="star" onClick={toggleClick}>
      {click ? "🌟" : "⭐"}
    </button>
  );
}

export default Star;
