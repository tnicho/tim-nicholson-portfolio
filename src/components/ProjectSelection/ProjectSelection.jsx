import {Box, Experimental_CssVarsProvider, Typography } from "@mui/material"
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
        <ProjectSelectionCard 
          title= "LiftOff" 
          imagesrc ="./Portfolio Pics/Browser Game/Browser 1 (1).png" 
          description = "A quicktime based Browser Game"
          technologies = "JAvascript, HTML, CSS"
          />
        <ProjectSelectionCard 
          title= "My Year Of Media" 
          imagesrc="./Portfolio Pics/MYIM/myyearofmedia HomePage.png"
          description = "A full CRUD, API-based, media tracker for Desktop or Mobile"
          technologies = "Express, Node.js, MongoDB, HTML, CSS, JavaScript, Oauth, GoogleBooks API, TMDB API"
          />
        <ProjectSelectionCard 
          title ="Digipets Forever" 
          imagesrc="./Portfolio Pics/DigiPets Forever/Digipets Show.png"
          description = 'A full CRUD, "pet" creation, app for mobile made as part of a team of UX and programmers'
          technologies ="Python, Django, HTML, CSS, TailwindCSS, PostgreSQL"
          />
        <ProjectSelectionCard 
        title = "Ampless" 
        imagesrc = "./Portfolio Pics/Ampless/Ampless Main Page.png"
        description = "A full CRUD, MERN web app for desktop to manipulate audio inputs"
        technologies = "Express, Node,js, MongoDB, React, Material UI, Web Audio API"
        />
      </Box>
    </Box>
)
}