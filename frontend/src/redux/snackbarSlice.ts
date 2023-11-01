import { AlertColor } from "@mui/material";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SnackbarState {
  open: boolean;
  message: string;
  type: AlertColor;
}

const initialState: SnackbarState = {
  open: false,
  message: "",
  type: "info",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (
      state,
      action: PayloadAction<{ message: string; type: AlertColor }>
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.open = true;
    },
    closeSnackbar: (state) => {
      state.open = false;
      state.message = "";
    },
  },
});

export const { closeSnackbar, openSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
