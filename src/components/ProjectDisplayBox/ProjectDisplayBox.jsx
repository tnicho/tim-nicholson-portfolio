import React from 'react'
import { Box } from '@mui/system'
import SimpleSlider from '../ScreenshotCarousel/ScreenshotCarousel'
import ProjectDetails from '../ProjectDetails/ProjectDetails'

export default function ProjectDisplay(props){

  return(
    <Box
      sx={{
          // display:'flex',
          background: "red",
          height: '40vh',
          width: '80vw'
        }}
      >
      <SimpleSlider/>
      {/* <ProjectDetails/> */}
    </Box>
  )
}