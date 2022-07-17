import React from "react"
import {Typography, Box} from "@mui/material"
import ProjectSelection from "../../components/ProjectSelection/ProjectSelection"

export default function ProjectsPage(props){
  return(
    <Box>
      <Typography>Projects  Page</Typography>
      <Typography>Uses a  slider for the projects you present</Typography>
      <Typography>Show Options along the bottom as cards and selected as larger above with info and links</Typography>
      <Typography>Have show include a Slider of Screenshots</Typography>
      <Typography>Or USe Animations. Slide out the main slide(component) and slide in the selected while using React-animations to show selected square</Typography>
      <ProjectSelection/>
    </Box>
)
}