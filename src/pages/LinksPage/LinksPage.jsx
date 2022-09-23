import React from "react"
import {Box} from "@mui/material"
import ContactMeDisplay from "../../components/ContactMeDisplay/ContactMeDisplay"
import ContactMeDisplayMobile from "../../components/ContactMeDisplayMobile/ContactMeDisplayMobile"
import ResumeDisplay from "../../components/ResumeDisplay/ResumeDisplay"
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette:{
    primary:{
      // main: '#1B721B'
      main: '#002E20'
    },
    secondary:{
      light: '#FFFFFF',
      main: '#D3D3D3',
    }
  },
})

theme = responsiveFontSizes(theme);

export default function LinksPage(props){

  return(
    <Box
      sx={{
          mt: '60px'
      }}
    >
      <ThemeProvider theme = {theme}>
      <Box sx={{display:'flex', flexDirection:{md:'row', xs: 'column-reverse'}}}>
        <Box sx={{display: {md: 'flex', xs: 'none'}}}>
          <ContactMeDisplay/>
        </Box>
        <Box sx={{display: {md: 'none'}}}>
          <ContactMeDisplayMobile/>
        </Box>
          <ResumeDisplay/>
      </Box>
      </ThemeProvider>
    </Box>
  )
}