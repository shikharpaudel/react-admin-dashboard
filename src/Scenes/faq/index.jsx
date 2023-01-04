import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../Components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="10px" paddingBottom="5px">
      <Header title="FAQ" subtitle="Frequently Asked Questions " />

      <Accordion defaultExpanded >
        <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant ="h6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A corrupti
            debitis perferendis suscipit consequuntur. Odit rem, culpa
            repellendus soluta placeat modi maxime. Eius exercitationem aut
            adipisci accusamus voluptatem ipsum dicta.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant ="h6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A corrupti
            debitis perferendis suscipit consequuntur. Odit rem, culpa
            repellendus soluta placeat modi maxime. Eius exercitationem aut
            adipisci accusamus voluptatem ipsum dicta.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant ="h6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A corrupti
            debitis perferendis suscipit consequuntur. Odit rem, culpa
            repellendus soluta placeat modi maxime. Eius exercitationem aut
            adipisci accusamus voluptatem ipsum dicta.
          </Typography>
        </AccordionDetails>
      </Accordion>
   

      

     


    </Box>
  );
};
export default FAQ;
