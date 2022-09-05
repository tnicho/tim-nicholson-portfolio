import React from 'react'
import { Paper } from '@mui/material'
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel'

export default function ProjectDisplay(props){

  return(
    <Paper
      elevation={20}
      sx={{
          ml: {lg: 15, xs: 5},
          mr: {lg: 10},
          my: 2,
          height: {lg: 360, xs: 180},
          width: {lg: 640, xs: 320}
        }}
      >
      <ScreenshotCarousel screenshots={props.screenshots}/>
    </Paper>
  )
}