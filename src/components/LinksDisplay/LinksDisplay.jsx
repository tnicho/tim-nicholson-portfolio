import React from 'react'
import {Box, Typography} from "@mui/material"


export default function LinkDisplay() {
  return (
    <Box>
      <Typography>For more information on my please find me here.</Typography>
      <Box sx={{display:"flex"}}>
        <Box>
          <img height = "100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <Typography>Github</Typography>
        </Box>
        <Box>
          <img height = "100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
        </Box>
      </Box>
      <Typography>Or download my resume directly by clicking below</Typography>
      <Box>
      <img height = "400px" src="./PortfolioPics/Screenshots/Timothy Nicholson Resume.png" />
      </Box>
    </Box>
  )
}
