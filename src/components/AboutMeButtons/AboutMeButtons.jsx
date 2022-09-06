import React from 'react'
import { Box, Button } from '@mui/material'

export default function AboutMeButtons(props) {
  return (
    <Box
        sx={{display:'flex', height: '20vh'}}
    >
        <Button
          variant = "contained"
          onClick = {props.handleAboutChange}
        >Biography</Button>
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
