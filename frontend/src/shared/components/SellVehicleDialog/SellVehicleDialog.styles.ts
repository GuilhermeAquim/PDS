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
