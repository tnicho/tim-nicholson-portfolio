import React from 'react'
import {Box, Slide} from "@mui/material"
import BioDisplay from "../../components/BioDisplay/BioDisplay"
import SkillsDisplay from "../../components/SkillsDisplay/SkillsDisplay"
import EducationDisplay from "../../components/EducationDisplay/EducationDisplay"

export default function AboutMeDisplay(props) {

  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent:'center',
      width: {lg:'60vw', xs: '100vw'},
      ml: {lg:'10vw'}
    }}
    >
        <Slide direction="left" appear={true} mountOnEnter unmountOnExit in={props.bioShow} timeout={{ enter: 1000, exit: 1000}}>
          <Box>
            <BioDisplay elevation={props.elevation}/>
          </Box>
        </Slide>
        <Slide direction="left" appear={true} mountOnEnter unmountOnExit in={props.technologyShow} timeout={{ enter: 1000, exit: 1000}}>
        <Box >
          <SkillsDisplay elevation={props.elevation}/>
        </Box>
        </Slide>
        <Slide direction="left" appear={true} mountOnEnter unmountOnExit in={props.educationShow} timeout={{ enter: 1000, exit: 1000}}>
        <Box >
          <EducationDisplay elevation={props.elevation}/>
        </Box>
        </Slide> 
    </Box>
  )
}
