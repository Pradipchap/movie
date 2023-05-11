import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../logo.png";
import { Person2TwoTone } from "@mui/icons-material";
import useSearch from "./microcomponents/searchFunc";
import { useState } from "react";
export default function Navbar() {
  const [input, setinput] = useState();

  const { status } = useSearch({input});
  return (
    <div className="bg-slate-900 h-16 w-full text-white flex justify-between items-center ">
      <p className="mx-5">Logo</p>
      <ul className="flex content-center items-center my-auto h-full gap-2 mx-5 px-3">
        <li className="text-white px-3">Movie</li>
        <li className="text-white px-3">Tv shows</li>
        <li className="text-white px-3">
          <form onSubmit={(event)=>{event.preventDefault();setinput(event.target[0].value)}} >
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
