import { Box } from '@mui/material'
import React from 'react'

export default function AboutMeMenu() {

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
      >
        About Me:
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
      >
        Education:
      </Box>
    </Box>
  )
}
