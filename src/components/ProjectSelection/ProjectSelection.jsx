import {Box, Typography } from "@mui/material"
import React from "react"
import ProjectSelectionCard from "../ProjectSelectionCard/ProjectSelectionCard"

export default function ProjectSelection(props) {
  return(
      <Box
        sx={{
          display:'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <ProjectSelectionCard 
          title= "Lift Off" 
          imagesrc ="./PortfolioPics/Screenshots/Lift Off Card Picture.png" 
          description = "A quicktime based Browser Game."
          technologies = "Javascript, HTML, CSS"
          handleProjectSelection = {props.handleProjectSelection}
          />
        <ProjectSelectionCard 
          title= "My Year Of Media" 
          imagesrc="./PortfolioPics/Screenshots/MYIM Card Picture.png"
          description = "A full CRUD, API-based, media tracker for Desktop or Mobile."
          technologies = "Express, Node.js, MongoDB, HTML, CSS, JavaScript, Oauth, GoogleBooks API, TMDB API"
          handleProjectSelection = {props.handleProjectSelection}
          />
        <ProjectSelectionCard 
          title ="Digipets Forever" 
          imagesrc="./PortfolioPics/Screenshots/Digipets Card Picture.png"
          description = 'A full CRUD app for mobile working on a team including UX Designers.'
          technologies ="Python, Django, HTML, CSS, TailwindCSS, PostgreSQL"
          handleProjectSelection = {props.handleProjectSelection}
          />
        <ProjectSelectionCard 
        title = "AMPLESS" 
        imagesrc = "./PortfolioPics/Screenshots/Ampless Card Picture.png"
        description = "A full CRUD, MERN web app for desktop to manipulate audio inputs."
        technologies = "Express, Node,js, MongoDB, React, Material UI, Web Audio API"
        handleProjectSelection = {props.handleProjectSelection}
        />
      </Box>
)
}