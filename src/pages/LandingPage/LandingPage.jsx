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
    // if (this.state.logoNumber ==='1'){
    //   this.setState({
    //    logoNumber:'2'
    // })
    // }else if (this.state.logoNumber ==='2'){
    //   this.setState({
    //   logoNumber:'3'
    // })
    // }else if (this.state.logoNumber ==='3'){
    //   this.setState({
    //   logoNumber:'4'
    // })
    // }else if (this.state.logoNumber ==='4'){
    //   this.setState({
    //   logoNumber:'5'
    // })
    // }else if (this.state.logoNumber ==='5'){
    //   this.setState({
    //   logoNumber:'1'
    // })
    // }
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
          mt: "60px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
        sx={{
          my: '10vh',
          backgroundColor: this.state.logoBackgroundColour,
          '&:hover': {
            cursor: 'pointer'
          },
        }}
          onClick= {this.handleLogoChange}
        >
          {/* <img src = {"./Logo Colours/" + this.state.logoNumber + ".png"}/> */}
          <TimLogo fill={this.state.logoFillColour} stroke={this.state.logoStrokeColour}/>
        </Box>
        <WelcomeButton/>
      </Box>
    )
  }
}