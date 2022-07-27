import React from 'react'
import { Box } from '@mui/system'
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel'
import ProjectDetails from '../ProjectDetails/ProjectDetails'

export default function ProjectDisplay(props){

  return(
    <Box
      sx={{
          display:'flex',
          justifyContent: 'space-evenly',
          background: "red",
          height: '60vh',
          width: '80vw'
        }}
      >
      <ScreenshotCarousel/>
      <ProjectDetails/>
    </Box>
  )
}