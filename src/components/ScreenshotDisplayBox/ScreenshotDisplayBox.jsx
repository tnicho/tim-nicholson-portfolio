import React from 'react'
import { Box } from '@mui/system'
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel'

export default function ProjectDisplay(props){

  return(
    <Box
      sx={{
          mx: 20,
          my: 10,
          background: "red",
          height: '60vh',
          width: '50vw'
        }}
      >
      <ScreenshotCarousel/>
      {/* <ProjectDetails/> */}
    </Box>
  )
}