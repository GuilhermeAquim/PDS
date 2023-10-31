import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const LoginContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  background: "linear-gradient(#6750A4, rgba(103, 80, 164, 0.5))",
}));

export const LoginContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  width: 500,
  height: 600,
  backgroundColor: "#fff",
  alignItems: "center",
  borderRadius: 8,
}));

export const LoginInputs = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const LoginUsernameInput = styled(TextField)(() => ({
  marginBottom: 16,
}));
