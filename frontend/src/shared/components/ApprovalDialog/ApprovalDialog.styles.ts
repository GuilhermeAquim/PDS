import styled from "@emotion/styled";
import { Modal } from "@mui/material";

export const ApprovalDialogContainer = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ApprovalDialogHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ApprovalDialogContent = styled("div")(() => ({
  backgroundColor: "#FFF",
  width: 600,
  padding: 16,
  overflow: "auto",
  borderRadius: 16,
}));

export const ApprovalImageContainer = styled("div")(() => ({
  margin: "24px 0",
}));

export const ApprovalImage = styled("img")(() => ({
  maxWidth: "100%",
  borderRadius: 16,
}));

export const ApprovalInputContainer = styled("div")(() => ({
  margin: "24px 0",
}));

export const ApprovalActionsContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
