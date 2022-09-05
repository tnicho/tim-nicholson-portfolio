import React from 'react'
import { Box, Button } from '@mui/material'

export default function AboutMeButtons(props) {
  return (
    <Box
        sx={{display:'flex'}}
    >
        <Button
        
        onClick = {props.handleAboutChange}
        >Biography</Button>
        <Button

        onClick = {props.handleAboutChange}
        >Technology</Button>
        <Button

        onClick = {props.handleAboutChange}
        >Education</Button>
    </Box>
  )
}
