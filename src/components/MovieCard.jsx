import React from "react";
import { Link } from "react-router-dom";

function MovieCard({movie}) {
  
  return (
    <div className="movie-card">
    <article>
        <h2>{title}</h2>
        <link to={`/movie/${movie.id}`}>View Info</link>
    </article>
    </div>
  );
};

export default MovieCard;