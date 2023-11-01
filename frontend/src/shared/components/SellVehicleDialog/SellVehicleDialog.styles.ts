import styled from "@emotion/styled";
import { Modal } from "@mui/material";

export const SellVehicleDialogContainer = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const SellVehicleDialogHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const SellVehicleDialogContent = styled("div")(() => ({
  backgroundColor: "#FFF",
  width: 500,
  padding: 16,
  overflow: "auto",
}));

export const SellVehicleImageContainer = styled("div")(() => ({
  margin: "24px 0",
}));

export const SellVehicleImage = styled("img")(() => ({
  maxWidth: "100%",
  borderRadius: 16,
}));

export const SellVehicleFormContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: 32,
  rowGap: 24,
}));

export const SellVehicleActionsContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 24,
}));
