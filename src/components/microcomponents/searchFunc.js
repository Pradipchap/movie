import { useDispatch } from "react-redux";
import { nowSliceActions } from "../redux/searched";
import { useNavigate } from "react-router-dom";

const useSearch = ({input,path}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const string = input;
  if (string === "" || string === null || string === undefined) {
    // navigate('/')
  } else {
    dispatch(nowSliceActions.getString(string));
    localStorage.setItem("search", string);
    // path&&navigate(path);
  }
  return true
};

export default useSearch
