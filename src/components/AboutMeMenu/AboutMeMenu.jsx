import { Box } from '@mui/material'
import React from 'react'

export default function AboutMeMenu(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '20vh',
          width:'40vw',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
      }}
      id="biography"
      onClick = {props.handleAboutChange}
      >
        Biography:
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '20vh',
          width:'40vw',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
      }}
      id="technology"
      onClick = {props.handleAboutChange}
      >
        Technologies:
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '20vh',
          width:'40vw',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
      }}
      id="education"
      onClick = {props.handleAboutChange}
      >
        Education:
      </Box>
    </Box>
  )
}
