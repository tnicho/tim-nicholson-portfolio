import {Box, Experimental_CssVarsProvider, Typography } from "@mui/material"
import React from "react"
import ProjectSelectionCard from "../ProjectSelectionCard/ProjectSelectionCard"

export default function ProjectSelection(props) {
  return(
    <Box>
      <Typography>Project Selection Bar</Typography>
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
          />
        <ProjectSelectionCard 
          title= "My Year Of Media" 
          imagesrc="./PortfolioPics/Screenshots/MYIM Card Picture.png"
          description = "A full CRUD, API-based, media tracker for Desktop or Mobile."
          technologies = "Express, Node.js, MongoDB, HTML, CSS, JavaScript, Oauth, GoogleBooks API, TMDB API"
          />
        <ProjectSelectionCard 
          title ="Digipets Forever" 
          imagesrc="./PortfolioPics/Screenshots/Digipets Card Picture.png"
          description = 'A full CRUD, "pet" creation, app for mobile made as part of a team of UX and programmers.'
          technologies ="Python, Django, HTML, CSS, TailwindCSS, PostgreSQL"
          />
        <ProjectSelectionCard 
        title = "AMPLESS" 
        imagesrc = "./PortfolioPics/Screenshots/Ampless Card Picture.png"
        description = "A full CRUD, MERN web app for desktop to manipulate audio inputs."
        technologies = "Express, Node,js, MongoDB, React, Material UI, Web Audio API"
        />
      </Box>
    </Box>
)
}