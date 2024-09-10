import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <>
    <Box sx={{width:'100%' , backgroundColor:'red', overflow:'hidden'}}>
    <Slider {...settings}>
    <Box sx={{
    backgroundImage: 'url(herobg.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
}}>
      <Box>
        <Typography sx={{
            color:'white', 
            fontSize:'2.5rem', fontWeight:400,
            textTransform:'uppercase'
        }}>
        Finest Organic
        </Typography>
        <Typography sx={{
            color:'#17364c', 
            fontSize:'2.5rem', fontWeight:600,
            textTransform:'uppercase'
        }}>
        Herbs in Every CBD Product
        </Typography>
        <Typography sx={{
            color:'#17364c', 
            fontSize:'1rem', fontWeight:400,
            textTransform:'uppercase'
        }}>
        Cali Origins has carefully crafted a variety of Hemp CBD products to choose from for daily wellness support.
        </Typography>
      </Box>
        {/* <img src="/herobg.png" alt="" style={{width:'100%', height:'100%'}}/> */}
      </Box>
      <div>
        <h3>1</h3>
      </div>
    </Slider>
    </Box>
    </>
  )
}

export default Hero