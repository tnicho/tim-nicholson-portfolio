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
        <Slide sx={{ zIndex: 'drawer'}}style={{ transitionDelay: 1000 }} direction="up" appear={true} mountOnEnter unmountOnExit in={props.bioShow} timeout={{ enter: 300, exit: 300}}>
          <Box style={{zIndex: 'drawer' }}>
            <BioDisplay/>
          </Box>
        </Slide>
        <Slide style={{ transitionDelay: 1000, zIndex: 'modal' }} direction="up" appear={true} mountOnEnter unmountOnExit in={props.technologyShow} timeout={{ enter: 300, exit: 300}}>
        <Box style={{zIndex: 'modal' }}>
          <SkillsDisplay/>
        </Box>
        </Slide>
        <Slide style={{ transitionDelay: 1000, zIndex: 'tooltip' }} direction="up" appear={true} mountOnEnter unmountOnExit in={props.educationShow} timeout={500}>
        <Box style={{zIndex: 'modal' }}>
          <EducationDisplay/>
        </Box>
        </Slide> 
    </Box>
  )
}
