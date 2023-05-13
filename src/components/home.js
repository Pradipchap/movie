import React from "react";

import RecentSearhes from "./recentSearhes";
import { Landingpage } from "./landingpage";

export default function Home() {
  // let movies = useSelector((state) => state.nowPlaying.movies);
  // https://wallpapercave.com/wp/wp10615929.jpg
  return (
    <div className="home flex flex-col">
      <Landingpage />
      <RecentSearhes />
    </div>
  );
}
