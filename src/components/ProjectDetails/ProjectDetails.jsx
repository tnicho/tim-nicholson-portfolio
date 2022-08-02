import React from 'react'
import {Box, Typography, Link, Paper} from '@mui/material'

export default function ProjectDetails() {
  return (
    <Paper 
    elevation={24}
    sx={{
      mr: 20,
      my: 10,
      background: "blue",
      height: '60vh',
      width: '30vw'
    }}
    >
      <Typography sx={{color: "white"}}>PROJECT TITLE</Typography>
      <Box
        sx={{
          background: "#ADD8E6",
          borderBottom: 1
        }}>
          Description: The goal of LIFT OFF is to help your "Weightlifter" complete a "Clean and Press" in 
          which one lifts a bar to the waist, the chest, and finally over the head. This goal is 
          accomplished through a series of reflex-based mini games using the arrow keys (or buttons on mobile).
      </Box>
      <Box
        sx={{
            background: "#00008B",
            color: "white",
            borderBottom: 1
          }}>
            Technology Used: HTML, CSS, JavaScript, GitHub (hosting), and Canva (image creation)
      </Box>
      <Box
        sx={{
            background: "#ADD8E6",
          }}>
            Links: <br/>
            Deployed: <Link href="https://tnicho.github.io/BrowserGame-LiftOff/">tnicho.github.io/BrowserGame-LiftOff</Link><br/>
            Github: <Link href="https://github.com/tnicho/BrowserGame-LiftOff">github.com/tnicho/BrowserGame-LiftOff</Link>
      </Box>
    </Paper>
  )
}
