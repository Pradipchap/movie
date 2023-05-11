import { configureStore } from "@reduxjs/toolkit";
import nowSlice from "./searched";
export const store=configureStore({
    reducer:{
        nowPlaying:nowSlice.reducer


    }
})