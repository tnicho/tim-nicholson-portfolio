import React from 'react'
import {Box} from "@mui/material"
import ScreenshotDisplayBox from "../../components/ScreenshotDisplayBox/ScreenshotDisplayBox"
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails"

export default function ProjectDisplay(props) {
  return (
    <Box
      sx={{
          display: 'flex',
          flexDirection:{md:'row', xs:'column'},
          justifyContent: {md:"space-evenly", sm:'center', xs:'column'},
          alignItems: {sm:'center', xs:'column'}
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
