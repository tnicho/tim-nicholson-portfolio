import React from 'react'
import {Box, Typography, Button} from "@mui/material"

export default function LinkDisplayMobile() {
    const handleDownload =() => {
      const link = document.createElement('a')
      link.download = "Timothy Nicholson Resume"
      link.href = './Timothy Nicholson Resume.pdf'
      link.click();
    }


  return (
    <Box
    sx={{
      color: 'secondary.light'
    }}
    >
      <Typography align='center' variant='h4'>For more information on my please find me here.</Typography>
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
          <img height = "50px" alt ='Github Logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style={{filter: 'invert(97%) sepia(7%) saturate(2%) hue-rotate(121deg) brightness(117%) contrast(100%)'}}/>
          <Typography align='center'>Github</Typography>
        </Box>
        <Box
          sx={{
            mx:'3vw',
            my: 1,
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
          <img height = "50px" alt = 'LinkedIn Logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" style={{filter: 'invert(97%) sepia(7%) saturate(2%) hue-rotate(121deg) brightness(117%) contrast(100%)'}}/>
          <Typography align='center'>LinkedIn</Typography>
        </Box>
      </Box>
      
      <Box
        sx={{
          mx:'3vw',
          display: 'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          '& .MuiButton-contained':{backgroundColor:'secondary.light'}
        }}      
      >
        <Typography variant='h5' sx={{mb:1}}>Or download my resume by clicking below</Typography>
        <Button
        sx={{
          color: 'primary.main', 
          backgroundColor:"secondary.light", 
          fontWeight: 'bold'}}
          variant ="contained" 
          size="large"
          onClick = {handleDownload}
      >Resume Download</Button>
      </Box>
    </Box>
  )
}
