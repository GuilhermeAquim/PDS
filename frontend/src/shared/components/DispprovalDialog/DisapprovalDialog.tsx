import { Button, IconButton, Typography } from "@mui/material";
import {
  DisapprovalDialogActions,
  DisapprovalDialogContainer,
  DisapprovalDialogContent,
  DisapprovalDialogHeader,
  DisapprovalDialogMessage,
} from "./DisapprovalDialog.styles";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const DisapprovalDialog = ({ open, onClose }: Props): JSX.Element => {
  return (
    <DisapprovalDialogContainer open={open} onClose={onClose}>
      <DisapprovalDialogContent>
        <DisapprovalDialogHeader>
          <Typography variant="h5">Reprovar Proposta</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DisapprovalDialogHeader>
        <DisapprovalDialogMessage>
          <Typography>
            Tem certeza que deseja reprovar a proposta do veículo X? A ação não
            pode ser desfeita.
          </Typography>
        </DisapprovalDialogMessage>
        <DisapprovalDialogActions>
          <Button variant="outlined" style={{ marginRight: 16 }}>
            Reprovar
          </Button>
          <Button variant="contained" onClick={onClose}>
            Cancelar
          </Button>
        </DisapprovalDialogActions>
      </DisapprovalDialogContent>
    </DisapprovalDialogContainer>
  );
};
