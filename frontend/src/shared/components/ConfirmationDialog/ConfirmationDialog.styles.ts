import styled from "@emotion/styled";
import { Modal } from "@mui/material";

export const ConfirmationDialogContainer = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ConfirmationDialogHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ConfirmationDialogContent = styled("div")(() => ({
  backgroundColor: "#FFF",
  width: 300,
  padding: 16,
  overflow: "auto",
  borderRadius: 16,
}));

export const ConfirmationDialogMessage = styled("div")(() => ({
  margin: "16px 0",
}));

export const ConfirmationDialogActions = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
