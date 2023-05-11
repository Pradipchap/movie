import React, { useRef } from "react";
import { useSelector } from "react-redux";

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
            <div className="movieCard w-60 h-96  rounded-xl text-white px-3 py-3" key={element.imdbID}>
              <div
                className="img w-full h-[80%] bg-blue bg-fill rounded-xl flex relative"
                style={{ backgroundImage: `url(${element.Poster})` }}
              >
                <p className="bg-red-700 block h-max w-max py-1 px-1 rounded-sm absolute bottom-3 right-3 opacity-80">
                  {element.Type}
                </p>
              </div>
              <div className="details mt-4">
                <div className="h-[2rem]">
                  {" "}
                  <p className="text-xl text-clip overflow-hidden block h-full font-extrabold">
                    {element.Title}
                  </p>
                </div>
                <p className="text-sm font-light">{element.Year}</p>
              </div>
            </div>
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
