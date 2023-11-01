import styled from "@emotion/styled";

export const ProposesContainer = styled("div")(() => ({
  margin: "0 24px",
}));

export const ProposesListContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  columnGap: 32,
}));
