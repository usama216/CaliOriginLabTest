import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const LabTestPDFMain = () => {
  const pdfs = [
    { title: "Jet Fuel", path: "/lab/Jet_Fuel_pre_Roll.pdf" },
    // { title: "AK 47 Moon Rockets", path: "/lab/AK_47_Moon_Rockets.pdf" },

    // { title: "APie Face Pre Roll", path: "/lab/Pie_Face_Pre_Roll.pdf" },
    // { title: "Nerds Pre Roll", path: "/lab/Nerds_Pre_Roll.pdf" },
    // { title: "Rainbow Runtz Pre Roll", path: "/lab/Rainbow_Runtz_Pre_Roll.pdf" },
    // { title: "Incredible Hulk Pre roll", path: "/lab/Incredible_Hulk_Pre_roll.pdf" },
    // { title: "Blueberry Pre Roll", path: "/lab/Blueberry_Pre_Roll.pdf" },
    // { title: "Hush Burger", path: "/lab/Hush_Burger.pdf" },
    // { title: "Night Fire", path: "/lab/Night_Fire.pdf" },

    // { title: "Northern light Moon Rockets", path: "/lab/Northern_light_Moonn_Rockets.pdf" },
    { title: "Pineapple Express", path: "/lab/Pineapple_Express_Moon_Rockets.pdf" },









    { title: "TK Lotto Pre Roll", path: "/lab/TK_Lotto_Pre_Roll.pdf" },
    // { title: "Tropicanna Cherry", path: "/lab/Tropicanna_Cherry.pdf" },
    { title: "Cherry Cake", path: "Cherry_Cake.pdf" },
    { title: "THCA Disposable Vape", path: "/lab/THCA_Disposable_Vape.pdf" },
    { title: "Night Fire OG", path: "NightFireOG.pdf" },
    { title: "Cheetah Piss", path: "Cheetah_Piss.pdf" },
    { title: "Blueberry OG", path: "Blueberry_OG.pdf" },
    { title: "Grape Ape THCA", path: "Grape_Ape_THCA.pdf" },
    { title: "Tropicanna Cherries", path: "/lab/Tropicanna_Cherries.pdf" },
    // { title: "Jet Fuel THCA Preroll", path: "/lab/Jet_Fuel_THCA_Preroll.pdf" },
    { title: "Mendo Breath THCA", path: "Mendo_Breath_THCA.pdf" },
    { title: "Incredible Hulk", path: "Incredible_hulk.pdf" },
    { title: "Super Lemon Haze", path: "Super_Lemon_Haze.pdf" },
    { title: "Skywalker OG", path: "Skywalker_OG.pdf" },
    { title: "White Gusher", path: "White_Gusher.pdf" },
    { title: "Pink Panties", path: "Pink_Panties.pdf" },
    { title: "Black Diamond", path: "Black_Diamond.pdf" },


  ];

  const handleViewPDF = (path) => {
    window.open(path, '_blank');
  };

  return (
    <Box sx={{ padding: "3rem 5%" }}>
      <Grid container spacing={3}>
        {pdfs.map((pdf, index) => (
          <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
            <Box
              sx={{
                backgroundColor: "#17364c",
                color: "white",
                padding: "2rem 3rem",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "700" }}>
                {pdf.title}
              </Typography>
              <br />
              <Button
                onClick={() => handleViewPDF(pdf.path)}
                sx={{
                  borderRadius: "10px",
                  textTransform: "none",
                  padding:'0.5rem 2rem',
                  fontSize: "1rem",
                  backgroundColor:'#f0ab3b',

                  '&:hover':{
                    backgroundColor:'#f0ab3b'
                  },
                  fontWeight: 600,
                }}
                variant="contained"
              >
                View
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LabTestPDFMain;
