import { useState, useEffect } from "react";
import "./Star.css";

function Star({ movieId }) {
  const [click, setClick] = useState("⭐");

  const toggleClick = () => {
    setClick(() => (click === "⭐" ? "🌟" : "⭐"));
  };

  useEffect(() => {}, [click]);

  return (
    <button className="star" onClick={toggleClick}>
      {click}
    </button>
  );
}

export default Star;
