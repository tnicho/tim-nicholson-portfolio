import React from 'react'
import { Paper, Typography, Box} from '@mui/material'

export default function EducationDisplay() {
  return (
    <Paper sx={{margin:'10px'}}>
      <Typography>Education Display</Typography>
      <Typography>This page will Show my education with a brief description</Typography>
      <Box
        sx={{
          display:'flex'
        }}>
        <img height="100px" src="./Western Logo.jpg"/>
        <Box>
          <Box>
            <Typography>Western University</Typography>
            <Box>
              <Typography>B.Eng in Electrical Engineering</Typography>
            </Box>
          </Box>
          <Box>
            <Typography>
              Graduated Western University with a degree in Electrical Engineering.
              Along with the Math and technical skill, this is where I learned teamwork, 
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
          <Box>
              <Typography>General Assembly</Typography>
              <Box>
                <Typography>Software Engineering Intensive</Typography>
              </Box>
            </Box>
            <Box>
              <Typography>
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
