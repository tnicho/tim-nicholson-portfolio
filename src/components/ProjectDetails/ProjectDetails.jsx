import React from 'react'
import {Box, Typography, Link} from '@mui/material'

export default function ProjectDetails() {
  return (
    <Box
    sx={{
      mr: 20,
      my: 10,
      background: "blue",
      height: '60vh',
      width: '30vw'
    }}
    >
      <Typography>ProjectDetails</Typography>
      <Box
        sx={{
          background: "#ADD8E6"
        }}>
          Description: The goal of LIFT OFF is to help your "Weightlifter" complete a "Clean and Press" in 
          which one lifts a bar to the waist, the chest, and finally over the head. This goal is 
          accomplished through a series of reflex-based mini games using the arrow keys (or buttons on mobile).
      </Box>
      <Box
        sx={{
            background: "#00008B",
            color: "white"
          }}>
            Technology Used: HTML, CSS, JavaScript, GitHub (hosting), and Canva (image creation)
      </Box>
      <Box
        sx={{
            background: "dark blue"
          }}>
            Links: <br/>
            Deployed: <Link href="https://tnicho.github.io/BrowserGame-LiftOff/">tnicho.github.io/BrowserGame-LiftOff</Link><br/>
            Github: <Link href="https://github.com/tnicho/BrowserGame-LiftOff">github.com/tnicho/BrowserGame-LiftOff</Link>
      </Box>
    </Box>
  )
}
