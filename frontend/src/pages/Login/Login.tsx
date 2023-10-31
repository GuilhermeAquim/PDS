import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {
  LoginContainer,
  LoginContent,
  LoginInputs,
  LoginUsernameInput,
} from "./Login.styles";
import { useNavigate } from "react-router-dom";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    navigate("/stock");
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
