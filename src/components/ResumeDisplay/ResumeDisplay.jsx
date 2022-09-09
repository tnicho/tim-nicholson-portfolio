import React from 'react'
import { Box, Paper } from '@mui/material'
import LinkDisplay from "../../components/LinksDisplay/LinksDisplay"
import LinkDisplayMobile from "../../components/LinksDisplayMobile/LinksDisplayMobile"

export default function ResumeDisplay() {
  return (
    <Paper
      sx={{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mx: "5vw",
        my: {lg:'7vh',xs:'2vh'},
        py: '2vh',
        width: {lg:"50vw", xs: '90vw'},
        bgcolor: 'primary.main',
      }}
    >
    <Box sx={{display: {lg: 'flex', xs: 'none'}}}>
      <LinkDisplay/>
    </Box>
    <Box sx={{display: {sm: 'none'}}}>
    <LinkDisplayMobile/>
    </Box>
      
    </Paper>
  )
}
