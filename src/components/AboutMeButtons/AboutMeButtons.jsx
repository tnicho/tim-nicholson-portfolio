import React from 'react'
import { Box, Button } from '@mui/material'

export default function AboutMeButtons(props) {
  return (
    <Box
        sx={{display:'flex'}}
    >
      <Button sx={{mt: '10px', backgroundColor: "secondary.light", color:'primary.main', fontWeight: 'bold'}}variant ="contained" size="large" id="biography" onClick = {props.handleAboutChange} >BIOGRAPHY</Button>
        {/* <Button
          sx={{mt: '10px', backgroundColor: "secondary.light", color:'primary.main', fontWeight: 'bold'}}variant ="contained" size="large"
          onClick = {props.handleAboutChange}
          id="technology"
        >Technology</Button>
        <Button
          sx={{mt: '10px', backgroundColor: "secondary.light", color:'primary.main', fontWeight: 'bold'}}variant ="contained" size="large"
          onClick = {props.handleAboutChange}
          id="education"
        >Education</Button>
    </Box> */}
  )
}
