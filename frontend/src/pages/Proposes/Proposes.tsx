import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { VehicleCard } from "../../shared/components/VehicleCard/VehicleCard";
import { ProposesContainer, ProposesListContainer } from "./Proposes.styles";
import { ApprovalDialog } from "../../shared/components/ApprovalDialog/ApprovalDialog";
import { DisapprovalDialog } from "../../shared/components/DispprovalDialog/DisapprovalDialog";

export const Proposes = (): JSX.Element => {
  const [filter, setFilter] = useState("");
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<any[]>([]);

  const [approvalDialogOpen, setApprovalDialogOpen] = useState(false);
  const [disapprovalDialogOpen, setDisapprovalDialogOpen] = useState(false);

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
    <ProposesContainer>
      <Typography variant="h3">Propostas</Typography>
      <TextField
        variant="outlined"
        label="Filtro"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ProposesListContainer>
        {filteredVehicles.map((vehicle) => (
          <VehicleCard
            vehicle={vehicle}
            actions={
              <>
                <Button
                  variant="outlined"
                  onClick={() => setDisapprovalDialogOpen(true)}
                >
                  Reprovar
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setApprovalDialogOpen(true)}
                >
                  Aprovar
                </Button>
              </>
            }
            isPropose
          />
        ))}
      </ProposesListContainer>
      <ApprovalDialog
        open={approvalDialogOpen}
        onClose={() => setApprovalDialogOpen(false)}
        vehicle={{}}
      />
      <DisapprovalDialog
        open={disapprovalDialogOpen}
        onClose={() => setDisapprovalDialogOpen(false)}
      />
    </ProposesContainer>
  );
};
