import React from 'react'
import {Paper, Typography, Box} from "@mui/material"

export default function BioDisplay(props) {
  return (
    <Paper 
      elevation = {props.elevation}
      sx={{
        margin:'10px',
        mt: '7vh', 
        width: {lg:'40vw', xs:'80vw'}, 
        height: '60vh', 
        display: 'flex', 
        flexDirection:'column',
      }}>
      <Box
        sx={{
          height: '8vh',
          mt:'5vh' 
        }}
      >
      <Typography align='center' variant='h3'>BIOGRAPHY</Typography>
      </Box>
      <Box 
        sx={{
          height: '30vh', 
          display: 'flex',           
          alignItems: 'center',
          justifyContent: 'center'}}>
      <Typography align='center' variant="h5">I am a full-stack developer with a history in engineering and a fascination with the intersection of technology and the arts. Leaving my career as an engineer led me to following a passion for coding into a career in full-stack development.</Typography>
      </Box>
    </Paper>
  )
}
