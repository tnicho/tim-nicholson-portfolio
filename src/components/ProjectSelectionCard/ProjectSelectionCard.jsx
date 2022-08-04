import React from "react"
import {Box, Button, Card, CardMedia, CardContent, CardActions,  CardActionArea, Typography} from "@mui/material"

export default function ProjectSelectionCard (props){
  return(
    <Card sx={{width:200}}>
      <CardActionArea
        onClick = {props.handleProjectSelection}
      >
        <CardMedia
          component="img"
          alt="screenshot"
          image={props.imagesrc}
        />
        <CardContent>
          <Typography variant="h6" component="div">{props.title}</Typography>
          <Typography variant="body2" color="text.secondary">{props.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}