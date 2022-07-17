import React from "react"
import {Box, Card, Typography} from "@mui/material"

export default function ProjectSelectionCard (props){
    return(
        <Card sx={{width:250}}>
            <Typography>{props.title}</Typography>
        </Card>
    )
}