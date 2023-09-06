import { useState, useEffect } from "react";
import "./Star.css";

function Star({ movieId }) {
  useEffect(() => {
    const storedStars = localStorage.getItem(`${movieId}`);
    if (storedStars !== null) {
      setClick(storedStars === true ? "🌟" : "⭐");
      console.log(storedStars);
    }
  }, [movieId]);

  const [click, setClick] = useState("⭐");

  const toggleClick = () => {
    setClick(() => (click === "⭐" ? "🌟" : "⭐"));
    localStorage.setItem(`${movieId}`, click.toString());
  };

  return (
    <button className="star" onClick={toggleClick}>
      {click}
    </button>
  );
}

export default Star;
