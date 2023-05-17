import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Moviecard({ element }) {
  const colors = useSelector((state) => state.color.colors);
  const navigate = useNavigate();

  //click function that navigates to a single movie details using dynamic routing
  const openMoviePage = () => {
    navigate(`/movie/${element.imdbID}`);
    //using movie IMDB ID
  };
  return (
    <div
      onClick={openMoviePage}
      className="movieCard w-60 h-96  rounded-xl text-white px-3 py-3"
      key={element.imdbID}
    >
      <div
        className="img w-full h-[80%] bg-blue bg-fill rounded-xl flex relative"
        style={{ backgroundImage: `url(${element.Poster})` }}
      >
        <p className="bg-red-700 block h-max w-max py-1 px-1 rounded-sm absolute bottom-3 right-3 opacity-90">
          {element.Type}
        </p>
      </div>
      <div className="details mt-4">
        <div className="h-[2rem]">
          {" "}
          <p
            className={`text-xl text-clip overflow-hidden block h-full font-extrabold  ${
              "text-" + colors.text
            }`}
          >
            {element.Title}
          </p>
        </div>
        <p className={`text-sm font-light ${"text-" + colors.text}`}>
          {element.Year}
        </p>
      </div>
    </div>
  );
}
