import React from 'react'
import {Typography, Box} from "@mui/material"
import ScreenshotDisplayBox from "../../components/ScreenshotDisplayBox/ScreenshotDisplayBox"
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails"

export default function ProjectDisplay(props) {
  return (
    <Box
      sx={{
          display: 'flex',
          flexDirection:{lg:'row', sm:'column'},
          justifyContent: "space-evenly"
      }}
    >
      <ScreenshotDisplayBox screenshots = {props.project.screenshots}/>
      <ProjectDetails 
      title = {props.project.title}
      description = {props.project.description}
      tech = {props.project.tech}
      linkDeployed ={props.project.linkDeployed}
      linkGithub = {props.project.linkGithub}
      />
    </Box>
  )
}
