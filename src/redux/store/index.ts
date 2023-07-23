import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import movieSlice from "./movieSlice";
import getMovieByIDSlice from "./getMovieByIDSlice";
import favouritesSlice from "./favouritesSlice";

const store = configureStore({
  reducer: {
    inputValue: inputSlice,
    movieList: movieSlice,
    movieID: getMovieByIDSlice,
    favourites: favouritesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
