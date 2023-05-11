import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import RRR from "../RRR-8.jpg";
import { nowSliceActions } from "./redux/searched";
import { useNavigate } from "react-router-dom";
import useSearch from "./microcomponents/searchFunc";

export default function Home() {
  const [searchName, setsearchName] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendSearch = () => {
    const string = searchName;
    if (string === ""||string===null||string===undefined) {
      // navigate('/')
      
    }
    else{
      dispatch(nowSliceActions.getString(string));
      localStorage.setItem("search", string);
      navigate("/search");
    }
  };
  let movies = useSelector((state) => state.nowPlaying.movies);

  return (
    <div className="flex flex-row overflow-x-scroll w-full h-[75vh]">
      <div className="img w-full h-[75vh] flex flex-col items-center content-center justify-center">
        <span className="title text-7xl font-bold tracking-widest">
          WELCOME
        </span>
        <span className="subTitle tracking-widest font-light my-3">
          Millons of movies, series & shows. Explore now.
        </span>

        <form className="search  flex items-center w-[50%] mt-5" onSubmit={(e)=>{
          setsearchName(e.target[0].value);sendSearch()}}>
          <input
            type="search"
            className=" text-black text-2xl px-5 w-[100%] "
            placeholder="search a movie or tv show..."
            onChange={(e) => setsearchName(e.target.value)}
            
          />
          <button className="btn-grad" onClick={sendSearch}>
            search
          </button>
        </form>
      </div>
    </div>
  );
}
