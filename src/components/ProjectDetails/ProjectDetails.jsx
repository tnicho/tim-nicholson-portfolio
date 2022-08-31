import React from 'react'
import {Box, Typography, Link, Paper} from '@mui/material'

export default function ProjectDetails(props) {
  return (
    <Paper 
    elevation={20}
    sx={{
      mr: 20,
      my: 5,
      bgcolor: 'primary.main',
      height: 360,
      width: "20vw"
    }}
    >
      <Typography sx={{
        color: "secondary.light", 
        fontWeight:'bold', 
        letterSpacing: 3
        }} 
        variant="h4">{props.title}</Typography>
      <Box
        sx={{
          bgcolor: "primary.light",
          borderBottom: 1,
          height:'26vh',
        }}>
          <Typography sx={{fontWeight:'bold'}}>Description</Typography>
          <Typography align='left' sx={{px:1}}>{props.description}</Typography>
      </Box>
      <Box
        sx={{
            bgcolor: 'primary.main',
            color: "secondary.light",
            borderBottom: 1,
            height:'10vh'
          }}>
            <Typography>Technology Used</Typography>
            <Typography> {props.tech}</Typography>
      </Box>
      <Box
        sx={{
            background: "primary.light",
            pb: 1
          }}>
            <Typography>Links</Typography>
            <Box
              sx={{
                  background: "primary.main",
                  display: "flex",
                  justifyContent: 'space-around',
                }}>
            <Link href={props.linkDeployed}>Deployed App</Link> <Link href={props.linkGithub}>Github</Link>
            </Box>
      </Box>
    </Paper>
  )
}
