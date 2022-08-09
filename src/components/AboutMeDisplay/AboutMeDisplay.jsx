import React from 'react'
import {Typography, Box, Slide} from "@mui/material"
import BioDisplay from "../../components/BioDisplay/BioDisplay"
import SkillsDisplay from "../../components/SkillsDisplay/SkillsDisplay"
import EducationDisplay from "../../components/EducationDisplay/EducationDisplay"
import { Transition } from 'react-transition-group'

export default function AboutMeDisplay(props) {

  return (
    <Box>
        <Slide direction="up" appear={true} mountOnEnter unmountOnExit in={props.bioShow} timeout={500}>
          <Box>
            <BioDisplay/>
          </Box>
        </Slide>
        <Slide direction="up" appear={true} mountOnEnter unmountOnExit in={props.technologyShow} timeout={500}>
        <Box>
          <SkillsDisplay/>
        </Box>
        </Slide>
        <Slide direction="up" appear={true} mountOnEnter unmountOnExit in={props.educationShow} timeout={500}>
        <Box>
          <EducationDisplay/>
        </Box>
        </Slide> 
    </Box>
  )
}
