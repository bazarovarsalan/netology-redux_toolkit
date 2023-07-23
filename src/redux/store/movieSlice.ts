import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type TMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type movieSliceState = {
  list: TMovie[] | [];
  status: string | null;
  error: string | null;
};

const initialState: movieSliceState = {
  list: [],
  status: null,
  error: null,
};

export const fetchMovies = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("movieList/fetchMoviesList", async function (value, { rejectWithValue }) {
  const apikey = "9713c5e7";
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apikey}&s=${value}`
  );
  if (!response.ok) {
    return rejectWithValue("Server error");
  }
  const data = await response.json();
  return data;
});

const movieSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<TMovie[]>) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, _action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action: any) => {
        state.status = "resolved";
        state.list = action.payload["Search"];
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = null;
      });
  },
});

export const { addMovies } = movieSlice.actions;

export default movieSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
