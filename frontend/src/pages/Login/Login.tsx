import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {
  LoginContainer,
  LoginContent,
  LoginInputs,
  LoginUsernameInput,
} from "./Login.styles";
import { useNavigate } from "react-router-dom";
import UserManager from "../../services/user/User.manager";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setLoggedInUser } from "../../redux/usersSlice";
import { openSnackbar } from "../../redux/snackbarSlice";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async () => {
    try {
      const user = await UserManager.authUser(username, password);

      if (!user) return;

      dispatch(setLoggedInUser(user));
      navigate("/stock");
    } catch {
      dispatch(openSnackbar({ message: "Erro ao fazer login", type: "error" }));
    }
  };

  return (
    <LoginContainer>
      <LoginContent>
        <Typography variant="h1">SGNV</Typography>
        <LoginInputs>
          <LoginUsernameInput
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
          />
          <TextField
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
          />
        </LoginInputs>
        <div>
          <Button
            disabled={!username || !password}
            variant="contained"
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </div>
      </LoginContent>
    </LoginContainer>
  );
};
