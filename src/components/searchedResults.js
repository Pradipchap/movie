import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Moviecard from "./microcomponents/movieCard";

// const movie = {
//   Title: "Next Avengers: Heroes of Tomorrow",
//   Year: "2008",
//   imdbID: "tt1259998",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMTQ3NjExNjY4N15BMl5BanBnXkFtZTcwNTczODkwNQ@@._V1_SX300.jpg",
// };

export default function SearchedResults() {
  const error = useSelector((state) => state.nowPlaying.error);

  const movies = useSelector((state) => state.nowPlaying.movies);
  return (
    <div className="flex flex-wrap items-center justify-center mt-5 content-center">
      {error === null ? (
        movies.map((element) => {
          return (
            <Moviecard element={element} key={element.imdbID}/>

          );
        })
      ) : (
        <h1 className="text-white">{error}</h1>
      )}
    </div>
  );
}
// {movies.map((element)=>{
//     return <h1 key={element.Title}>{element.Title}</h1>
// })}
