import React from 'react'
import {Typography, Box, Slide, Tooltip} from "@mui/material"
import BioDisplay from "../../components/BioDisplay/BioDisplay"
import SkillsDisplay from "../../components/SkillsDisplay/SkillsDisplay"
import EducationDisplay from "../../components/EducationDisplay/EducationDisplay"

export default function AboutMeDisplay(props) {

  return (
    <Box
    sx={{
      width: '60vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
        <Slide style={{ transitionDelay: 1000, zIndex: 'tooltip' }} direction="up" appear={true} mountOnEnter unmountOnExit in={props.bioShow} timeout={{ enter: 300, exit: 500}}>
          <Box>
            <BioDisplay/>
          </Box>
        </Slide>
        <Slide style={{ transitionDelay: 1000, zIndex: 'snackbar' }} direction="up" appear={true} mountOnEnter unmountOnExit in={props.technologyShow} timeout={{ enter: 300, exit: 500}}>
        <Box>
          <SkillsDisplay/>
        </Box>
        </Slide>
        <Slide style={{ transitionDelay: 1000, zIndex: 'modal' }} direction="up" appear={true} mountOnEnter unmountOnExit in={props.educationShow} timeout={500}>
        <Box>
          <EducationDisplay/>
        </Box>
        </Slide> 
    </Box>
  )
}
