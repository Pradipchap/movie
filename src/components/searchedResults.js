import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moviecard from "./microcomponents/movieCard";
import { Skeleton, Stack } from "@mui/material";
import Moviecomponent from "./moviecomponent";
import { getNowPlayingMovies, nowSliceActions } from "./redux/searched";
import Loader from "./microcomponents/loader";
import Pagetransiton from "./microcomponents/pageTransitioner";
import Singlemovie from "./singleMovie";

// const movie = {
//   Title: "Next Avengers: Heroes of Tomorrow",
//   Year: "2008",
//   imdbID: "tt1259998",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMTQ3NjExNjY4N15BMl5BanBnXkFtZTcwNTczODkwNQ@@._V1_SX300.jpg",
// };

export default function SearchedResults() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.nowPlaying.error);

  const loading = useSelector((state) => state.nowPlaying.loading);

  // const error = useSelector((state) => state.nowPlaying.error);

  const movies = useSelector((state) => state.nowPlaying.movies);
  const data = useSelector((state) => state.nowPlaying.singleMovie);


  const colors = useSelector((state) => state.color.colors);

  return loading === true ? (
    <Loader open={loading} />
  ) : (
    <div className="flex flex-col justify-between mb-[2rem] gap-[3rem]">
      <Singlemovie element={data} />
      <p
        className={`recent text-2xl font-sans mx-4 mt-[4rem] font-semibold ${
          "text-" + colors.text
        }`}
      >{`Based on you search`}</p>
      <Moviecomponent movies={movies} error={error} />
<div className="self-center">      <Pagetransiton /></div>
    </div>
  );
}
// {movies.map((element)=>{
//     return <h1 key={element.Title}>{element.Title}</h1>
// })}
