import React from 'react'
import { Box } from '@mui/material'
import LinkDisplay from "../../components/LinksDisplay/LinksDisplay"

export default function ResumeDisplay() {
  return (
    <Box
      sx={{
        mx: "5vw",
        mt: '10vh',
        mb: "5vh",
        width: "50vw",
        bgcolor: 'inherit'
      }}
    >
        <LinkDisplay/>
    </Box>
  )
}
