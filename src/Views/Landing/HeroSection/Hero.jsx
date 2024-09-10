import { Box, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiArrowUpRight } from "react-icons/fi";
import Button from '../components/Button/Button';


const Hero = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    
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
            fontSize:isSmallScreen ? "1.5rem": isMediumScreen ? "2rem" : '2.5rem', 
            fontWeight:400,
            textTransform:'uppercase'
        }}>
        Finest Organic
        </Typography>
        <Typography sx={{
            color:'#17364c', 
            fontSize:isSmallScreen ? "2.5rem": isMediumScreen ? "3rem" : '4remrem',  
            fontWeight:600,
            textTransform:'uppercase'
        }}>
        Herbs in Every CBD Product
        </Typography>
        <Typography sx={{
            color:'white', 
            fontSize:isSmallScreen ? "0.9rem": isMediumScreen ? "1rem" : '1rem', 
             fontWeight:400,
            textTransform:'capitalize'
        }}>
        Cali Origins has carefully crafted a variety of Hemp CBD products to choose from for daily wellness support.
        </Typography>

        <Button/>
      </Box>
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