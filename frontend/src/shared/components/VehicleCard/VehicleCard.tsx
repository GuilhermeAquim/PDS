import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { VehicleCardContainer } from "./VehicleCard.styles";
import { useNavigate } from "react-router-dom";
import { Vehicle } from "../../types/Vehicle";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setSelectedVehicle } from "../../../redux/vehiclesSlice";

type Props = {
  vehicle: Vehicle;
  actions?: JSX.Element;
  isPropose?: boolean;
};

export const VehicleCard = ({
  vehicle,
  actions,
  isPropose = false,
}: Props): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <VehicleCardContainer
      id={`vehicle-${vehicle.year}`}
      onClick={() => {
        if (!isPropose) {
          dispatch(setSelectedVehicle(vehicle));
          navigate(`/stock/${vehicle.name}`);
        }
      }}
    >
      <CardHeader title={vehicle.name} subheader={vehicle.manufacturer} />
      <CardMedia
        component="img"
        sx={{ height: 164 }}
        src="https://cdn.autopapo.com.br/box/uploads/2022/12/12165820/han-byd-carros-chineses-portal-732x488.jpg"
      />
      <CardContent>
        <Typography>{vehicle.color}</Typography>
        <Typography>{vehicle.year}</Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </VehicleCardContainer>
  );
};
