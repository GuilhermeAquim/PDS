import { Button, IconButton, TextField, Typography } from "@mui/material";
import {
  ApprovalActionsContainer,
  ApprovalDialogContainer,
  ApprovalDialogContent,
  ApprovalDialogHeader,
  ApprovalImage,
  ApprovalImageContainer,
  ApprovalInputContainer,
} from "./ApprovalDialog.styles";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Vehicle } from "../../types/Vehicle";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { addVehicle, setProposals } from "../../../redux/vehiclesSlice";
import { openSnackbar } from "../../../redux/snackbarSlice";

type Props = {
  open: boolean;
  onClose: () => void;
  vehicle: Vehicle;
};

export const ApprovalDialog = ({
  open,
  onClose,
  vehicle,
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const { proposals } = useAppSelector((state) => state.vehicles);

  const [minValue, setMinValue] = useState("");

  const handleApprove = () => {
    const newVehicle: Vehicle = {
      ...vehicle,
      salePrice: +minValue,
    };

    const updatedProposals = proposals.filter((p) => p.name !== vehicle.name);

    dispatch(
      openSnackbar({
        message: "Proposta aprovada com sucesso",
        type: "success",
      })
    );
    dispatch(addVehicle(newVehicle));
    dispatch(setProposals(updatedProposals));
    onClose();
  };

  return (
    <ApprovalDialogContainer open={open} onClose={onClose}>
      <ApprovalDialogContent>
        <ApprovalDialogHeader>
          <Typography variant="h6">{vehicle.name}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </ApprovalDialogHeader>
        <div>
          <ApprovalImageContainer>
            <ApprovalImage
              src="https://cdn.autopapo.com.br/box/uploads/2022/12/12165820/han-byd-carros-chineses-portal-732x488.jpg"
              alt=""
            />
          </ApprovalImageContainer>
          <div>
            <Typography>Ano: {vehicle.year}</Typography>
            <Typography>Cor: {vehicle.color}</Typography>
            <Typography>Preço: {vehicle.purchasePrice}</Typography>
          </div>
          <ApprovalInputContainer>
            <TextField
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              variant="outlined"
              label="Valor Mínimo"
              type="number"
            />
          </ApprovalInputContainer>
          <ApprovalActionsContainer>
            <Button
              variant="contained"
              style={{ marginRight: 16 }}
              onClick={handleApprove}
              disabled={!minValue}
            >
              Aprovar
            </Button>
            <Button variant="outlined" onClick={onClose}>
              Cancelar
            </Button>
          </ApprovalActionsContainer>
        </div>
      </ApprovalDialogContent>
    </ApprovalDialogContainer>
  );
};
