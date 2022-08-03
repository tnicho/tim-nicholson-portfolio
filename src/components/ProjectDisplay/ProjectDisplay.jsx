import React from 'react'
import {Typography, Box} from "@mui/material"
import ScreenshotDisplayBox from "../../components/ScreenshotDisplayBox/ScreenshotDisplayBox"
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails"

export default function ProjectDisplay() {
  return (
    <Box
      sx={{
          display: 'flex'
      }}
    >
      <ScreenshotDisplayBox/>
      <ProjectDetails 
      title = "LIFT OFF"
      description = "A mobile compatible browser game that The goal of LIFT OFF is to help your Weightlifter complete a Clean and Press in which one lifts a bar to the waist the chest and finally over the head This goal is accomplished through a series of reflex-based mini games using the arrow keys or buttons on mobile"
      tech = "HTML, CSS, JavaScript, GitHub, Canva"
      linkDeployed ="https://tnicho.github.io/BrowserGame-LiftOff/"
      linkGithub = "https://github.com/tnicho/BrowserGame-LiftOff"
      />
    </Box>
  )
}
