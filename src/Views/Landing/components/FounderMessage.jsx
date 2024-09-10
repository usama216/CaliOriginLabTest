import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from '../../../components/Image/Image'

const FounderMessage = () => {
  return (
    <>

<Box sx={{padding:'3rem 5%'}}>

<Grid container  spacing={4} sx={{alignItems:'center'}}>
<Grid item lg={4} md={4} sm={12} xs={12}>

<Box>
<img src='/shayamal.svg' width='100%' height={'400rem'}/>

</Box>
</Grid>


<Grid item lg={7} md={7} sm={12} xs={12}>

<Typography sx={{fontSize:'2rem', fontWeight:700}}>
    Founder Message
</Typography>
<br/>
<Typography>
Moody Moon Wellness is the brainchild of our founder, Shyamal Patel, a pharmacist in an independent pharmacy in the state of Virginia, USA. Through his daily interactions with patients and clients in his community, he identified the need for natural alternatives that would support and promote key areas of health.
</Typography>
<br/>

<Typography>
    This was the motivation to develop natural products that would strengthen and renew people’s overall well being, thereby, impacting their lives in a meaningful way. Shyamal’s training as a pharmacist gave him the distinct advantage of understanding the human body and how both biochemical and organic compounds affect basic biological functions. This expertise included both a scientific understanding of organic compounds, as well as an understanding of the benefits of the compounds found in botanicals that have been used in traditional Indian subcontinent medicine for centuries.
</Typography>


</Grid>

</Grid>


</Box>



    </>
  )
}

export default FounderMessage