import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const UsersPageContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "5fr 7fr",
}));

export const UsersPageNewUserContainer = styled("div")(() => ({
  margin: "0 24px",
}));

export const UsersPageFormContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr",
  rowGap: 24,
  margin: "24px 0",
}));

export const UsersPageFormAction = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const UsersPageUsersContainer = styled("div")(() => ({
  border: "1px solid black",
  borderRadius: 16,
  margin: "0 24px",
}));

export const UsersPageUsersTitle = styled(Typography)(() => ({
  margin: "16px 0",
}));

export const UsersPageUserItem = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "16px 0",
  margin: "0 16px",
  borderTop: "1px solid lightgrey",
}));

export const UsersPageUserInfo = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
