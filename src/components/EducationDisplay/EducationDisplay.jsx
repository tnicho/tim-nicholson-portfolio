import React from 'react'
import { Paper, Typography, Box} from '@mui/material'

export default function EducationDisplay() {
  return (
    <Paper sx={{margin:'10px'}}>
      <Typography variant='h3'>EDUCATION</Typography>
      <Box sx={{display:'flex'}}>
        <img height="100px" src="./Western Logo.jpg"/>
        <Box>
          <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            }}>
            <Typography fontWeight='bold'>Western University</Typography>
            <Box>
              <Typography fontWeight='bold'>B.Eng in Electrical Engineering</Typography>
            </Box>
          </Box>
          <Box>
            <Typography align='left'>
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
      >
        <img height="100px" src="./GA Logo.jpg"/>
        <Box>
          <Box sx={{
            display:'flex',
            justifyContent:'space-between'
            }}>
              <Typography fontWeight='bold'>General Assembly</Typography>
              <Box>
                <Typography fontWeight='bold'>Software Engineering Intensive</Typography>
              </Box>
            </Box>
            <Box>
              <Typography align='left'>
                3 Month intensive bootcamp consisting of over 450 hours of building 
                fluency in full-stack web development with a focus on object-oriented programming, 
                MVC Frameworks, team colaboration strategies, and best coding practices.
              </Typography>
            </Box>
          </Box>
      </Box>
    </Paper>
  )
}
