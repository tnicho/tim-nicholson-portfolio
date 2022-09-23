import React from 'react'
import {Box, Typography, Link, Paper} from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette:{
    primary:{
      // main: '#1B721B'
      main: '#002E20'
    },
    secondary:{
      light: '#FFFFFF',
      main: '#D3D3D3',
    }
  },
})

theme = responsiveFontSizes(theme);

export default function ProjectDetails(props) {
  return (
    <Paper 
    elevation={20}
    sx={{
      mr: {lg: 15},
      mx: {xs: 5},
      mt:{lg:'20px', xs: '5px'},
      height: {md:'50vh', sm: '27vh'},
      width: {lg:"40vw", md: '50vw', sm:"80vw"}
    }}
    >
      <ThemeProvider theme = {theme}>
      <Typography sx={{
        bgcolor: 'primary.main',
        color: "secondary.light", 
        fontWeight:'bold', 
        letterSpacing: 2,
        p:1
      }} 
      align= 'center'
      variant="h4">{props.title}</Typography>
      <Box
        sx={{
          bgcolor: "secondary.light",
          borderBottom: 1,
          height: {md:'22vh', sm:"10vh"},
        }}>
          <Typography align= 'center' sx={{fontWeight:'bold', display:{xs:'none'}}}>Description</Typography>
          <Typography align='left' sx={{px:1}}>{props.description}</Typography>
      </Box>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: "secondary.light",
          borderBottom: 1,
          height:{md:'12vh',sm:'6vh'}
        }}>
            <Typography align= 'center' sx={{fontWeight:'bold'}}>Technology Used</Typography>
            <Typography align='left' sx={{p:1}}> {props.tech}</Typography>
      </Box>
      <Box
        sx={{
          background: "secondary.main",
          pb: 1
        }}>
            <Typography align= 'center' sx={{fontWeight:'bold', display:{xs:'none'}}}>Links</Typography>
            <Box
              sx={{
                background: "secondary.main",
                display: "flex",
                justifyContent: 'space-around',
                pb: {lg:'5px', xs: '2px'},
                pt: {lg:'', xs: '2px'}
              }}>
            <Link sx={{fontWeight: 'bold'}} href={props.linkDeployed}>Deployed App</Link> <Link sx={{fontWeight: 'bold', pr: 3}} href={props.linkGithub}>Github</Link>
            </Box>
      </Box>
      </ThemeProvider>
    </Paper>
  )
}
