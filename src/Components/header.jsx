import { Box,Typography,useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header =({title,subtitle})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box mb = "30px">
        
            <Typography variant = "h3" color = {colors.gray[100]} sx={{mb:"5px"}} fontWeight = "bold">{title}</Typography>
            <Typography variant="h6" color = {colors.greenAccent[400]}>{subtitle}</Typography>
       
    </Box>
}
export default Header;