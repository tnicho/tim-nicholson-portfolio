import React, {Component} from "react"
import {Box, Typography} from "@mui/material"
import { red } from "@mui/material/colors"

export default class LandingPage extends Component {
  state={
    logoNumber: '1'
  }

  handleLogoChange = (evt) =>{
    if (this.state.logoNumber ==='1'){
      this.setState({
       logoNumber:'2'
    })
    }else if (this.state.logoNumber ==='2'){
      this.setState({
      logoNumber:'3'
    })
    }else if (this.state.logoNumber ==='3'){
      this.setState({
      logoNumber:'4'
    })
    }else if (this.state.logoNumber ==='4'){
      this.setState({
      logoNumber:'5'
    })
    }else if (this.state.logoNumber ==='5'){
      this.setState({
      logoNumber:'1'
    })
    }

  }
  render (){ 
    return (
      <Box
        sx={{
          mt: "60px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography>Landing Page</Typography>
        <Typography>Put a large Translucent Arrow at bottom and top of each page. Maybe</Typography>
        <Box
        sx={{
          backgroundColor: 'red',
          '&:hover': {
            cursor: 'pointer'
          },
        }}
          onClick= {this.handleLogoChange}
        >
          {/* <img src = {"./Logo Colours/" + this.state.logoNumber + ".png"}/> */}
          <img src = {"./1.svg"}/>
        </Box>
        <Typography>Welcome</Typography>
      </Box>
    )
  }
}