import { Box } from '@mui/material'
import React from 'react'

export default function AboutMeMenu(props) {
  return (
    <Box
      sx={{
        mt: '7vh',
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'primary.main',
        backgroundColor: 'inherit',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '20vh',
          width:'30vw',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bolder',
          fontSize: 50,
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            fontSize: 80,
            cursor: 'pointer'
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
          width:'30vw',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bolder',
          fontSize: 50,
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            fontSize: 80,
            cursor: 'pointer'
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
          width:'30vw',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bolder',
          fontSize: 50,
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            fontSize: 80,
            cursor: 'pointer'
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
