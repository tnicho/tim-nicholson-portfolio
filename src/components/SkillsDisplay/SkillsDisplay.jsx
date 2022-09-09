import { Paper, Typography, Box, Grid } from '@mui/material'
import React from 'react'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette:{
    primary:{
      main: '#1B721B'
    },
    secondary:{
      light: '#FFFFFF',
      main: '#D3D3D3',
    }
  },
})

theme = responsiveFontSizes(theme);

export default function SkillsDisplay(props) {
  return (
    <Paper 
      elevation = {props.elevation}
      sx={{
        margin: {lg:'10px', xs: ''},
        mt: {lg:'', xs:'3vh'}, 
        width:{lg:'40vw', xs:'90vw'},  
        height: '70vh', 
        display: 'flex', 
        flexDirection:'column', 
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 'modal'}}
      >
        <ThemeProvider theme = {theme}>

      <Typography variant='h3'>TECHNOLOGIES</Typography>
        <Box>
          <Typography align='center' variant="h5">Front End:</Typography>
          <Box
            sx={{display: 'flex', justifyContent: {lg:'space-evenly', xs: 'space-between'}, width:{lg:'40vw', xs:'85vw'}}}>
            <img alt ='HTML5 Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            <img alt ='JavaScript Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img alt ='MUI Logo'height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            <img alt ='CSS Logo'height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
          </Box>
        </Box>
        <Box>
          <Typography align='center' variant="h5">Back End:</Typography>
          <Box
          sx={{display: 'flex', justifyContent: {lg:'space-evenly', xs: 'space-between'}, width:{lg:'40vw', xs:'85vw'}}}>
            <img alt ='MongoDB Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            <img alt ='Python Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
            <img alt ='PostgreSQL Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"/>
          </Box>
        </Box>
        <Box>
          <Typography align='center' variant="h5">Frameworks:</Typography>
          <Box
          sx={{display: 'flex', justifyContent: {lg:'space-evenly', xs: 'space-between'}, width:{lg:'40vw', xs:'85vw'}}}>
            <img alt ='React Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"/>
            <img alt ='Django Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"/>
            <img alt ='Node.js Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            <img alt ='Express Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
          </Box>
        </Box>
        <Box>
          <Typography align='center' variant="h5">Technologies:</Typography>
          <Box
          sx={{display: 'flex', justifyContent: {lg:'space-evenly', xs: 'space-between'}, width:{lg:'40vw', xs:'85vw'}}}>
            <img alt ='Heroku Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
            <img alt ='Git Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
            <img alt ='Figma Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            <img alt ='GIMP Logo' height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" />
          </Box>
        </Box>
          </ThemeProvider>
    </Paper>
      
  )
}
