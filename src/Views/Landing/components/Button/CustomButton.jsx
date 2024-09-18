import { Box, Typography, useTheme, useMediaQuery, Button as MuiButton, IconButton } from '@mui/material';
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const CustomButton = ({border, backgroundColor, color, hcolor, hbackgroundColor, name, width,mr}) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <MuiButton sx={{
                width:`${width}`,
                textTransform: 'none',
                backgroundColor: `${backgroundColor}`,
                padding: isSmallScreen ? "0.1rem 0.8rem" : '0.5rem 2rem',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center', 
                justifyContent:'center',
                border: `${border}`,
                '&:hover':{
                    backgroundColor: `${hbackgroundColor}`,
                 color:'white'
                },
                '&:hover .icon, &:hover .text': {
                    color: `${hcolor}`,
}
            }}>
                <Typography className='text' sx={{
                    color: `${color}`,
                    fontSize: isSmallScreen ? "0.9rem" : '1rem',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    marginRight:isSmallScreen ? "0rem": '0.5rem'
                }}>
                    {name}
                </Typography>
                <IconButton  className='icon' sx={{fontSize:isSmallScreen? '1.1rem': '1.4rem',
                //  display:'block',
                marginRight:isSmallScreen ? "-0.5rem": "-0.5rem",
                     color: `${color}`, backgroundColor:'transparent'}}>
                <FiArrowUpRight style={{backgroundColor:'transparent'}} />
                </IconButton>
            </MuiButton>
        </>
    );
}

export default CustomButton;
