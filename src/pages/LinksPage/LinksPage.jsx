import React from "react"
import {Box} from "@mui/material"
import ContactMeDisplay from "../../components/ContactMeDisplay/ContactMeDisplay"
import ResumeDisplay from "../../components/ResumeDisplay/ResumeDisplay"

export default function LinksPage(props){

    return(
        <Box
            sx={{
                mt: '60px'
            }}
        >
            <Box sx={{display:'flex'}}>
                <ContactMeDisplay/>
                <ResumeDisplay/>
            </Box>
        </Box>
    )
}