import styled from "@emotion/styled";
import { Modal } from "@mui/material";

export const DisapprovalDialogContainer = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const DisapprovalDialogHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const DisapprovalDialogContent = styled("div")(() => ({
  backgroundColor: "#FFF",
  width: 300,
  padding: 16,
  overflow: "auto",
}));

export const DisapprovalDialogMessage = styled("div")(() => ({
  margin: "16px 0",
}));

export const DisapprovalDialogActions = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
