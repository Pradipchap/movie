import React from "react";
import { useSelector } from "react-redux";

import Moviecomponent from "./moviecomponent";

import Loader from "./microcomponents/loader";
import Pagetransiton from "./microcomponents/pageTransitioner";
import Singlemovie from "./singleMovie";

export default function SearchedResults() {
  //error while fetching data
  const error = useSelector((state) => state.nowPlaying.errorForArray);

  //loading state..if loading is true rendering spinner component
  const loading = useSelector((state) => state.nowPlaying.loading);

  //array of fetched movies
  const movies = useSelector((state) => state.nowPlaying.movies);

  //single movie object
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
      <div className="self-center">{ <Pagetransiton />}</div>
    </div>
  );
}
