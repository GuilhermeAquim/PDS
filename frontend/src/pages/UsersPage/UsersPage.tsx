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
import { useAppDispatch } from "../../hooks/reduxHooks";
import { openSnackbar } from "../../redux/snackbarSlice";

export const UsersPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [users, setUsers] = useState<User[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      setUsers([
        { id_: 1, name: "Pedro" } as User,
        { id_: 2, name: "Ana" } as User,
      ]);
    };

    getUsers();
  }, []);

  const handleAddUser = () => {
    const newUser: User = {
      name,
      login: username,
      admin: false,
      password,
      id_: 0,
    };

    setUsers([...users, newUser]);
    setName("");
    setUsername("");
    setPassword("");

    dispatch(
      openSnackbar({ message: "Usuário criado com sucesso", type: "success" })
    );
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedUser(undefined);
  };

  const handleRemoveUser = () => {
    const updatedUsers = users.filter(
      (user) => user.name !== selectedUser?.name
    );

    dispatch(
      openSnackbar({ message: "Usuário removido com sucesso", type: "success" })
    );
    setUsers(updatedUsers);
    closeDialog();
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
            onClick={handleAddUser}
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
            <UsersPageUserItem key={user.id_}>
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
            <Button
              variant="outlined"
              style={{ marginRight: 16 }}
              onClick={handleRemoveUser}
            >
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
