import React from 'react'
import { Paper } from '@mui/material'
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel'

export default function ProjectDisplay(props){

  return(
    <Paper
      elevation={10}
      sx={{
          ml: 20,
          mr: 10,
          my: 5,
          background: "red",
          height: 360,
          width: 640
        }}
      >
      <ScreenshotCarousel images={["./PortfolioPics/Screenshots/MYIM Card Picture.png","./PortfolioPics/Screenshots/Ampless Card Picture.png","./PortfolioPics/Screenshots/MYIM Card Picture.png"]}/>
    </Paper>
  )
}