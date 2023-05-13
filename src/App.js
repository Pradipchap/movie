import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { useEffect } from "react";

import { getNowPlayingMovies } from "./components/redux/searched";
import { useDispatch, useSelector } from "react-redux";
import { nowSliceActions } from "./components/redux/searched";
import SearchedResults from "./components/searchedResults";
import MoviePage from "./components/moviePage";
import { NoPage } from "./components/noPage";
import { colorActions } from "./components/redux/color";
function App() {
  const dispatch = useDispatch();
const mode=useSelector((state)=>state.color.mode)
  const string = useSelector((state) => state.nowPlaying.searchString);
  const array = useSelector((state) => state.nowPlaying.movies);
  const error = useSelector((state) => state.nowPlaying.error);

  useEffect(() => {
    if (string === null || string === undefined) {
      if (localStorage.getItem("search"))
        dispatch(getNowPlayingMovies(localStorage.getItem("search")));
    } else {
      dispatch(getNowPlayingMovies(string));
    }
  }, [dispatch, string]);

  // useEffect(() => {
  //   console.log("array", array);
  // }, [array]);
  // useEffect(() => {
  //   console.log("errpr", error);
  // }, [error]);
useEffect(() => {
localStorage.getItem('mode')==="dark"&&dispatch(colorActions.toDark())
}, [dispatch])

  
  

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
