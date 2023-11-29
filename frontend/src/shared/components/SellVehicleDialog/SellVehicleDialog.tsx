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
import { Vehicle } from "../../types/Vehicle";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setVehicles } from "../../../redux/vehiclesSlice";
import { useNavigate } from "react-router-dom";
import { openSnackbar } from "../../../redux/snackbarSlice";

type Props = {
  vehicle: Vehicle;
  open: boolean;
  onClose: () => void;
};

export const SellVehicleDialog = ({ vehicle, open, onClose }: Props) => {
  const { vehicles } = useAppSelector((state) => state.vehicles);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [telephone, setTelephone] = useState("");
  const [customer, setCustomer] = useState("");
  const [email, setEmail] = useState("");

  const handleSellVehicle = () => {
    const updatedVehicles = vehicles.filter((v) => v.name !== vehicle.name);
    dispatch(
      openSnackbar({ message: "Veículo vendido com sucesso", type: "success" })
    );
    dispatch(setVehicles(updatedVehicles));
    onClose();
    navigate("/stock");
  };

  return (
    <SellVehicleDialogContainer open={open} onClose={onClose}>
      <SellVehicleDialogContent>
        <SellVehicleDialogHeader>
          <Typography>{vehicle.name}</Typography>
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
              id="modal-value"
            />
            <TextField
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              variant="outlined"
              label="Telefone"
              type="number"
              id="modal-phone"
            />
            <TextField
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              variant="outlined"
              label="Cliente"
              id="modal-customer"
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              label="Email"
              id="modal-email"
            />
          </SellVehicleFormContainer>
        </div>
        <SellVehicleActionsContainer>
          <Button
            variant="contained"
            style={{ marginRight: 16 }}
            onClick={handleSellVehicle}
            id="modal-sell-vehicle-btn"
          >
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
