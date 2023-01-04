import { Box } from "@mui/system";
import Header from "../../Components/header";
import LineChart from "../../Components/LineChart";
const Line =()=>{
return (
    <Box m = "10px">
        <Header title = "LINE CHART" subtitle="Simple Line Chart"/>
        <Box height = "75vh">
            <LineChart/>
        </Box>
    </Box>
)
}
export default Line;