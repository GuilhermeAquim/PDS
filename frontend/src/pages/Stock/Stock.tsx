import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { VehicleCard } from "../../shared/components/VehicleCard/VehicleCard";
import { StockContainer, StockListContainer } from "./Stock.styles";

export const Stock = (): JSX.Element => {
  const [filter, setFilter] = useState("");
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<any[]>([]);

  useEffect(() => {
    const getVehicles = async () => {
      setVehicles(["1", "2", "3", "4", "5", "6"]);
    };

    getVehicles();
  }, []);

  useEffect(() => {
    setFilteredVehicles(
      vehicles.filter((vehicle) =>
        vehicle.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, vehicles]);

  return (
    <StockContainer>
      <Typography variant="h3">Veículos Disponíveis</Typography>
      <TextField
        variant="outlined"
        label="Filtro"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <StockListContainer>
        {filteredVehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} />
        ))}
      </StockListContainer>
    </StockContainer>
  );
};
