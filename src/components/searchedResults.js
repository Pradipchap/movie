import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Moviecard from "./microcomponents/movieCard";
import { Skeleton, Stack } from "@mui/material";
import Moviecomponent from "./moviecomponent";

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
    <Moviecomponent movies={movies} error={error}/>

  );
}
// {movies.map((element)=>{
//     return <h1 key={element.Title}>{element.Title}</h1>
// })}
