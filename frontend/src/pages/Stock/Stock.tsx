import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { VehicleCard } from "../../shared/components/VehicleCard/VehicleCard";
import { StockContainer, StockListContainer } from "./Stock.styles";
import { Vehicle } from "../../shared/types/Vehicle";
import { NewProposalDialog } from "../../shared/components/NewProposalDialog/NewProposalDialog";
import { useAppSelector } from "../../hooks/reduxHooks";

export const Stock = (): JSX.Element => {
  const { vehicles } = useAppSelector((state) => state.vehicles);

  const [filter, setFilter] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setFilteredVehicles(
      vehicles.filter((vehicle) =>
        vehicle.name?.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, vehicles]);

  return (
    <StockContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h3">Veículos Disponíveis</Typography>
          <TextField
            variant="outlined"
            label="Filtro"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={() => setIsDialogOpen(true)} variant="contained">
            Nova Proposta
          </Button>
        </div>
      </div>
      <StockListContainer>
        {filteredVehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle.name} />
        ))}
      </StockListContainer>
      <NewProposalDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </StockContainer>
  );
};
