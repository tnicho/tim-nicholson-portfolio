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
      this.setState({
        bioShow: false,
        technologyShow: false,
        educationShow: true,
        error: "",
      });
    }else if (evt.target.id === 'technology'){
      this.setState({
        bioShow: false,
        technologyShow: true,
        educationShow: false,
        error: "",
      });
    }else if (evt.target.id === 'biography'){
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
            <AboutMeDisplay bioShow = "false"/>
        </Box>
      </Box>
    )
  }
}