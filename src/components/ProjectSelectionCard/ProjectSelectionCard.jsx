import React from "react"
import {Box, Button, Card, CardMedia, CardContent, CardActions,  CardActionArea, Typography} from "@mui/material"

export default function ProjectSelectionCard (props){
  return(
    <Card elevation={10} sx={{width:180}} >
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
          
          {/* {[theme.breakpoints.down('md')] ?
            <Typography align='center' id={props.title} variant="subtitle2" component="div" sx={{fontWeight: 'bold'}}>{props.title}</Typography>
            : <Typography align='center' id={props.title} variant="subtitle2" component="div" sx={{fontWeight: 'bold'}}>it worked</Typography>
           } */}
          <Typography id={props.title} variant="body2" color="text.secondary">{props.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}