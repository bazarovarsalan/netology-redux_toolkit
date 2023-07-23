import { PayloadAction, createSlice, AnyAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
  movieData: IImdbID | null;
  status: string | null;
  error: string | null;
};

const initialState: TInitState = {
  movieData: null,
  status: null,
  error: null,
};

export const fetchID = createAsyncThunk<
  IImdbID,
  string,
  { rejectValue: string }
>("movieID/fetchMovieID", async function (id, { rejectWithValue }) {
  const apikey = "9713c5e7";
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apikey}&i=${id}`
  );
  if (!response.ok) {
    return rejectWithValue("Server error");
  }
  const data = await response.json();
  return data as IImdbID;
});

const getMovieByIDSlice = createSlice({
  name: "movieID",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<IImdbID>) => {
      state.movieData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchID.pending, (state, _action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchID.fulfilled, (state, action) => {
        state.status = "resolved";
        state.movieData = action.payload;
      })
      .addCase(fetchID.rejected, (state, _action) => {
        state.status = "resolved";
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = null;
      });
  },
});

export const { addMovies } = getMovieByIDSlice.actions;

export default getMovieByIDSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
