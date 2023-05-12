import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../logo.png";
import { DarkMode, LightMode, Person2TwoTone } from "@mui/icons-material";
import useSearch from "./microcomponents/searchFunc";
import { useState } from "react";
import { nowSliceActions } from "./redux/searched";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { colorActions } from "./redux/color";
export default function Navbar() {
  const colors=useSelector(state=>state.color.colors)
  const toggleMode = () => {
    if (mode === "dark") dispatch(colorActions.toLight());
    else dispatch(colorActions.toDark());
  };
  const mode = useSelector((state) => state.color.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { status } = useSearch({ input });
  const sendSearch = (searchName) => {
    const string = searchName;
    if (string === "" || string === null || string === undefined) {
      // navigate('/')
    } else {
      dispatch(nowSliceActions.getString(string));
      localStorage.setItem("search", string);
      navigate("/search");
    }
  };
  return (
    <div className={`[backgroundColor:${colors.secondary}] h-16 w-full text-white flex justify-between items-center `}>
      <Link className="mx-5 " to="/">
        Logo
      </Link>
      <ul className="flex content-center items-center my-auto h-full gap-2 mx-5 px-3">
        <li>
          <div className="mode" onClick={toggleMode}>
            {mode !== "light" ? <LightMode /> : <DarkMode />}
          </div>
        </li>
        <li className="text-white px-3">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendSearch(event.target[0].value);
            }}
          >
            {" "}
            <input
              className="h-[80%] text-white bg-gray-700 py-1 text-xl rounded-lg px-2"
              type="search"
              placeholder=""
              name="search"
              id="search"
              // onChange={(e)=>{e.preventDefault();setinput(e.target.value)}}
            />
          </form>
        </li>
        <li className="text-white">
          <Person2TwoTone />
        </li>
      </ul>
    </div>
  );
}
