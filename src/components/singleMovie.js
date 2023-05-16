import React from "react";
import Moviecard from "./microcomponents/movieCard";
import { useDispatch, useSelector } from "react-redux";
import { nowSliceActions } from "./redux/searched";

export default function Singlemovie({ element }) {
  const colors = useSelector((state) => state.color.colors);
  
  return (
    element  && (
      <div className="flex flex-col ">
        <p
          className={`recent text-2xl font-sans mx-4 mt-[4rem] font-semibold ${
            "text-" + colors.text
          }`}
        >{`Result`}</p>
        <Moviecard element={element} />
      </div>
    )
  );
}
