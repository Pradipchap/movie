import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function MoviePage() {
  const { movieID } = useParams();
  const [movie, setmovie] = useState([]);
  const mov = {
    movie_results: [
      {
        adult: false,
        backdrop_path: "/1wOu8rdvPxU1ObHi20VcRhfNpbo.jpg",
        id: 10195,
        title: "Thor",
        original_language: "en",
        original_title: "Thor",
        overview:
          "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
        poster_path: "/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
        media_type: "movie",
        genre_ids: [12, 14, 28],
        popularity: 64.323,
        release_date: "2011-04-21",
        video: false,
        vote_average: 6.767,
        vote_count: 19574,
      },
    ],
    person_results: [],
    tv_results: [],
    tv_episode_results: [],
    tv_season_results: [],
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTM2MTZlOGM3MDhmYWU2NmVjMDIyNzEwNzcxMjVmNCIsInN1YiI6IjY0NWJkNWFlZmUwNzdhNWNhZmJlMDVlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LHWxSTRCOX6yq4Z5NsvnMK2rWG8pPst622Nu5t6siUY",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/find/${movieID}?external_source=imdb_id`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setmovie(
          response.movie_results[0] === undefined
            ? response.tv_results[0]
            : response.movie_results[0]
        );
      })
      .catch((err) => console.error(err));
  }, [movieID]);

  return (
    <div
      className="singleMovie flex flex-wrap w-full items-center justify-center  "
      style={{
        background: `linear-gradient(to bottom, rgba(13, 27, 42, 0.2), rgba(0, 17, 42, 1)), url(https://image.tmdb.org/t/p/w500${mov.movie_results[0].backdrop_path}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div className="descandphoto mt-[10rem] flex flex-row items-center content-center w-full justify-center gap-5 flex-wrap relative mx-3 my-3">
        <div
          className="photo  h-[30rem] bg-cover bg-no-repeat rounded-xl w-[20rem] relative"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${mov.movie_results[0].poster_path})`,
          }}
        >
          <p className="bg-red-500 block h-max w-max py-1 px-1 rounded-sm absolute bottom-3 right-3 opacity-90">
            {mov.movie_results[0].media_type}
          </p>
        </div>
        <div className="desc text-white w-[50%] flex flex-col gap-5">
          <p className="title text-5xl font-bold">
            {mov.movie_results[0].title}
          </p>
          <div className="ratings flex gap-3">
            {/* <div className="circlerating h-[3rem] w-[3rem] rounded-full bg-red-500 flex items-center justify-center">
              <div className="h-[2rem] w-[2rem] bg-blue-600 rounded-full"></div>
            </div> */}
            <p className="imdb px-2 py-1 bg-red-600 w-max rounded-xl">
              {Math.ceil(mov.movie_results[0].popularity) + "%"}
            </p>
            <p className="imdb px-2 py-1 bg-red-600 w-max rounded-xl">
              {mov.movie_results[0].vote_average.toPrecision(2)}
            </p>
          </div>

          <p className="date flex flex-col text-2xl gap-2">
            <p className="date">{mov.movie_results[0].release_date}</p>
          </p>
          <p className="overview text-md">{mov.movie_results[0].overview}</p>
        </div>
      </div>

      {/* {movie.movie_results[0].title!==undefined?<p>{movie.movie_results[0].title}</p>:<p>{movie.tv_results[0].name}</p>} */}
    </div>
  );
}
