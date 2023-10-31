import { CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { VehicleCardContainer } from "./VehicleCard.styles";
import { useNavigate } from "react-router-dom";

type Props = {
  vehicle: any;
};

export const VehicleCard = ({ vehicle }: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <VehicleCardContainer onClick={() => navigate("/stock/1")}>
      <CardHeader title="nome do carro" subheader="fabricante" />
      <CardMedia
        component="img"
        sx={{ height: 164 }}
        src="https://cdn.autopapo.com.br/box/uploads/2022/12/12165820/han-byd-carros-chineses-portal-732x488.jpg"
      />
      <CardContent>
        <Typography>Vermelho</Typography>
        <Typography>1998</Typography>
        <Typography>168.456 km rodados, bom estado, sistema de som</Typography>
      </CardContent>
    </VehicleCardContainer>
  );
};
