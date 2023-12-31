import { Typography } from "@mui/material";
import {
  HeaderAction,
  HeaderActions,
  HeaderContainer,
  HeaderLogoContainer,
} from "./Header.styles";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";

export const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const { loggedInUser } = useAppSelector((state) => state.users);

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <Typography variant="h4">SGNV</Typography>
      </HeaderLogoContainer>
      <HeaderActions>
        <HeaderAction onClick={() => navigate("/stock")} id="navigate-stock">
          <Typography>Estoque</Typography>
        </HeaderAction>
        {loggedInUser?.admin && (
          <>
            <HeaderAction
              onClick={() => navigate("/proposes")}
              id="navigate-proposes"
            >
              <Typography>Propostas</Typography>
            </HeaderAction>
            <HeaderAction
              onClick={() => navigate("/users")}
              id="navigate-users"
            >
              <Typography>Usuários</Typography>
            </HeaderAction>
          </>
        )}
        <HeaderAction>
          <Typography>Relatórios</Typography>
        </HeaderAction>
      </HeaderActions>
    </HeaderContainer>
  );
};
