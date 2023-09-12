import React from "react";
import "./MovieInfo.css";

function MovieInfo({ info }) {
  return (
    <div className="movie-info" key={info.id}>
      <h3 className="original-title">{info.original_title}</h3>
      <h3 className="overview">{info.overview}</h3>
      <h3 className="release-date">release date: {info.release_date}</h3>
    </div>
  );
}

export default MovieInfo;
