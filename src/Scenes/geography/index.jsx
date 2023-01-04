import { Box } from "@mui/system";
import Header from '../../Components/header';
import MapChart from '../../Components/MapChart';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
const Map = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m = "10px">
  <Header title = "GEOGRAPHY CHART" subtitle = "Simple Geography"/>
  <Box height = "73vh" border={`1px solid ${colors.gray[100]}`} borderRadius="4px">
 <MapChart/>
  </Box>
</Box>
    )
}
export default Map;