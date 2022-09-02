import React from 'react'
import {Box, Typography} from "@mui/material"

export default function LinkDisplay() {
  return (
    <Box
    sx={{
      color: 'secondary.light'
    }}
    >
      <Typography align='center' variant='h5'>For more information on my please find me here.</Typography>
      <Box 
        sx={{
          display:"flex",
          justifyContent:'center',
        }}
      >
        <Box
          sx={{
            mx:'3vw',
            my:'1vh',
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
          <img height = "70px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style={{filter: 'invert(97%) sepia(7%) saturate(2%) hue-rotate(121deg) brightness(117%) contrast(100%)'}}/>
          <Typography align='center'>Github</Typography>
        </Box>
        <Box
          sx={{
            mx:'3vw',
            my:'1vh',
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
          <img height = "70px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" style={{filter: 'invert(97%) sepia(7%) saturate(2%) hue-rotate(121deg) brightness(117%) contrast(100%)'}}/>
          <Typography align='center'>LinkedIn</Typography>
        </Box>
      </Box>
      
      <Box
        sx={{
          mx:'3vw',
          my:'1vh',
          display: 'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}      
      >
        <Typography variant='h5' sx={{mb:1}}>Or download my resume by clicking below</Typography>
        <Box
          sx={{
          // height:"400px",
          // width:"310px",
          height:"250px",
          width:"194px",
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            cursor: 'pointer'
          },
        }}
        >
          <a href = './Timothy Nicholson Resume.pdf' download="Timothy Nicholson Resume">
            <img height = "250px" src="./PortfolioPics/Screenshots/Timothy Nicholson Resume.png" />
          </a>
        </Box>
      </Box>
    </Box>
  )
}
