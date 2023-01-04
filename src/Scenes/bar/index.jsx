import BarChart from '../../Components/BarChart';
import { Box } from '@mui/material';
import Header from '../../Components/header';
const Bar = ()=>{
    return <Box m = "10px">
  <Header title = "BAR CHART" subtitle = "Simple Bar Chart"/>
  <Box height = "75vh">
  <BarChart/>
  </Box>
    </Box>
}
export default Bar;