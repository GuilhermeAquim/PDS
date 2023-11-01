import { Button, IconButton, TextField, Typography } from "@mui/material";
import {
  ProposalActionsContainer,
  ProposalDialogContainer,
  ProposalDialogContent,
  ProposalDialogHeader,
  ProposalInputContainer,
} from "./NewProposalDialog.styles";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { Vehicle } from "../../types/Vehicle";
import { addProposal } from "../../../redux/vehiclesSlice";
import { openSnackbar } from "../../../redux/snackbarSlice";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const NewProposalDialog = ({ open, onClose }: Props): JSX.Element => {
  const { loggedInUser } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const [minValue, setMinValue] = useState("");

  const [model, setModel] = useState("");
  const [company, setCompany] = useState("");
  const [engine, setEngine] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");

  const handleConfirm = () => {
    const newProposal: Vehicle = {
      color,
      manufacturer: company,
      name: `${model} ${engine}`,
      proposalUserId: loggedInUser?.id_,
      year: +year,
      proposedDate: new Date(),
      purchasePrice: +minValue,
    };

    dispatch(
      openSnackbar({ message: "Proposta criada com sucesso", type: "success" })
    );
    dispatch(addProposal(newProposal));
    onClose();
  };

  return (
    <ProposalDialogContainer open={open} onClose={onClose}>
      <ProposalDialogContent>
        <ProposalDialogHeader>
          <Typography>Nova Proposta</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </ProposalDialogHeader>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: 32,
              rowGap: 24,
            }}
          >
            <TextField
              label="Modelo"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <TextField
              label="Fabricante"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <TextField
              label="Motor"
              value={engine}
              onChange={(e) => setEngine(e.target.value)}
            />
            <TextField
              label="ano"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <TextField
              label="cor"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <ProposalInputContainer>
            <TextField
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              variant="outlined"
              label="Valor Mínimo"
              type="number"
            />
          </ProposalInputContainer>
          <ProposalActionsContainer>
            <Button
              variant="contained"
              style={{ marginRight: 16 }}
              onClick={handleConfirm}
            >
              Criar
            </Button>
            <Button variant="outlined" onClick={onClose}>
              Cancelar
            </Button>
          </ProposalActionsContainer>
        </div>
      </ProposalDialogContent>
    </ProposalDialogContainer>
  );
};
