import { Box, TextField, Typography, Button } from '@mui/material'
import emailjs from '@emailjs/browser'
import React, {useRef} from 'react'


export default function ContactMeDisplay() {
  const form = useRef();

  const sendEmail =(evt) => {
    // emailjs.preventDefault();

    emailjs.sendForm(
      'service_twzhn1a',
      'template_o5i8bia',
      form.current,
      '_GBA7qCIPMyN137VT'
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    )
  } 

  return (
    <Box
    sx={{
      mx: "5vw",
      my: '5vh',
      py: '5vh',
      width: "50vw",
      bgcolor: 'inherit'
    }}
    >
      <Typography variant='h3'>I'd love to hear from you</Typography>
      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          mx:'5vw',
          my:'2vw',
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <Typography align="left" variant='h4'>Name</Typography>
      <TextField
        required
        name="user_name"
        id="outlined-required"
        label="Required"
        defaultValue=""
        />
      <Typography align="left" variant='h4'>Email</Typography>
      <TextField
        required
        name="user_email"
        id="outlined-required"
        label="Required"
        defaultValue=""
        />
      <Typography align="left" variant='h4'>Message</Typography>
      <TextField
        required
        name="message"
        id="outlined-required"
        label="Required"
        defaultValue=""
        multiline
        rows={8}
      />
      <Button type="submit" value="Send">  Send </Button>
      </Box>
        
    </Box>
  )
}
