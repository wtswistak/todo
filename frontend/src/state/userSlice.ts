import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string | null;
}

const initialState: UserState = {
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    clearUser: (state) => {
      state.username = null;
    },
  },
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user.username;
