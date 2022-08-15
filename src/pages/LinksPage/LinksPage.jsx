import React from "react"
import {Box, Typography} from "@mui/material"
import ContactMeDisplay from "../../components/ContactMeDisplay/ContactMeDisplay"
import ResumeDisplay from "../../components/ResumeDisplay/ResumeDisplay"

export default function LinksPage(props){

    return(
        <Box>
            <Typography>Links Page</Typography>
            <Typography>Thank you for Visiting my Page!</Typography>
            <Typography>Include a thankyou and a confetti effect or fireworks or something</Typography>
            <Box sx={{display:'flex'}}>
                <ContactMeDisplay/>
                <ResumeDisplay/>
            </Box>
        </Box>
    )
}