import React from 'react'
import { Paper } from '@mui/material'
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel'

export default function ProjectDisplay(props){

  return(
    <Paper
      elevation={20}
      sx={{
          ml: 20,
          mr: 10,
          my: 2,
          height: 360,
          width: 640
        }}
      >
      <ScreenshotCarousel screenshots={props.screenshots}/>
    </Paper>
  )
}