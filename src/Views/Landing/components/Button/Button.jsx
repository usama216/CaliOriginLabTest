import { Box, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const Button = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
   <>
    <Button sx={{textTransform:'none', backgroundColor:'white', 
        padding:isSmallScreen ? "0.5rem 1rem": '0.5rem 2rem',
        borderRadius:'10px'
    }}>
    <Typography sx={{
         color:'#17364c',
        fontSize:isSmallScreen ? "0.9rem": isMediumScreen ? "1rem" : '1rem', 
        
         fontWeight:400,
        textTransform:'capitalize'
    }}>
    Learn more
    </Typography>
      <FiArrowUpRight /> 
    </Button>
   </>
  )
}

export default Button