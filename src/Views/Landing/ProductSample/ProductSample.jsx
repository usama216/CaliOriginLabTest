import {
    Box,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton,
  } from "@mui/material";
import React from 'react'

const ProductSample = () => {
    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const is1200 = useMediaQuery("(max-width:1200px)");

  const listData = [
    {img:'benefit1.webp' , title :'Best Herbs',
        des:'Cali Origins only uses the finest organic herbs and extracts in our line of premium selection of CBD products '
    },
    {img:'benefit2.webp' , title :'Best Products',
        des:'Cali Origins has carefully crafted a variety of Hemp CBD products to choose from for daily wellness support.'
    },
    {img:'benefit3.webp' , title :'Good Quality',
        des:'Our premier CBD products offer good quality and consistency you can always count on, each time you order.'
    },
    {img:'benefit4.webp' , title :'Best Price',
        des:'Cali Origins ensures top-notch CBD products at the best prices, staying true to our commitment to excellence.  '
    },
  ]
  return (
    <>
    <Box sx={{
        backgroundImage:'url(/productbg.png)', 
        backgroundPosition:'center', backgroundSize:'cover',
        objectFit:'cover',
        boxSizing:'border-box', 
        padding: isMediumScreen ? "5%":  '5% 15%',
        marginTop:isSmallScreen ? "2rem" : isMediumScreen ? "4rem":  '5rem'
    }}> 
        <Grid container spacing={isSmallScreen ? 2: 2}>
            {listData.map((row, index)=>(
        <Grid item lg={6} md={6} sm={12} xs={12} >
  <Box sx={{ backgroundColor:'#6d6c6c6a', 
  // height:"8rem",
    display:'flex', padding:'2rem', borderRadius:'10px', gap: isSmallScreen ?2 : is1200 ? 2: 5
  }}>
     <Box>
        <img src={row.img} alt="" style={{
            width:isSmallScreen ? "3rem" : isMediumScreen ?  "5rem": is1200 ? "4rem":  '6rem'
            }}/>
     </Box>
     <Box>
     <Typography
              sx={{
                color: "white",
                fontSize: isSmallScreen
                  ? "1.2rem"
                  : isMediumScreen
                  ? "1.6rem"
                  : "2rem",
                fontWeight: 500,
              }}
            >
              {row.title}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: isSmallScreen
                  ? "0.9rem"
                  : isMediumScreen
                  ? "1rem"
                  : "1rem",
                fontWeight: 400,
                // textTransform: "capitalize",
              }}
            >
             {row.des}
            </Typography>
     </Box>
    </Box>
        
            </Grid>
            ))}
        </Grid>
    </Box>
    </>
  )
}

export default ProductSample