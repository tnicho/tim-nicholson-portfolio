import React from 'react'
import { Box } from '@mui/material'
import LinkDisplay from "../../components/LinksDisplay/LinksDisplay"

export default function ResumeDisplay() {
  return (
    <Box
      sx={{
        m: "5vw",
        width: "50vw",
        bgcolor: 'purple'
      }}
    >
        ResumeDisplay
        <LinkDisplay/>
    </Box>
  )
}
