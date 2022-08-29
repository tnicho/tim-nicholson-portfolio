import React from 'react'
import {Box, Typography} from "@mui/material"


export default function LinkDisplay() {
  return (
    <Box>
      <Typography>For more information on my please find me here.</Typography>
      <Box 
        sx={{
          display:"flex",
          justifyContent:'center',
        }}
      >
        <Box
          sx={{
            mx:'3vw',
            my:'1vw',
            '&:hover': {
              opacity: [0.9, 0.8, 0.7],
              cursor: 'pointer',
            },
          }}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/tnicho")
          }}
        >
          <img height = "100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <Typography>Github</Typography>
        </Box>
        <Box
          sx={{
            mx:'3vw',
            my:'1vw',
            '&:hover': {
              opacity: [0.9, 0.8, 0.7],
              cursor: 'pointer', 
            },
          }}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.linkedin.com/in/timothyrinicholson/")
          }}
        >
          <img height = "100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          <Typography>LinkedIn</Typography>
        </Box>
      </Box>
      
      <Box
        sx={{
          mx:'3vw',
          my:'1vw',
          display: 'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}      
      >
        <Typography>Or download my resume directly by clicking below</Typography>
        <Box
          sx={{
          height:"400px",
          width:"310px",
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            cursor: 'pointer'
          },
        }}
        >
          <a href = './Timothy Nicholson Resume.pdf' download="Timothy Nicholson Resume">
            <img height = "400px" src="./PortfolioPics/Screenshots/Timothy Nicholson Resume.png" />
          </a>
        </Box>
      </Box>
    </Box>
  )
}
