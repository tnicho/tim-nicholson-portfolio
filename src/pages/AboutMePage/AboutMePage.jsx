import React, { Component, Dimensions } from "react"
import {Box, Typography} from "@mui/material"
import AboutMeMenu from "../../components/AboutMeMenu/AboutMeMenu"
import AboutMeDisplay from "../../components/AboutMeDisplay/AboutMeDisplay"
import AboutMeButtons from "../../components/AboutMeButtons/AboutMeButtons"



export default class AboutMePage extends Component{
  state = {
    bioShow: true,
    technologyShow: false,
    educationShow: false,
    elevation: 20,
  }

  finishAboutChange =() =>{
    if (this.state.showWaiting === 'education'){
      this.setState({
        bioShow: false,
        technologyShow: false,
        educationShow: true,
        error: "",
      });
    }else if (this.state.showWaiting === 'technology'){
      this.setState({
        bioShow: false,
        technologyShow: true,
        educationShow: false,
        error: "",
      });

    }else if (this.state.showWaiting === 'biography'){
      this.setState({
        bioShow: true,
        technologyShow: false,
        educationShow: false,
        error: "",
      });
    }
  }

  startAboutChange=()=>{
    this.setState({
      bioShow: false,
      technologyShow: false,
      educationShow: false,
      error: "",
    });
  }

  DeelevateChange =() =>{
    for (let i=this.state.elevation; i > 0; i--){
      this.setState({
        elevation: parseInt(i),
        
      })
    }
  }
  ElevateChange =() =>{
    for (let i=this.state.elevation; i < 21; i++){
      this.setState({
        elevation: parseInt(i),
      })
      console.log(i)
    }
  }

  handleAboutChange = (evt) => {
    this.setState({
      showWaiting: evt.target.id,
      error: "",
    });
   this.DeelevateChange()
    setTimeout(() =>this.startAboutChange(), 500)
    setTimeout(() =>this.finishAboutChange(), 1600)
    setTimeout(() =>this.ElevateChange(), 2700)
  }

  render (){
    
    return(
      <Box
      sx={{
        mt:'60px',
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box
          sx={{
            display: 'flex',
            flexDirection: {lg: 'row', xs: 'column-reverse'},
            p: '10vh',
            }}>
              <Box sx={{display: {xs: 'none'}}}>
              <AboutMeMenu handleAboutChange={this.handleAboutChange} />
              </Box>
              <Box sx={{display: {xs: 'none'}}}>
              <AboutMeButtons handleAboutChange={this.handleAboutChange} />
              </Box>
              <AboutMeDisplay 
                bioShow = {this.state.bioShow} 
                technologyShow = {this.state.technologyShow} 
                educationShow = {this.state.educationShow}
                elevation ={this.state.elevation}
              />
          </Box>
        </Box>
      </Box>
    )
  }
}