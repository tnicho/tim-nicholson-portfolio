import React from 'react'
import { Paper, Typography, Box} from '@mui/material'
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


export default function EducationDisplay(props) {
  return (
    <Paper 
    elevation = {props.elevation} 
    sx={{
      margin:'10px', 
      mt: {lg:'7vh', xs:'3vh'},
      pt:{xs:'2vh'}, 
      width:{lg:'40vw', xs:'90vw'}, 
      height: {lg:'60vh', xs:'70vh'}, 
      display: 'flex', 
      flexDirection:'column', 
      justifyContent:'space-evenly'
      }}>
      <ThemeProvider theme = {theme}>
      <Typography align='center' variant='h3'>EDUCATION</Typography>
      <Box 
        sx={{
          display:'flex',
          mt:{lg:3, xs:2}
        }}
        
        >
          <Box mt={1}>
            <img height="100px" src="./Western Logo.jpg" alt='Western Logo'/>
          </Box>
        <Box >
          <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            }}
            mx={2}>
            <Typography fontWeight='bold'>Western University</Typography>
            <Box>
              <Typography align='right' fontWeight='bold'>B.Eng in Electrical Engineering</Typography>
            </Box>
          </Box>
          <Box>
            <Typography mx={2} align='left'>
              Graduated Western University with a degree in Electrical Engineering.
              Along with the math and technical skill, this is where I learned teamwork, 
              overcoming obsticles, and final push needed to complete a project or task
              that mere months ago felt undoable.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{display:'flex'}}
        my={3}
      >
        <img height="100px" src="./GA Logo.jpg" alt='General Assembly Logo'/>
        <Box>
          <Box sx={{
            display:'flex',
            justifyContent:'space-between'
            }}
            mx={2}
            >
              <Typography fontWeight='bold'>General Assembly</Typography>
              <Box>
                <Typography align='right' fontWeight='bold'>Software Engineering Intensive</Typography>
              </Box>
            </Box>
            <Box>
              <Typography align='left' mx={2}>
                3 Month intensive bootcamp consisting of over 450 hours of building 
                fluency in full-stack web development with a focus on object-oriented programming, 
                MVC Frameworks, team colaboration strategies, and best coding practices.
              </Typography>
            </Box>
          </Box>
      </Box>
      </ThemeProvider>
    </Paper>
  )
}
