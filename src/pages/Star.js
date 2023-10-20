import { useEffect, useState } from "react";
import "./Star.css";

function Star({ movieId }) {
  const [click, setClick] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem(`${movieId}`);
    if (data) {
      setClick(JSON.parse(data));
    }
  }, [movieId]);

  const toggleClick = () => {
    const clickState = !click;
    setClick(clickState);
    if (clickState) {
      localStorage.setItem(`${movieId}`, JSON.stringify(clickState));
    } else {
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
