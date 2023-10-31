import { Typography } from "@mui/material";
import { HeaderAction, HeaderActions, HeaderContainer } from "./Header.styles";

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <div></div>
      <HeaderActions>
        <HeaderAction>
          <Typography>Estoque</Typography>
        </HeaderAction>
        <HeaderAction>
          <Typography>Propostas</Typography>
        </HeaderAction>
        <HeaderAction>
          <Typography>Usuários</Typography>
        </HeaderAction>
        <HeaderAction>
          <Typography>Relatórios</Typography>
        </HeaderAction>
      </HeaderActions>
    </HeaderContainer>
  );
};
