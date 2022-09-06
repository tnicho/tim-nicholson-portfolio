import React from 'react'
import { Box, Button } from '@mui/material'

export default function AboutMeButtons(props) {
  return (
    <Box
        sx={{display:'flex', height: '20vh'}}
    >
      <Button sx={{mt: '10px', backgroundColor: "secondary.light", color:'primary.main', fontWeight: 'bold'}}variant ="contained" size="large" onClick = {props.handleAboutChange} >BIOGRAPHY</Button>
        <Button
          variant = "contained"
          onClick = {props.handleAboutChange}
        >Technology</Button>
        <Button
          variant = "contained"
          onClick = {props.handleAboutChange}
        >Education</Button>
    </Box>
  )
}
