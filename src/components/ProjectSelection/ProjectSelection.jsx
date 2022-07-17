import {Box, Typography } from "@mui/material"
import React from "react"
import ProjectSelectionCard from "../ProjectSelectionCard/ProjectSelectionCard"

export default function ProjectSelection(props) {
  return(
    <Box>
      <Typography>Project Selection Bar</Typography>
      <Box
        sx={{
          display:'flex'
        }}
      >
        <ProjectSelectionCard title= "LiftOff"/>
        <ProjectSelectionCard title= "My Year Of Media"/>
        <ProjectSelectionCard title ="Digipets Forever"/>
        <ProjectSelectionCard title = "Ampless"/>
      </Box>
    </Box>
)
}