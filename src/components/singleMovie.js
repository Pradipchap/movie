import React from "react";
import Moviecard from "./microcomponents/movieCard";
import { useSelector } from "react-redux";

export default function Singlemovie({ element }) {
  const colors = useSelector((state) => state.color.colors);
  const error = useSelector((state) => state.nowPlaying.errorForSingle);
  return (
    element && (
      <div className="flex flex-col ">
        <p
          className={`recent text-2xl font-sans mx-4 mt-[4rem] font-semibold ${
            "text-" + colors.text
          }`}
        >{`Result`}</p>
        {error ? (
          <p className={`${"text-" + colors.text} mx-5 my-5`}>{error}</p>
        ) : (
          <Moviecard element={element} />
        )}
      </div>
    )
  );
}
