import { Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ArrowBackIcon,
  VehiclePageContent,
  VehiclePageHeader,
} from "./VehiclePage.styles";
import { SellVehicleDialog } from "../../shared/components/SellVehicleDialog/SellVehicleDialog";
import { useState } from "react";

export const VehiclePage = (): JSX.Element => {
  const navigate = useNavigate();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <VehiclePageHeader>
        <IconButton size="large" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h2">Gol 1.8 GTS 8V</Typography>
      </VehiclePageHeader>
      <VehiclePageContent>
        <div>
          <img
            src="https://cdn.autopapo.com.br/box/uploads/2022/12/12165820/han-byd-carros-chineses-portal-732x488.jpg"
            alt=""
          />
        </div>
        <div>
          <Typography variant="h6">Motor: 1.8 8V</Typography>
          <Typography variant="h6">Ano: 2000</Typography>
          <Typography variant="h6">Cor: Vermelho</Typography>
          <Typography variant="h6">Informações: - </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
              Confirmar Venda
            </Button>
          </div>
        </div>
      </VehiclePageContent>
      <SellVehicleDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        vehicle={{}}
      />
    </div>
  );
};
