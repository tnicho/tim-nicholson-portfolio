import React, { Component } from "react"
import {Box, Typography} from "@mui/material"
import AboutMeMenu from "../../components/AboutMeMenu/AboutMeMenu"
import AboutMeDisplay from "../../components/AboutMeDisplay/AboutMeDisplay"


export default class AboutMePage extends Component{
  state = {
    bioShow: true,
    technologyShow: false,
    educationShow: false,
  }

  handleAboutChange = (evt) => {
    if (evt.target.id === 'education'){
      console.log('edu')
      console.log(this.state.educationShow)
      this.setState({
        bioShow: false,
        technologyShow: false,
        educationShow: true,
        error: "",
      });
    }else if (evt.target.id === 'technology'){
      console.log('tech')
      this.setState({
        bioShow: false,
        technologyShow: true,
        educationShow: false,
        error: "",
      });
    }else if (evt.target.id === 'biography'){
      console.log('bio')
      this.setState({
        bioShow: true,
        technologyShow: false,
        educationShow: false,
        error: "",
      });
    }
  }

  render (){
    return(
      <Box>
        <Typography>Skills PAge</Typography>
        <Typography>Logos and Names of Skills</Typography>
        <Box
        sx={{display: 'flex'}}>
            <AboutMeMenu handleAboutChange={this.handleAboutChange} />
            <AboutMeDisplay bioShow = {this.state.bioShow} technologyShow = {this.state.technologyShow} educationShow = {this.state.educationShow}/>
        </Box>
      </Box>
    )
  }
}