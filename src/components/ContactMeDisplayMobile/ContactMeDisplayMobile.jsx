import { Box, TextField, Typography, Button, Paper } from '@mui/material'
import emailjs from '@emailjs/browser'
import React, {useRef} from 'react'
import SendIcon from '@mui/icons-material/Send';


export default function ContactMeDisplayMobile() {
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
    <Paper
    sx={{
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mx: "5vw",
      my: {lg:'7vh',xs:'0vh'},
      py: '1vh',
      width: {lg:"50vw", xs: '90vw'},
      bgcolor: 'primary.main',
      color: 'secondary.light'
    }}
    >
      <Typography align='center' variant='h4'>I want to hear from you</Typography>
      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          mx:'2vw',
          // my:'1vh',
          '& .MuiTextField-root': { width: {lg:'50ch', xs: '30ch'}, background: '#FFFFFF'},
          '& .MuiButton-root':{ textPrimary:{color: 'primary.main'}}
        }}
        noValidate
        autoComplete="off"
      >
      <Typography align="left" variant='h6'>Name</Typography>
      <TextField
        required
        name="user_name"
        id="outlined-required"
        label="Required"
        defaultValue=""
        variant="filled"
        />
      <Typography align="left" variant='h6'>Email</Typography>
      <TextField
        required
        name="user_email"
        id="outlined-required"
        label="Required"
        defaultValue=""
        variant="filled"
        />
      <Typography align="left" variant='h6'>Message</Typography>
      <TextField
        required
        name="message"
        id="outlined-required"
        label="Required"
        defaultValue=""
        variant="filled"
        multiline
        rows={3}
      />
      <Box sx={{mt:1,display:'flex', justifyContent:'flex-end'}} >
      <Button sx={{ backgroundColor: "secondary.light", color:'primary.main', fontWeight: 'bold'}} align='right' variant ="contained" size="large" type="submit" value="Send" endIcon={<SendIcon />}>Send</Button>
      </Box>
      </Box>
        
    </Paper>
  )
}
