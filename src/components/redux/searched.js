import { createSlice } from "@reduxjs/toolkit";

const nowSlice = createSlice({
  name: "nowSlice",
  initialState: {
    movies: [],
    error: null,
    searchString: null,
    loading: true,
    pageNo: 1,
    totalResults: 0,
    singleMovie: {},
    forMovieComponentWhenSearchedWithID: null,
  },
  reducers: {
    setloading(state, action) {
      state.loading = action.payload;
    },
    getNowMovies(state, action) {
      state.movies = action.payload.movies;
      state.totalResults = action.payload.totalResults;
    },
    getError(state, action) {
      state.error = action.payload;
    },
    getString(state, action) {
      state.searchString = action.payload;
    },
    getPageNo(state, action) {
      state.pageNo = action.payload;
    },
    setSingleMovie(state, action) {
      state.singleMovie = action.payload;
    },
    getWhenID(state, action) {
      state.forMovieComponentWhenSearchedWithID = action.payload;
    },
  },
});
export const getNowPlayingMovies = (string, pageNo) => {
  return async (dispatch) => {
    const search = async () => {
      const fetchedData = await fetch(
        `http://www.omdbapi.com/?s=${string}&page=${pageNo}&apikey=46cb632b`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          console.log(response.totalResults);
          response.Response === "False"
            ? dispatch(nowSliceActions.getError(response.Error))
            : dispatch(
                nowSliceActions.getNowMovies({
                  movies: response.Search,
                  totalResults: response.totalResults,
                })
              ) && dispatch(nowSliceActions.getError(null));
          dispatch(nowSliceActions.setloading(false));
        });
    };

    search();
  };
};
export const getNowSingle = ({ id, title }) => {
  return async (dispatch) => {
    const search = async () => {
      const fetchedData = await fetch(
        id
          ? `http://www.omdbapi.com/?i=${id}&apikey=46cb632b`
          : `http://www.omdbapi.com/?t=${title}&apikey=46cb632b`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log("single", response);
          response.Response === "False"
            ? dispatch(nowSliceActions.getError(response.Error))
            : dispatch(nowSliceActions.setSingleMovie(response));
          dispatch(nowSliceActions.setloading(false));
        });
    };

    search();
  };
};

export default nowSlice;
export const nowSliceActions = nowSlice.actions;
