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
      ml: '10vw'
    }}
    >
        <Slide sx={{ zIndex: 'tooltip'}} direction="up" appear={true} mountOnEnter unmountOnExit in={props.bioShow} timeout={{ enter: 1000, exit: 0}}>
          <Box  sx={{ zIndex: 'tooltip'}}>
            <BioDisplay/>
          </Box>
        </Slide>
        <Slide sx={{ zIndex: 'modal'}} direction="up" appear={true} mountOnEnter unmountOnExit in={props.technologyShow} timeout={{ enter: 1000, exit: 0}}>
        <Box  sx={{ zIndex: 'modal'}}>
          <SkillsDisplay/>
        </Box>
        </Slide>
        <Slide sx={{ zIndex: 'drawer'}} direction="up" appear={true} mountOnEnter unmountOnExit in={props.educationShow} timeout={{ enter: 1000, exit: 0}}>
        <Box  sx={{ zIndex: 'drawer'}} style={{zIndex: 'drawer' }}>
          <EducationDisplay/>
        </Box>
        </Slide> 
    </Box>
  )
}
