import React from 'react'
import {Box, Typography, Link, Paper} from '@mui/material'

export default function ProjectDetails(props) {
  return (
    <Paper 
    elevation={10}
    sx={{
      mr: 20,
      my: 5,
      background: "blue",
      height: 360,
      width: "20vw"
    }}
    >
      <Typography sx={{color: "white", fontWeight:'bold', letterSpacing: 3}} variant="h4">{props.title}</Typography>
      <Box
        sx={{
          background: "#ADD8E6",
          borderBottom: 1,
          height:'26vh',
        }}>
          <Typography sx={{fontWeight:'bold'}}>Description</Typography>
          <Typography align='left' sx={{px:1}}>{props.description}</Typography>
      </Box>
      <Box
        sx={{
            background: "#00008B",
            color: "white",
            borderBottom: 1,
            height:'10vh'
          }}>
            <Typography>Technology Used</Typography>
            <Typography> {props.tech}</Typography>
      </Box>
      <Box
        sx={{
            background: "#ADD8E6",
            pb: 1
          }}>
            <Typography>Links</Typography>
            <Box
              sx={{
                  background: "#ADD8E6",
                  display: "flex",
                  justifyContent: 'space-around',
                }}>
            <Link href={props.linkDeployed}>Deployed App</Link> <Link href={props.linkGithub}>Github</Link>
            </Box>
      </Box>
    </Paper>
  )
}
