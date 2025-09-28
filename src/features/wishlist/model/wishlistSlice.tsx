import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IMovie } from "../../../entities/movie";

const savedMovies = localStorage.getItem("bookmarks");

interface BookmarkState {
  movies: IMovie[];
}

const initialState: BookmarkState = {
  movies: savedMovies ? JSON.parse(savedMovies) : [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<IMovie>) => {
      const exists = state.movies.some((m) => m.id === action.payload.id);
      if (!exists) {
        state.movies.push(action.payload);
        localStorage.setItem("bookmarks", JSON.stringify(state.movies));
      }
    },
    removeBookmark: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter((m) => m.id !== action.payload);
      localStorage.setItem("bookmarks", JSON.stringify(state.movies));
    },
    clearBookmarks: (state) => {
      state.movies = [];
      localStorage.removeItem("bookmarks");
    },
  },
});

export const { addBookmark, removeBookmark, clearBookmarks } =
  bookmarkSlice.actions;
export default bookmarkSlice.reducer;
