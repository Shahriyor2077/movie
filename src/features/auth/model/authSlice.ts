import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IAuth {
  credential: string | null;
  user: any;
}

const user = localStorage.getItem("auth-user");

const initialState: IAuth = {
  credential: null,
  user: user ? JSON.parse(user) : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      localStorage.setItem("auth-user", JSON.stringify(state.user));
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
