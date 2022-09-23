import React from 'react'
import { Paper } from '@mui/material'
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel'

export default function ProjectDisplay(props){

  return(
    <Paper
      elevation={20}
      sx={{
          ml: {sm: 15, xs: 5},
          mr: {sm: 10},
          my: 2,
          height: {lg: 360, sm: 270, xs: 180},
          width: {lg: 640, sm: 480, xs: 320}
        }}
      >
      <ScreenshotCarousel screenshots={props.screenshots}/>
    </Paper>
  )
}