import React from "react";
import Moviecard from "./microcomponents/movieCard";

export default function Moviecomponent({ movies, error }) {
  return (
    <div className="flex flex-wrap items-center justify-center mt-5 content-center">
      {error === null ? (
        movies.map((element) => {
          return <Moviecard element={element} key={element.imdbID} />;
        })
      ) : (
        <h1 className="text-white">{error}</h1>
      )}
    </div>
  );
}
