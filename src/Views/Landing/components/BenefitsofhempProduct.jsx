import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { green } from "@mui/material/colors";
import { Box, Grid } from "@mui/material";
import Faqs from "./Faqs";

const BenefitsofhempProduct = () => {
  return (
    <>
      <Box sx={{ padding: "2rem 5%", backgroundColor: "#f7dba9" , marginTop:'5rem'}}>
        <Grid container spacing={4}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center', 
              height:'100%'
            }}>
              <Typography sx={{ fontSize: "2rem", fontWeight: 700 }}>
                Benefits Of Hemp Products
              </Typography>
              <Faqs/>
            </Box>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}
            >
              <img src="/benefitsImage.svg" width={"75%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BenefitsofhempProduct;
