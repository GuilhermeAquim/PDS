import { Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ArrowBackIcon,
  VehiclePageActionContainer,
  VehiclePageContent,
  VehiclePageHeader,
} from "./VehiclePage.styles";
import { SellVehicleDialog } from "../../shared/components/SellVehicleDialog/SellVehicleDialog";
import { useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";

export const VehiclePage = (): JSX.Element => {
  const navigate = useNavigate();
  const { selectedVehicle } = useAppSelector((state) => state.vehicles);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <VehiclePageHeader>
        <IconButton size="large" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h2">{selectedVehicle?.name}</Typography>
      </VehiclePageHeader>
      <VehiclePageContent>
        <div>
          <img
            src="https://cdn.autopapo.com.br/box/uploads/2022/12/12165820/han-byd-carros-chineses-portal-732x488.jpg"
            alt=""
          />
        </div>
        <div>
          <Typography variant="h6">Ano: {selectedVehicle?.year}</Typography>
          <Typography variant="h6">Cor: {selectedVehicle?.color}</Typography>
          <Typography variant="h6">
            Preço Compra: {selectedVehicle?.purchasePrice}
          </Typography>
          <VehiclePageActionContainer>
            <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
              Confirmar Venda
            </Button>
          </VehiclePageActionContainer>
        </div>
      </VehiclePageContent>
      {selectedVehicle && (
        <SellVehicleDialog
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          vehicle={selectedVehicle}
        />
      )}
    </div>
  );
};
