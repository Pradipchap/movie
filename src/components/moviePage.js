import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Loader from "./microcomponents/loader";
import "./opacity.css";

import CircularProgressWithLabel from "./microcomponents/rating";
export default function MoviePage() {
  const [loading, setloading] = useState(true);
  const { movieID } = useParams(); //for dynamic routing
  const [movie, setmovie] = useState([]);
  const colors = useSelector((state) => state.color.colors);

  //fetch data baout a particular movie based on id
  useEffect(() => {
    setloading(true);

    fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=46cb632b`)
      .then((response) => response.json())
      .then((response) => {
        response.Response === "True" && setmovie(response);
        setloading(false);
      })
      .catch((err) => console.error(err));
  }, [movieID]);

  return (
    <div className={`singleMovie w-full  ${"text-" + colors.text}`}>
      {loading === true ? (
        <Loader open={loading} />
      ) : (
        <div className="">
          <img
            className="w-full h-full absolute top-0 left-0 opacity-10 overflow-hidden"
            src={movie.Poster}
            alt="background"
          />
          <div className="flex flex-col rounded-lg   md:w-full md:px-5 px-5 md:flex-row md:my-[5rem] my-5 items-center justify-center gap-[3rem]">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-[30rem] md:w-[40%] md:rounded-none md:rounded-l-lg"
              src={movie.Poster}
              alt=""
            />
            {/* <div className="opacity-layer w-full h-[250px] absolute bottom-0 left-0 "></div> */}
            <div className="flex flex-col justify-between p-3 gap-3 md:w-[50%] w-[80%] relative">
              <div className="flex items-center content-center gap-5">
                {" "}
                <p
                  className={`title text-5xl font-bold  ${
                    "text-" + colors.text
                  }`}
                >
                  {movie.Title}
                </p>
                <span
                  className={`text-sm ${
                    "border-" + colors.text
                  }  border-2 px-1 py-1`}
                >
                  {movie.Rated}
                </span>
              </div>
              <div className="runtimeandgenre">
                <p
                  className="px-1 py-1 bg-red-500 block w-max rounded-md my-1
                "
                >
                  {movie.Runtime}
                </p>
                <b>Genre: {movie.Genre}</b>
              </div>

              <div className={`ratings flex gap-5  ${"text-" + colors.text}`}>
                {movie.Ratings.map((element, index) => {
                  return (
                    <div
                      className="flex items-center flex-wrap gap-2 "
                      key={element.source}
                    >
                      <p className="">{element.Source}</p>
                      <CircularProgressWithLabel
                        value={
                          index === 0
                            ? Number(element.Value.slice(0, 2) * 10)
                            : Number(element.Value.slice(0, 2))
                        }
                      />
                    </div>
                  );
                })}
              </div>
              <div>
                <b>BOX OFFICE : </b>
                {movie.BoxOffice}
              </div>
              {/* <Rating/> */}
              <p
                className={`overview text-2xl font-bold  ${
                  "text-" + colors.text
                }`}
              >
                Plot
              </p>
              <p className={`overview text-md   ${"text-" + colors.text}`}>
                {movie.Plot}
              </p>
              <div className="flex  gap-3 flex-col">
                <p className="text-xl font-bold">Released Date</p>
                <div>
                  <p className={` date  ${"text-" + colors.text} `}>
                    <b>Theater:</b> {movie.Released}
                  </p>
                  <p className={` date  ${"text-" + colors.text} `}>
                    <b>DVD:</b> {movie.DVD}
                  </p>
                </div>
              </div>
              <div className="cast flex flex-col">
                <b>Director: {movie.Director}</b>
                <b>Cast: {movie.Actors}</b>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
