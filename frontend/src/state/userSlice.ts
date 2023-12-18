// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface UserState {
//   id: number | null;
//   username: string | null;
//   isLoading: boolean;
// }

// const initialState: UserState = {
//   id: null,
//   username: null,
//   isLoading: false,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUser: (
//       state,
//       action: PayloadAction<{ id: number; username: string }>
//     ) => {
//       state.id = action.payload.id;
//       state.username = action.payload.username;
//     },
//     clearUser: (state) => {
//       state.id = null;
//       state.username = null;
//     },
//   },
// });

// export default userSlice.reducer;
// export const { setUser, clearUser, startLoading, stopLoading } =
//   userSlice.actions;

// export const selectUser = (state: { user: UserState }) => state.user;
