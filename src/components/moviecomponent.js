import React from "react";
import Moviecard from "./microcomponents/movieCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMovies } from "./redux/searched";
import Singlemovie from "./singleMovie";
export default function Moviecomponent({ movies, error }) {
  const dispatch = useDispatch();
  // const error = useSelector((state) => state.nowPlaying.error);
  const mode = useSelector((state) => state.color.mode);
  const colors = useSelector((state) => state.color.colors);

  return (
    <div className="flex flex-wrap items-center justify-center mt-5 mx-auto content-center align-middle">
      
      {error === null ? (
        (
        movies.map((element) => {
          return <Moviecard element={element} key={element.imdbID} />;
        }))
      ) : (
        <h1 className="text-white">{error}</h1>
      )}
    </div>
  );
}
