import React from "react";
import { DarkMode, LightMode, Person2TwoTone } from "@mui/icons-material";
import { nowSliceActions } from "./redux/searched";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { colorActions } from "./redux/color";
import logo from "../logo.png";

export default function Navbar() {
  const colors = useSelector((state) => state.color.colors); //colors from redux store

  // function that toggle bwtween modes
  const toggleMode = () => {
    if (mode === "dark") {
      localStorage.setItem("mode", "light");
      dispatch(colorActions.toLight());
    } else {
      localStorage.setItem("mode", "dark");
      dispatch(colorActions.toDark());
    }
  };

  const mode = useSelector((state) => state.color.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //function that takes user INPUT and dispatches as a search string
  const sendSearch = (searchName) => {
    const string = searchName;
    if (string === "" || string === null || string === undefined||string.trim().length===0) {
      // navigate('/')
    } else {
      dispatch(nowSliceActions.getString(string));
      localStorage.setItem("search", string);
      //after dispatching ...navigate to searched page
      navigate("/search");
    }
  };
  return (
    <div
      style={{ backgroundColor: colors.primary }}
      className={` h-16 w-full text-white flex justify-between items-center relative z-10 `}
    >
      <a className="mx-1  w-[15rem] " href="/">
        <img src={logo} alt="logo" className="w-full h-full" />
      </a>
      <ul className="flex content-center items-center my-auto h-full gap-2 mx-5 px-3">
        <li>
          <div className="mode" onClick={toggleMode}>
            {mode !== "light" ? <LightMode /> : <DarkMode />}
          </div>
        </li>
        <li className="text-white px-3">

          
          {//to show search bar on navbar only inside searched page
          window.location.pathname !== "/" && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendSearch(event.target[0].value);
              }}
            >
              {" "}
              <input
                className="h-[80%] text-white bg-gray-700 py-1 text-xl rounded-lg px-2 w-[9rem] max-w-[20rem]"
                type="search"
                placeholder="search"
                name="search"
                id="search"

              />
            </form>
          )}
        </li>
        <li className="text-white">
          <Person2TwoTone />
        </li>
      </ul>
    </div>
  );
}
// window. location. href
