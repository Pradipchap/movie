import Moviecomponent from "./moviecomponent";
import { useSelector } from "react-redux";

export default function RecentSearhes() {
  const colors = useSelector((state) => state.color.colors); //colors from redxu store
  const error = useSelector((state) => state.nowPlaying.errorForArray); //error while fectching data

  const movies = useSelector((state) => state.nowPlaying.movies); //array of movies fetched

  return (
    <div className="flex flex-col">
      <p
        className={`recent text-2xl font-sans mx-4 mt-[4rem] font-semibold ${
          "text-" + colors.text
        }`}
      >{`Based on your recent search`}</p>

      <Moviecomponent movies={movies} error={error} />
    </div>
  );
}
