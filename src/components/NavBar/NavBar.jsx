import React from 'react'
import {Box, Link} from '@mui/material'

export default function NavBar() {
  return (
    <Box
    id="myMenu"
      sx={{
        position: 'fixed',
        display: 'flex',
        py: '10px',
        px: '5vw',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '60px',
        // bgcolor: '#1B721B',
        // color: '#FFFFFF',
        color: 'secondary.light',
        bgcolor: {lg:'primary.main', xs: 'pink'},
        top: '0',
        margin: '0',
        zIndex: '9',
      }}>
          <Box data-menuanchor="landingPage" class="active">
            <Link href="#landingPage" color="inherit" variant="h4" underline="none">Home</Link>
          </Box>
          <Box data-menuanchor="projectPage">
            <Link href="#projectPage" color="inherit" variant="h4" underline="none">Projects</Link>
          </Box>
          <Box data-menuanchor="aboutMePage">
            <Link href="#aboutMePage" color="inherit" variant="h4" underline="none">About Me</Link>
          </Box>
          <Box data-menuanchor="linksPage">
            <Link href="#linksPage" color="inherit" variant="h4" underline="none">Contact</Link>
          </Box>
    </Box>
  )
}
