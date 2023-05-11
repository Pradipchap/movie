import { createSlice } from "@reduxjs/toolkit";

const nowSlice = createSlice({
  name: "nowSlice",
  initialState: {
    movies: [],
    error: null,
    searchString: null,
  },
  reducers: {
    getNowMovies(state, action) {
      state.movies = action.payload;
    },
    getError(state, action) {
      state.error = action.payload;
    },
    getString(state, action) {
      state.searchString = action.payload;
    },
  },
});

export const getNowPlayingMovies = (string) => {
  return async (dispatch) => {
    const search = async () => {
      const fetchedData = await fetch(
        `http://www.omdbapi.com/?s=${string}&apikey=46cb632b`
      )
        .then((response) => response.json())
        .then((response) =>
          response.Response === "False"
            ? dispatch(nowSliceActions.getError(response.Error))
            : dispatch(nowSliceActions.getNowMovies(response.Search))
        );

      // const parsedData = await fetchedData.json();
      //  if(await parsedData.Response===true){
      //     await dispatch(nowSliceActions.getNowMovies(parsedData.Search))

      //   }
      //   else{
      //     await dispatch(nowSliceActions.getError(parsedData.Error));

      //   }
      // (await parsedData.Response) === true
      //   ?  await dispatch(nowSliceActions.getNowMovies(parsedData.Search))
      //   : await dispatch(nowSliceActions.getError(parsedData.Error));
      //   await console.log("parseddata",parsedData)
    };

    search();
  };
};

export default nowSlice;
export const nowSliceActions = nowSlice.actions;
