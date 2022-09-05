import React, {Component} from "react"
import {Box, Typography, Icon} from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import randomColor from "randomcolor"
import {ReactComponent as TimLogo} from '../../1.svg';
// import {ReactElement as TimLogo} from '../../1.svg';
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
          <TimLogo style={{height: {lg:'60vh', xs:'40vh'}, width: '70vw'}} fill={this.state.logoFillColour} stroke={this.state.logoStrokeColour}/>
        </Box>
        <ArrowUpwardIcon/>
        <Typography>Click These</Typography>
        <ArrowDownwardIcon/>
        <WelcomeButton/>
      </Box>
    )
  }
}