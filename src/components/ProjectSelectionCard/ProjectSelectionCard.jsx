import React from "react"
import {Box, Card, CardMedia, CardContent, Typography} from "@mui/material"

export default function ProjectSelectionCard (props){
  return(
    <Card sx={{width:250}}>
      <CardMedia
        component="img"
        alt="screenshot"
        height="175"
        image={props.imagesrc}
      />
      <CardContent>
        <Typography variant="h5" component="div">{props.title}</Typography>
        <Typography variant="body2" color="text.secondary">{props.description}</Typography>
        <Typography variant="body2" color="text.secondary">--------------------------------------------</Typography>
        <Typography variant="body2" color="text.secondary">{props.technologies}</Typography>
      </CardContent>
    </Card>
  )
}