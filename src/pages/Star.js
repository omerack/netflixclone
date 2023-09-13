import { useEffect, useState } from "react";
import "./Star.css";
import { addDoc, deleteDoc, doc, collection } from "firebase/firestore";
import { db } from "../firebase";

function Star({ movieId }) {
  const [click, setClick] = useState(false);

  const movieCollectionRef = collection(db, "movies");

  useEffect(() => {
    const data = localStorage.getItem(`${movieId}`);
    if (data) {
      setClick(JSON.parse(data));
    }
  }, [movieId]);

  const toggleClick = async () => {
    const clickState = !click;
    setClick(clickState);
    if (clickState) {
      await addDoc(movieCollectionRef, { key: movieId, value: clickState });
      localStorage.setItem(`${movieId}`, JSON.stringify(clickState));
    } else {
      const movieDoc = doc(db, "movies", movieId);
      await deleteDoc(movieDoc);
      localStorage.removeItem(`${movieId}`, JSON.stringify(clickState));
    }
  };

  return (
    <button className="star" onClick={toggleClick}>
      {click ? "🌟" : "⭐"}
    </button>
  );
}

export default Star;
