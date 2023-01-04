import { Box } from "@mui/system";
import Header from "../../Components/header";
import Pie from "../../Components/PieChart";

const PieChart = ()=>{
    return(
        <Box m = "10px">
        <Header title="PIE CHART" subtitle = "Simple Bar Chart"/>
        <Box height = "75vh">
            <Pie/>
            </Box>
        </Box>

    )
}
export default PieChart;