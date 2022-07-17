import React from "react"
import {Box, Card, CardMedia, CardContent, Typography} from "@mui/material"

export default function ProjectSelectionCard (props){
  return(
    <Card sx={{width:250}}>
      <CardMedia
        component="img"
        image={props.imagesrc}
      />
      <CardContent>
        <Typography>{props.title}</Typography>
      </CardContent>
    </Card>
  )
}