import React from 'react'
import {Box, Typography, Link, Paper} from '@mui/material'

export default function ProjectDetails(props) {
  return (
    <Paper 
    elevation={20}
    sx={{
      mr: {lg: 15},
      mt:'20px',
      height: {lg:'50vh', sm: '25vh'},
      width: {lg:"40vw", sm:"80vw"}
    }}
    >
      <Typography sx={{
        bgcolor: 'primary.main',
        color: "secondary.light", 
        fontWeight:'bold', 
        letterSpacing: 2
        }} 
        align= 'center'
        variant="h4">{props.title}</Typography>
      <Box
        sx={{
          bgcolor: "secondary.light",
          borderBottom: 1,
          height:'22vh',
        }}>
          <Typography align= 'center' sx={{fontWeight:'bold'}}>Description</Typography>
          <Typography align='left' sx={{px:1}}>{props.description}</Typography>
      </Box>
      <Box
        sx={{
            bgcolor: 'primary.main',
            color: "secondary.light",
            borderBottom: 1,
            height:'12vh'
          }}>
            <Typography align= 'center' sx={{fontWeight:'bold'}}>Technology Used</Typography>
            <Typography align='left' sx={{p:1}}> {props.tech}</Typography>
      </Box>
      <Box
        sx={{
            
            background: "secondary.main",
            pb: 1
          }}>
            <Typography align= 'center' sx={{fontWeight:'bold'}}>Links</Typography>
            <Box
              sx={{
                  background: "secondary.main",
                  display: "flex",
                  justifyContent: 'space-around',
                }}>
            <Link sx={{fontWeight: 'bold'}} href={props.linkDeployed}>Deployed App</Link> <Link sx={{fontWeight: 'bold', pr: 3}} href={props.linkGithub}>Github</Link>
            </Box>
      </Box>
    </Paper>
  )
}
