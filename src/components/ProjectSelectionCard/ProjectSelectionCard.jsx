import React from "react"
import {Card, CardMedia, CardContent, CardActionArea, Typography} from "@mui/material"

export default function ProjectSelectionCard (props){
  return(
    <Card elevation={10} sx={{width:{lg: 180, xs: 100}, height: {lg: "", xs:100,}, mt: {xs:1}}} >
      <CardActionArea
        onClick = {props.handleProjectSelection}
      >
        <CardMedia
          component="img"
          alt="screenshot"
          id={props.title}
          image={props.imagesrc}
        />
        <CardContent id={props.title}>
        <Typography align='center' id={props.title} variant="subtitle2" component="div" sx={{fontWeight: 'bold', display: { xs: 'none', md: 'flex' }}}>{props.title}</Typography>
        <Typography id={props.title} variant="body2" color="text.secondary" sx={{display: { xs: 'none', md: 'flex' }}}>{props.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}