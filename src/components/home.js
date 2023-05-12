import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { nowSliceActions } from "./redux/searched";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const colors=useSelector(state=>state.color.colors)

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

  const sendSearch = () => {
    const string = searchName;
    if (string === "" || string === null || string === undefined) {
      // navigate('/')
    } else {
      dispatch(nowSliceActions.getString(string));
      localStorage.setItem("search", string);
      navigate("/search");
    }
  };
  // let movies = useSelector((state) => state.nowPlaying.movies);
  // https://wallpapercave.com/wp/wp10615929.jpg
  return (
    <div className="flex flex-row overflow-x-scroll w-full h-[75vh]">
      <div
        className="img w-full h-[75vh] flex flex-col items-center content-center justify-center"
        style={{
          background: `linear-gradient(to bottom, rgba(13, 27, 42, 0.2), rgba(159, 124, 11,1)
          ), url(${moviePoster[bg]}) no-repeat center`,
        }}
      >
        <span className={`title text-7xl font-bold tracking-widest`} >
          Welcome
        </span>
        <span className="subTitle tracking-widest font-light my-3">
          Millons of movies, series & shows. Explore now.
        </span>

        <form
          className="search  flex items-center w-[50%] mt-5"
          onSubmit={(e) => {
            e.preventDefault();
            setsearchName(e.target[0].value);
            sendSearch();
          }}
        >
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
