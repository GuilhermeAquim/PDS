import { IconButton, Typography } from "@mui/material";
import {
  ConfirmationDialogActions,
  ConfirmationDialogContainer,
  ConfirmationDialogContent,
  ConfirmationDialogHeader,
  ConfirmationDialogMessage,
} from "./ConfirmationDialog.styles";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  text: string;
  actions: JSX.Element;
};

export const ConfirmationDialog = ({
  open,
  onClose,
  title,
  text,
  actions,
}: Props): JSX.Element => {
  return (
    <ConfirmationDialogContainer open={open} onClose={onClose}>
      <ConfirmationDialogContent>
        <ConfirmationDialogHeader>
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </ConfirmationDialogHeader>
        <ConfirmationDialogMessage>
          <Typography>{text}</Typography>
        </ConfirmationDialogMessage>
        <ConfirmationDialogActions>{actions}</ConfirmationDialogActions>
      </ConfirmationDialogContent>
    </ConfirmationDialogContainer>
  );
};
