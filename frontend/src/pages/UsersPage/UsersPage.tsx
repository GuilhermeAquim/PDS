import {
  Avatar,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { User } from "../../shared/types/User";
import {
  UsersPageContainer,
  UsersPageFormAction,
  UsersPageFormContainer,
  UsersPageNewUserContainer,
  UsersPageUserInfo,
  UsersPageUserItem,
  UsersPageUsersContainer,
  UsersPageUsersTitle,
} from "./UsersPage.styles";
import { ConfirmationDialog } from "../../shared/components/ConfirmationDialog/ConfirmationDialog";

export const UsersPage = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      setUsers([
        { id: 1, name: "Pedro" } as User,
        { id: 2, name: "Ana" } as User,
      ]);
    };

    getUsers();
  }, []);

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedUser(undefined);
  };

  return (
    <UsersPageContainer>
      <UsersPageNewUserContainer>
        <Typography variant="h4">Cadastrar Novo Usuário</Typography>
        <UsersPageFormContainer>
          <TextField
            variant="outlined"
            label="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </UsersPageFormContainer>
        <UsersPageFormAction>
          <Button
            variant="contained"
            disabled={!name || !username || !password}
          >
            Salvar
          </Button>
        </UsersPageFormAction>
      </UsersPageNewUserContainer>
      <UsersPageUsersContainer>
        <UsersPageUsersTitle variant="h4" align="center">
          Usuários
        </UsersPageUsersTitle>
        <div>
          {users.map((user) => (
            <UsersPageUserItem key={user.id}>
              <UsersPageUserInfo>
                <Avatar>{user.name[0]}</Avatar>
                <Typography style={{ marginLeft: 16 }}>{user.name}</Typography>
              </UsersPageUserInfo>
              <IconButton
                onClick={() => {
                  setSelectedUser(user);
                  setIsDialogOpen(true);
                }}
              >
                <CloseIcon />
              </IconButton>
            </UsersPageUserItem>
          ))}
        </div>
      </UsersPageUsersContainer>
      <ConfirmationDialog
        open={isDialogOpen}
        onClose={closeDialog}
        title="Deletar Usuário"
        text={`Tem certeza que deseja remover o usuário ${selectedUser?.name}? A ação não pode ser desfeita.`}
        actions={
          <>
            <Button variant="outlined" style={{ marginRight: 16 }}>
              Remover
            </Button>
            <Button variant="contained" onClick={closeDialog}>
              Cancelar
            </Button>
          </>
        }
      />
    </UsersPageContainer>
  );
};
