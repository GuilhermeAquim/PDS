import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../shared/types/User";

interface UsersState {
  loggedInUser?: User;
}

const initialState: UsersState = {
  loggedInUser: undefined,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<User>) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { setLoggedInUser } = usersSlice.actions;

export default usersSlice.reducer;
