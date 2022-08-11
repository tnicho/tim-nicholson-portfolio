import React from 'react'
import {Paper, Typography} from "@mui/material"

export default function BioDisplay() {
  return (
    <Paper 
      sx={{
        margin:'10px', 
        width: '40vw', 
        height: '60vh', 
        display: 'flex', 
        flexDirection:'column', 
      }}>
      <Typography variant='h3'>Biography Display</Typography>
      <Typography variant="h5">I am a full-stack developer with a history in engineering and a fascination with the intersection of technology and the arts. Leaving my career as an engineer led me to following a passion for coding into a career in full-stack development.</Typography>
    </Paper>
  )
}
