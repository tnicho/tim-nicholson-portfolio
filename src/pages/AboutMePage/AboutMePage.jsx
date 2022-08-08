import React from "react"
import {Box, Typography} from "@mui/material"
import AboutMeMenu from "../../components/AboutMeMenu/AboutMeMenu"
import AboutMeDisplay from "../../components/AboutMeDisplay/AboutMeDisplay"


export default function AboutMePage (props){
    return(
        <Box>
            <Typography>Skills PAge</Typography>
            <Typography>Logos and Names of Skills</Typography>
            <AboutMeMenu/>
            <AboutMeDisplay/>

        </Box>
    )
}