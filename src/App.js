import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { useEffect } from "react";

import { getNowPlayingMovies, getNowSingle } from "./components/redux/searched";
import { useDispatch, useSelector } from "react-redux";

import SearchedResults from "./components/searchedResults";
import MoviePage from "./components/moviePage";
import { NoPage } from "./components/noPage";
import { colorActions } from "./components/redux/color";
function App() {
  const dispatch = useDispatch();

  //string inputed by user in input box
  const string = useSelector((state) => state.nowPlaying.searchString);

  //page no from page transitioned
  const pageNo = useSelector((state) => state.nowPlaying.pageNo);

  //function to identify whether the string input of user is a IMDB id of a movie or its title
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

  //function that takes id as an argument to return title of the movie based
  //on id ...when user inputs IMDB id
  const x = async (id) => {
    let a = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=46cb632b`);
    let parsed = await a.json();
    let title = await parsed.Title;
    return await title;
  };

  // it dispatches a function that fetches movie data based on user input that may be id or titlte
  useEffect(() => {
    const getmov = async () => {
      if (string === null || string === undefined) {
        //if user refreshes page ..input string may be null
        if (localStorage.getItem("search")) {
          //when refreshing it extracts from localstorage
          if (identifyMovie(localStorage.getItem("search")) === "Title") {
            //if the input string is a tilte
            dispatch(
              getNowPlayingMovies(localStorage.getItem("search"), pageNo)
            );
            dispatch(getNowSingle({ title: localStorage.getItem("search") }));
          } else {
            //if input string is a ID
            let value = await x(localStorage.getItem("search"));
            dispatch(getNowPlayingMovies(value));
            await dispatch(
              getNowSingle({ id: localStorage.getItem("search") })
            );
          }
        }
      } else {
        //if user inputs first time
        if (identifyMovie(string) === "Title") {
          dispatch(getNowPlayingMovies(string, pageNo));
          dispatch(getNowSingle({ title: string }));
        } else {
          let value = await x(string);
          await dispatch(getNowPlayingMovies(value, pageNo));
          dispatch(getNowSingle({ id: string }));
        }
      }
    };
    getmov();
  }, [dispatch, pageNo, string]);

  //to change mode if user has already choose a mode which is saved on localstorage
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
          <Route path="*" element={<NoPage />} />{/* for incorrect addresses*/}
        </Routes>
      </Router>
    </>
  );
}

export default App;
