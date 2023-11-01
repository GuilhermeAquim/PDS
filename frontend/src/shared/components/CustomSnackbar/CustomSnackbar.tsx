import { Alert, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { closeSnackbar } from "../../../redux/snackbarSlice";

export const CustomSnackbar = () => {
  const { open, message, type } = useAppSelector((state) => state.snackbar);
  const dispatch = useAppDispatch();

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => dispatch(closeSnackbar())}
    >
      <Alert onClose={() => dispatch(closeSnackbar())} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};
