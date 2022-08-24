import React, { Component, Dimensions } from "react"
import {Box, Typography} from "@mui/material"
import AboutMeMenu from "../../components/AboutMeMenu/AboutMeMenu"
import AboutMeDisplay from "../../components/AboutMeDisplay/AboutMeDisplay"



export default class AboutMePage extends Component{
  state = {
    bioShow: true,
    technologyShow: false,
    educationShow: false,
    zIndexBio: 'tooltip',
    zIndexTechnology: 'modal',
    zIndexEducation: 'modal',
  }


  handleAboutChange = (evt) => {
    if (evt.target.id === 'education'){
      console.log('edu')
      console.log(this.state.educationShow)
      this.setState({
        bioShow: false,
        technologyShow: false,
        educationShow: true,
        zIndexBio: 'modal',
        zIndexTechnology: 'modal',
        zIndexEducation: 'tooltip',
        error: "",
      });
    }else if (evt.target.id === 'technology'){
      console.log('tech')
      this.setState({
        bioShow: false,
        technologyShow: true,
        educationShow: false,
        zIndexBio: 1300,
        zIndexTechnology: 1500,
        zIndexEducation: 1300,
        error: "",
      });
    }else if (evt.target.id === 'biography'){
      console.log('bio')
      this.setState({
        bioShow: true,
        technologyShow: false,
        educationShow: false,
        zIndexBio: 1500,
        zIndexTechnology: 1300,
        zIndexEducation: 1300,
        error: "",
      });
    }
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
            p: '15vh',
            }}>
              <AboutMeMenu handleAboutChange={this.handleAboutChange} />
              <AboutMeDisplay 
                bioShow = {this.state.bioShow} 
                technologyShow = {this.state.technologyShow} 
                educationShow = {this.state.educationShow}
                zIndexBio = {this.state.zIndexBio}
                zIndexTechnology = {this.state.zIndexTechnology}
                zIndexEducation = {this.state.zIndexEducation}/>
          </Box>
        </Box>
      </Box>
    )
  }
}