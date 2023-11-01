import {
  SellVehicleActionsContainer,
  SellVehicleDialogContainer,
  SellVehicleDialogContent,
  SellVehicleDialogHeader,
  SellVehicleFormContainer,
  SellVehicleImage,
  SellVehicleImageContainer,
} from "./SellVehicleDialog.styles";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  vehicle: any;
  open: boolean;
  onClose: () => void;
};

export const SellVehicleDialog = ({ vehicle, open, onClose }: Props) => {
  const [value, setValue] = useState("");
  const [telephone, setTelephone] = useState("");
  const [customer, setCustomer] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SellVehicleDialogContainer open={open} onClose={onClose}>
      <SellVehicleDialogContent>
        <SellVehicleDialogHeader>
          <Typography>Gol 1.8 GTS 8V</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </SellVehicleDialogHeader>
        <div>
          <SellVehicleImageContainer>
            <SellVehicleImage
              src="https://cdn.autopapo.com.br/box/uploads/2022/12/12165820/han-byd-carros-chineses-portal-732x488.jpg"
              alt=""
            />
          </SellVehicleImageContainer>
          <SellVehicleFormContainer>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="outlined"
              label="Valor"
              type="number"
            />
            <TextField
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              variant="outlined"
              label="Telefone"
              type="number"
            />
            <TextField
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              variant="outlined"
              label="Cliente"
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              label="Email"
            />
          </SellVehicleFormContainer>
        </div>
        <SellVehicleActionsContainer>
          <Button variant="contained" style={{ marginRight: 16 }}>
            Confirmar
          </Button>
          <Button onClick={onClose} variant="outlined">
            Cancelar
          </Button>
        </SellVehicleActionsContainer>
      </SellVehicleDialogContent>
    </SellVehicleDialogContainer>
  );
};
