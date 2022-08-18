import React from 'react'
import { Box} from '@mui/material'

export default function NavBar() {
  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'block',
        width: '100%',
        height: '60px',
        bgcolor: 'orange',
        top: '0',
        margin: '0',
        zIndex: '9',
      }}>
      <ul id="myMenu">
        <li data-menuanchor="projectPage" class="active"><a href="#projectPage">projectPage</a></li>
        <li data-menuanchor="skillsPage"><a href="#skillsPage">skillsPage</a></li>
        <li data-menuanchor="aboutMePage"><a href="#aboutMePage">aboutMePage</a></li>
      </ul>
    </Box>
  )
}
