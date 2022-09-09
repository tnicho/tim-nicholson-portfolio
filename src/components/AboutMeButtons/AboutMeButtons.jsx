import React from 'react'
import { Box, Button, Grid } from '@mui/material'

export default function AboutMeButtons(props) {
  return (
    <Grid container spacing={1} sx={{my:1}}>
    <Grid item xs={6} sx={{display:'flex', justifyContent:'center'}}>
    <Button sx={{mt: '10px', backgroundColor: 'primary.main', color:"secondary.light", fontWeight: 'bold'}}variant ="contained" size="large" id="biography" onClick = {props.handleAboutChange} >BIOGRAPHY</Button>
    </Grid>
    <Grid item xs = {6} sx={{display:'flex', justifyContent:'center'}}>
      <Button
        sx={{mt: '10px', backgroundColor: 'primary.main', color:"secondary.light", fontWeight: 'bold'}}variant ="contained" size="large"
        onClick = {props.handleAboutChange}
        id="technology"
      >Technology</Button>
    </Grid>
    <Grid item xs={12} sx={{display:'flex', justifyContent:'center'}}>
    <Button
          sx={{mt: '10px', backgroundColor: 'primary.main', color:"secondary.light", fontWeight: 'bold'}}variant ="contained" size="large"
          onClick = {props.handleAboutChange}
          id="education"
        >Education</Button>
    </Grid>
  </Grid>
  )


}
