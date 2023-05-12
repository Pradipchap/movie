import { configureStore } from "@reduxjs/toolkit";
import nowSlice from "./searched";
import colorSlice from "./color";
export const store=configureStore({
    reducer:{
        nowPlaying:nowSlice.reducer,
        color:colorSlice.reducer


    }
})