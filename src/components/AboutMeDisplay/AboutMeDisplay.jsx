import React from 'react'
import {Typography, Box, Slide} from "@mui/material"
import BioDisplay from "../../components/BioDisplay/BioDisplay"
import SkillsDisplay from "../../components/SkillsDisplay/SkillsDisplay"
import EducationDisplay from "../../components/EducationDisplay/EducationDisplay"
import { Transition } from 'react-transition-group'

export default function AboutMeDisplay(props) {

  return (
    <Box>
        <Transition direction="up" appear={true} mountOnEnter unmountOnExit in={true} timout={500}>
          <BioDisplay/>
        </Transition>
        <Slide>
          <SkillsDisplay/>
        </Slide>
        <Slide>
          <EducationDisplay/>
        </Slide> 
    </Box>
  )
}
