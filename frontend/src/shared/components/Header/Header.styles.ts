import styled from "@emotion/styled";

export const HeaderContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  height: 80,
  background: "linear-gradient(#6750A4, rgba(103, 80, 164, 0.5))",
  marginBottom: 24,
}));

export const HeaderActions = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

export const HeaderAction = styled("div")(() => ({
  margin: "0 16px",
  cursor: "pointer",
}));

export const HeaderLogoContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: 16,
}));
