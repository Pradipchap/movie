import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { useEffect } from "react";

import { getNowPlayingMovies, getNowSingle } from "./components/redux/searched";
import { useDispatch, useSelector } from "react-redux";
import { nowSliceActions } from "./components/redux/searched";
import SearchedResults from "./components/searchedResults";
import MoviePage from "./components/moviePage";
import { NoPage } from "./components/noPage";
import { colorActions } from "./components/redux/color";
function App() {
  const dispatch = useDispatch();
  const whenID = useSelector(
    (state) => state.nowPlaying.forMovieComponentWhenSearchedWithID
  );
  const string = useSelector((state) => state.nowPlaying.searchString);

  const pageNo = useSelector((state) => state.nowPlaying.pageNo);
  function identifyMovie(argument) {
    if (
      argument.startsWith("tt") &&
      argument.length === 9 &&
      !isNaN(argument.slice(2))
    ) {
      return "ID";
    } else {
      return "Title";
    }
  }
  // useEffect(() => {
  //   const getmov = () => {
  //     console.log("page no is", pageNo);
  //     if (string === null || string === undefined) {
  //       if (localStorage.getItem("search")) {
  //         if (identifyMovie(localStorage.getItem("search")) === "Title") {
  //           dispatch(
  //             getNowPlayingMovies(localStorage.getItem("search"), pageNo)
  //           );
  //           dispatch(getNowSingle({ title: localStorage.getItem("search") }));
  //         }
  //       }
  //     } else {
  //       if (identifyMovie(string) === "Title") {
  //         dispatch(getNowPlayingMovies(string, pageNo));
  //         dispatch(getNowSingle({ title: string }));
  //       }
  //     }
  //   };
  //   getmov();
  // }, [dispatch, pageNo, string]);
  const x = async (id) => {
    let a = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=46cb632b`);
    let parsed = await a.json();
    let title = await parsed.Title;
    return await title;
  };
  useEffect(() => {
    const getmov = async() => {
      if (string === null || string === undefined) {
        if (localStorage.getItem("search")) {
          if (identifyMovie(localStorage.getItem("search")) === "Title") {
            dispatch(
              getNowPlayingMovies(localStorage.getItem("search"), pageNo)
            );
            dispatch(getNowSingle({ title: localStorage.getItem("search") }));
          } else {
            let value=await x(localStorage.getItem("search"))
            dispatch(getNowPlayingMovies(value));
           await dispatch(getNowSingle({ id: localStorage.getItem("search") }));
          }
        }
      } else {
        if (identifyMovie(string) === "Title") {
          dispatch(getNowPlayingMovies(string,pageNo));
          dispatch(getNowSingle({ title: string }));
        } else {
          let value=await x(string)
         await dispatch(getNowPlayingMovies(value,pageNo));
          dispatch(getNowSingle({ id: string }));
        }
      }
    };
    getmov();
  }, [dispatch, pageNo, string]);

  // useEffect(() => {
  //   const getmov = () => {
  //     // console.log("page no is", pageNo);
  //     if (string === null || string === undefined) {
  //       if (localStorage.getItem("search")) {
  //         if (identifyMovie(localStorage.getItem("search")) === "ID") {
  //           dispatch(getNowSingle({ id: localStorage.getItem("search") }));
  //           dispatch(getNowPlayingMovies(whenID, pageNo));
  //         }
  //       }
  //     } else {
  //       if (identifyMovie(string) === "ID") {
  //         dispatch(getNowSingle({ id: string }));
  //         dispatch(getNowPlayingMovies(whenID, pageNo));
  //       }
  //     }
  //   };
  //   getmov();
  // }, [dispatch, string, pageNo, whenID]);

  // useEffect(() => {
  //   console.log("array", array);
  // }, [array]);
  // useEffect(() => {
  //   console.log("errpr", error);
  // }, [error]);
  useEffect(() => {
    localStorage.getItem("mode") === "dark" && dispatch(colorActions.toDark());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchedResults />} />
          <Route exact path="/movie/:movieID" element={<MoviePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
