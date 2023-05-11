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
    <div className="singleMovie flex flex-wrap m-5 bg-cover bg-no-repeat w-full h-[75vh]"  style={{background: `linear-gradient(red, blue,url(https://image.tmdb.org/t/p/w500${mov.movie_results[0].backdrop_path}));`}}>
      <div className="photo w-[40rem] h-[25rem] bg-cover bg-no-repeat rounded-xl" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${mov.movie_results[0].poster_path})` }}>

      </div>
      <div className="desc">{mov.movie_results[0].original_title}</div>
      {/* {movie.movie_results[0].title!==undefined?<p>{movie.movie_results[0].title}</p>:<p>{movie.tv_results[0].name}</p>} */}
    </div>
  );
}
