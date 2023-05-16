import { Divider } from "@mui/material";
import Moviecomponent from "./moviecomponent";
import { useSelector } from "react-redux";

export default function RecentSearhes() {
  const colors = useSelector((state) => state.color.colors);
  const error = useSelector((state) => state.nowPlaying.error);

  const movies = useSelector((state) => state.nowPlaying.movies);

  return (
    <div className="flex flex-col">
      {/* <div className=" mt-[4rem] mb-[2rem] ">
        <Divider variant="middle"  textAlign="left"> */}
      <p
        className={`recent text-2xl font-sans mx-4 mt-[4rem] font-semibold ${
          "text-" + colors.text
        }`}
      >{`Based on your recent search`}</p>
      {/* </Divider>
        </div> */}

      <Moviecomponent movies={movies} error={error} />
    </div>
  );
}
