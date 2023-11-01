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

type Props = {
  open: boolean;
  onClose: () => void;
  vehicle: any;
};

export const ApprovalDialog = ({
  open,
  onClose,
  vehicle,
}: Props): JSX.Element => {
  const [minValue, setMinValue] = useState("");

  return (
    <ApprovalDialogContainer open={open} onClose={onClose}>
      <ApprovalDialogContent>
        <ApprovalDialogHeader>
          <Typography variant="h6">Gol 1.8 GTS 8V</Typography>
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
            <Typography>Motor: 1.8 8V</Typography>
            <Typography>Ano: 2000</Typography>
            <Typography>Cor: Vermelho</Typography>
            <Typography>Informações: - </Typography>
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
            <Button variant="contained" style={{ marginRight: 16 }}>
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
