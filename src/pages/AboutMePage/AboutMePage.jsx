import React from "react"
import {Box, Typography} from "@mui/material"
import AboutMeMenu from "../../components/AboutMeMenu/AboutMeMenu"
import BioDisplay from "../../components/BioDisplay/BioDisplay"
import SkillsDisplay from "../../components/SkillsDisplay/SkillsDisplay"
import EducationDisplay from "../../components/EducationDisplay/EducationDisplay"

export default function AboutMePage (props){
    return(
        <Box>
            <Typography>Skills PAge</Typography>
            <Typography>Logos and Names of Skills</Typography>
            <AboutMeMenu/>
            <BioDisplay/>
            <SkillsDisplay/>
            <EducationDisplay/> 
        </Box>
    )
}