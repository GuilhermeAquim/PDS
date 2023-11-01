import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import vehiclesSlice from "./vehiclesSlice";
import snackbarSlice from "./snackbarSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    vehicles: vehiclesSlice,
    snackbar: snackbarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
