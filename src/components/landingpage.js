import React from "react";
import { nowSliceActions } from "./redux/searched";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./landingpage.css";

import { useNavigate } from "react-router-dom";

export const Landingpage = () => {
  //colors from redux store
  const colors = useSelector((state) => state.color.colors);


//movie poster backgrounds form landing page
  const moviePoster = [
    "https://wallpapercave.com/wp/wp10615928.jpg",
    "https://wallpapercave.com/dwp2x/wp10615910.jpg",
    "https://wallpapercave.com/dwp2x/wp10615907.jpg",
    "https://wallpapercave.com/dwp2x/wp10615937.jpg",
  ];
  const [searchName, setsearchName] = useState();
  const [bg, setbg] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  //to change background on every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const setb = () => {
        if (bg === 3) setbg(0);
        else setbg((bg) => bg + 1);
      };
      setb();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [bg]);


  //function that takes user INPUT and dispatches as a search string
  const sendSearch = () => {
    const string = searchName;
    if (string === "" || string === null || string === undefined||string.trim().length===0) {

    } else {
      dispatch(nowSliceActions.getString(string));
      localStorage.setItem("search", string);
      //after dispatching navigating to search page
      navigate("/search");

    }
  };
  return (
    <div className="flex flex-row  w-full h-[30rem] ">
      <div
        className="img w-full h-full flex flex-col items-center content-center justify-center"
        style={{
          background: `linear-gradient(to bottom, rgba(13, 27, 42, 0.2), ${colors.primary}
          ), url(${moviePoster[bg]}) no-repeat center`,
        }}
      >
        <span
          className={`title text-7xl font-bold tracking-widest text-white `}
        >
          Welcome
        </span>
        <span className="subTitle tracking-widest font-light my-3  text-white">
          Millons of movies, series & shows. Explore now.
        </span>

        <form
          className="search  flex items-center mt-5 w-[80%] justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            setsearchName(e.target[0].value);
            sendSearch();
          }}
        >
          <input
            type="search"
            className=" text-black text-2xl  "
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
};
