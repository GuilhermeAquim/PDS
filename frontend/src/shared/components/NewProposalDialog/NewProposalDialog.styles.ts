import styled from "@emotion/styled";
import { Modal } from "@mui/material";

export const ProposalDialogContainer = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ProposalDialogHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ProposalDialogContent = styled("div")(() => ({
  backgroundColor: "#FFF",
  width: 600,
  padding: 16,
  overflow: "auto",
  borderRadius: 16,
}));

export const ProposalInputContainer = styled("div")(() => ({
  margin: "24px 0",
}));

export const ProposalActionsContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
