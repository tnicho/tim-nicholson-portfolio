import React, {Component} from "react"
import {Box, Typography} from "@mui/material"

export default class LandingPage extends Component {
  state={
    logoNumber: '1'
  }
  render (){ 
    return (
      <Box
        sx={{
          mt: "60px"
        }}
      >
        <Typography>Landing Page</Typography>
        <Typography>Put a large Translucent Arrow at bottom and top of each page. Maybe</Typography>
        <img src = {"./Logo Colours/" + this.state.logoNumber + ".png"}/>
        <Typography>Welcome</Typography>
      </Box>
    )
  }
}