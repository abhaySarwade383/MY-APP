import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="poster">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/400x400"}
          alt={movie.Title}
        />
        <div className="label">
          <span className="type">{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
