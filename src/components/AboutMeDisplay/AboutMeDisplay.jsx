import React from 'react'
import {Typography, Box, Slide} from "@mui/material"
import BioDisplay from "../../components/BioDisplay/BioDisplay"
import SkillsDisplay from "../../components/SkillsDisplay/SkillsDisplay"
import EducationDisplay from "../../components/EducationDisplay/EducationDisplay"

export default function AboutMeDisplay(props) {

  return (
    <Box>
        <Slide direction="up" mountOnEnter unmountOnExit in={props.showBio}>
          <BioDisplay/>
        </Slide>
        <Slide>
          <SkillsDisplay/>
        </Slide>
        <Slide>
          <EducationDisplay/>
        </Slide> 
    </Box>
  )
}
