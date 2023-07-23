import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IImdbID {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

type TInitState = {
  favourites: IImdbID[] | [];
};

const initialState: TInitState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<IImdbID>) => {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFromFavourites: (state, action: PayloadAction<IImdbID>) => {
      state.favourites = state.favourites.filter(
        (el) => el.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;

export default favouritesSlice.reducer;
