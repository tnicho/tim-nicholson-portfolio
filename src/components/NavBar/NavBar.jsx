import React from 'react'
import { Box} from '@mui/material'

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
        bgcolor: 'orange',
        top: '0',
        margin: '0',
        zIndex: '9',
      }}>
          <Box data-menuanchor="landingPage" class="active"><a href="#landingPage">landingPage</a></Box>
          <Box data-menuanchor="projectPage" class="active"><a href="#projectPage">projectPage</a></Box>
          <Box data-menuanchor="aboutMePage"><a href="#aboutMePage">aboutMePage</a></Box>
          <Box data-menuanchor="linksPage"><a href="#linksPage">linksPage</a></Box>
    </Box>
  )
}
