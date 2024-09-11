import { Box } from '@mui/material'
import React from 'react'

const Video = () => {
  return (
   <>
   <Box sx={{padding:'0% 5%', marginTop:'5rem'}} >
    <Box sx={{
        display:'flex', justifyContent:'center',
        
         borderRadius:'30px',
        overflow:'hidden', 
        width:'100%'
    }}>
    <video width="100%" controls autoPlay muted>
  <source src="vd.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
    </Box>
   </Box>
   </>
  )
}

export default Video