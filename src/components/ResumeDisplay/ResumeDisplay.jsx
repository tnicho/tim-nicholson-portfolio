import React from 'react'
import { Paper } from '@mui/material'
import LinkDisplay from "../../components/LinksDisplay/LinksDisplay"

export default function ResumeDisplay() {
  return (
    <Paper
      sx={{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mx: "5vw",
        my: '7vh',
        py: '2vh',
        width: "50vw",
        bgcolor: 'primary.main',
      }}
    >
        <LinkDisplay/>
    </Paper>
  )
}
