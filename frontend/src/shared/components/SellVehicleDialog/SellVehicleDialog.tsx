import {
  SellVehicleDialogContainer,
  SellVehicleDialogContent,
  SellVehicleDialogHeader,
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
          <div style={{ margin: "24px 0" }}>
            <img
              src="https://cdn.autopapo.com.br/box/uploads/2022/12/12165820/han-byd-carros-chineses-portal-732x488.jpg"
              alt=""
              style={{ maxWidth: "100%", borderRadius: 16 }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: 32,
              rowGap: 24,
            }}
          >
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
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}
        >
          <Button variant="contained" style={{ marginRight: 16 }}>
            Confirmar
          </Button>
          <Button onClick={onClose} variant="outlined">
            Cancelar
          </Button>
        </div>
      </SellVehicleDialogContent>
    </SellVehicleDialogContainer>
  );
};
