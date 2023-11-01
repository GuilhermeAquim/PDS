import styled from "@emotion/styled";
import ArrowBack from "@mui/icons-material/ArrowBack";

export const VehiclePageHeader = styled("div")(() => ({
  display: "flex",
}));

export const VehiclePageContent = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: 32,
}));

export const ArrowBackIcon = styled(ArrowBack)(() => ({
  height: 40,
  width: 40,
  color: "#000",
}));

export const VehiclePageActionContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));
