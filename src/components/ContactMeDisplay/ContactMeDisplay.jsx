import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

export default function ContactMeDisplay() {
  return (
    <Box
    sx={{
      m: "5vw",
      width: "50vw",
      bgcolor: 'purple'
    }}
    >
      <Typography variant='h3'>I'd love to hear from you</Typography>
        Contact Me through linkedIn Here or directly through email and I will get back to you as soon as I'm able.
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
