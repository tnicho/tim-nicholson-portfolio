import React from 'react'
import {Box, Typography} from "@mui/material"


export default function LinkDisplay() {
  return (
    <Box>
      <Box>
        <img height = "100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        <Typography>Github</Typography>
      </Box>
      <Box>
        <img height = "100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
      </Box>
    </Box>
  )
}
