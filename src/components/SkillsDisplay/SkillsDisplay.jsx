import { Paper, Typography, Box } from '@mui/material'
import React from 'react'

export default function SkillsDisplay(props) {
  return (
    <Paper 
      elevation = {props.elevation}
      sx={{
        margin:'10px', 
        width: {lg:'40vw', xs:'80vw'},  
        height: '70vh', 
        display: 'flex', 
        flexDirection:'column', 
        justifyContent:'space-evenly',
        alignItems: 'center',
        zIndex: 'modal'}}
      >
      <Typography variant='h3'>TECHNOLOGIES</Typography>
        <Box>
          <Typography align='center' variant="h5">Front End:</Typography>
          <Box
            sx={{display: 'flex', justifyContent: 'space-evenly', width:'40vw'}}>
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
          </Box>
        </Box>
        <Box>
          <Typography align='center' variant="h5">Back End:</Typography>
          <Box
          sx={{display: 'flex', justifyContent: 'space-evenly', width:'40vw'}}>
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"/>
          </Box>
        </Box>
        <Box>
          <Typography align='center' variant="h5">Frameworks:</Typography>
          <Box
          sx={{display: 'flex', justifyContent: 'space-evenly', width:'40vw'}}>
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"/>
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"/>
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
          </Box>
        </Box>
        <Box>
          <Typography align='center' variant="h5">Technologies:</Typography>
          <Box
          sx={{display: 'flex', justifyContent: 'space-evenly', width:'40vw'}}>
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            <img height='75px' width='75px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" />
          </Box>
        </Box>
    </Paper>
      
  )
}
