import styled from "@emotion/styled";

export const StockContainer = styled("div")(() => ({
  margin: "0 24px",
}));

export const StockListContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  columnGap: 32,
}));
