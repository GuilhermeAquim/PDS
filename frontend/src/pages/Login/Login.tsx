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

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async () => {
    try {
      await UserManager.authUser(username, password);
      navigate("/stock");
    } catch {}
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
