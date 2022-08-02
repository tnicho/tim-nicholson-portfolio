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
      <ProjectDetails/>
    </Box>
  )
}
