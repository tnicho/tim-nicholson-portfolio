import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

export default function ContactMeDisplay() {
  return (
    <Box
    sx={{
      mx: "5vw",
      my: '5vh',
      py: '5vh',
      // mt: '10vh',
      // mb: "5vh",
      width: "50vw",
      bgcolor: 'inherit'
    }}
    >
      <Typography variant='h3'>I'd love to hear from you</Typography>
      <Box
        component="form"
        sx={{
          mx:'5vw',
          my:'2vw',
          '& .MuiTextField-root': { m: 1, width: '50ch' },
          bgcolor: 'pink'
        }}
        noValidate
        autoComplete="off"
      >
      <Typography align="left" variant='h4'>Name</Typography>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue=""
        />
      <Typography align="left" variant='h4'>Email</Typography>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue=""
        />
      <Typography align="left" variant='h4'>Message</Typography>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue=""
        multiline
        rows={8}
      />
      </Box>
        
    </Box>
  )
}
