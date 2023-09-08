import { useEffect, useState } from "react";
import "./Star.css";

function Star({ movieId }) {
  useEffect(() => {
    const data = localStorage.getItem(`${movieId}`);
    setClick(JSON.parse(data));
  }, [movieId]);

  const [click, setClick] = useState(true);

  const toggleClick = () => {
    const clickState = !click;
    setClick(clickState);
    localStorage.setItem(`star_${movieId}`, JSON.stringify(clickState));
  };

  return (
    <button className="star" onClick={toggleClick}>
      {click ? "⭐" : "🌟"}
    </button>
  );
}

export default Star;
