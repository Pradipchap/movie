import React from "react";

import RecentSearhes from "./recentSearhes";
import { Landingpage } from "./landingpage";

export default function Home() {
  return (
    <div className="home flex flex-col">
      <Landingpage />{/*  landing page*/ }
      <RecentSearhes />{/* */ }
    </div>
  );
}
