import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { VehicleCard } from "../../shared/components/VehicleCard/VehicleCard";
import { ProposesContainer, ProposesListContainer } from "./Proposes.styles";
import { ApprovalDialog } from "../../shared/components/ApprovalDialog/ApprovalDialog";
import { ConfirmationDialog } from "../../shared/components/ConfirmationDialog/ConfirmationDialog";
import { Vehicle } from "../../shared/types/Vehicle";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setProposals } from "../../redux/vehiclesSlice";
import { openSnackbar } from "../../redux/snackbarSlice";

export const Proposes = (): JSX.Element => {
  const { proposals } = useAppSelector((state) => state.vehicles);
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);

  const [approvalDialogOpen, setApprovalDialogOpen] = useState(false);
  const [disapprovalDialogOpen, setDisapprovalDialogOpen] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<Vehicle | undefined>(
    undefined
  );

  useEffect(() => {
    setFilteredVehicles(
      proposals.filter((vehicle) =>
        vehicle.name?.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, proposals]);

  const handleRemoveProposal = () => {
    const updatedProposals = proposals.filter(
      (p) => p.name !== selectedProposal?.name
    );
    dispatch(setProposals(updatedProposals));
    dispatch(
      openSnackbar({
        message: "Proposta removida com sucesso",
        type: "success",
      })
    );
    setDisapprovalDialogOpen(false);
  };

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
            key={vehicle.name}
            vehicle={vehicle}
            actions={
              <>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setSelectedProposal(vehicle);
                    setDisapprovalDialogOpen(true);
                  }}
                  id="reject-btn"
                >
                  Reprovar
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setSelectedProposal(vehicle);
                    setApprovalDialogOpen(true);
                  }}
                  id="approve-btn"
                >
                  Aprovar
                </Button>
              </>
            }
            isPropose
          />
        ))}
      </ProposesListContainer>
      {selectedProposal && (
        <ApprovalDialog
          open={approvalDialogOpen}
          onClose={() => setApprovalDialogOpen(false)}
          vehicle={selectedProposal}
        />
      )}
      <ConfirmationDialog
        open={disapprovalDialogOpen}
        onClose={() => setDisapprovalDialogOpen(false)}
        title="Reprovar Proposta"
        text={`Tem certeza que deseja reprovar a proposta do veículo ${selectedProposal?.name}? A ação não pode ser desfeita.`}
        actions={
          <>
            <Button
              variant="outlined"
              style={{ marginRight: 16 }}
              onClick={handleRemoveProposal}
              id="modal-reject-btn"
            >
              Reprovar
            </Button>
            <Button
              variant="contained"
              onClick={() => setDisapprovalDialogOpen(false)}
            >
              Cancelar
            </Button>
          </>
        }
      />
    </ProposesContainer>
  );
};
