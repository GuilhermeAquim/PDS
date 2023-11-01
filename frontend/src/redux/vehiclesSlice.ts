import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Vehicle } from "../shared/types/Vehicle";

interface VehiclesState {
  vehicles: Vehicle[];
  proposals: Vehicle[];
  selectedVehicle?: Vehicle;
}

const initialState: VehiclesState = {
  vehicles: [],
  proposals: [],
  selectedVehicle: undefined,
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    setVehicles: (state, action: PayloadAction<Vehicle[]>) => {
      state.vehicles = action.payload;
    },
    addVehicle: (state, action: PayloadAction<Vehicle>) => {
      state.vehicles = [...state.vehicles, action.payload];
    },
    setProposals: (state, action: PayloadAction<Vehicle[]>) => {
      state.proposals = action.payload;
    },
    addProposal: (state, action: PayloadAction<Vehicle>) => {
      state.proposals = [...state.vehicles, action.payload];
    },
    setSelectedVehicle: (state, action: PayloadAction<Vehicle | undefined>) => {
      state.selectedVehicle = action.payload;
    },
  },
});

export const {
  setVehicles,
  setProposals,
  addProposal,
  addVehicle,
  setSelectedVehicle,
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
