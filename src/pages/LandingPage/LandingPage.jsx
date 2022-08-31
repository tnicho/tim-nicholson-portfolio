import React, {Component} from "react"
import {Box, Typography} from "@mui/material"
import randomColor from "randomcolor"
import {ReactComponent as TimLogo} from '../../1.svg';
import WelcomeButton from "../../components/WelcomeButton/WelcomeButton";



export default class LandingPage extends Component {
  state={
    logoNumber: '1',
    logoBackgroundColour: 'white',
    logoFillColour: 'black',
    logoStrokeColour: "black"
  }
  

  handleLogoChange = (evt) =>{
    const newBackgroundColor = randomColor()
    const newFillColor = randomColor()
    const newStrokeColor = randomColor()
    this.setState({
         logoBackgroundColour: newBackgroundColor,
         logoFillColour: newFillColor,
         logoStrokeColour: newStrokeColor
      })

  }
  render (){ 
    
    return (
      <Box
        sx={{
          mt: "40px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
        sx={{
          my: '5vh',
          backgroundColor: this.state.logoBackgroundColour,
          '&:hover': {
            cursor: 'pointer'
          },
        }}
          onClick= {this.handleLogoChange}
        >
          <TimLogo fill={this.state.logoFillColour} stroke={this.state.logoStrokeColour}/>
        </Box>
        <WelcomeButton/>
      </Box>
    )
  }
}