import React, { Component, Dimensions } from "react"
import {Box, Typography} from "@mui/material"
import AboutMeMenu from "../../components/AboutMeMenu/AboutMeMenu"
import AboutMeDisplay from "../../components/AboutMeDisplay/AboutMeDisplay"



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


  // handleAboutChange = (evt) => {
  //   if (evt.target.id === 'education'){
  //     console.log('edu')
  //     console.log(this.state.educationShow)
  //     this.setState({
  //       bioShow: false,
  //       technologyShow: false,
  //       educationShow: true,
  //       zIndexBio: 'modal',
  //       zIndexTechnology: 'modal',
  //       zIndexEducation: 'tooltip',
  //       error: "",
  //     });
  //   }else if (evt.target.id === 'technology'){
  //     console.log('tech')
  //     this.setState({
  //       bioShow: false,
  //       technologyShow: false,
  //       educationShow: false,
  //       zIndexBio: 1300,
  //       zIndexTechnology: 1500,
  //       zIndexEducation: 1300,
  //       error: "",
  //     });
  //     setTimeout(1000)
  //     this.setState({
  //       bioShow: false,
  //       technologyShow: true,
  //       educationShow: false,
  //       zIndexBio: 1300,
  //       zIndexTechnology: 1500,
  //       zIndexEducation: 1300,
  //       error: "",
  //     });

  //   }else if (evt.target.id === 'biography'){
  //     console.log('bio')
  //     this.setState({
  //       bioShow: true,
  //       technologyShow: false,
  //       educationShow: false,
  //       zIndexBio: 1500,
  //       zIndexTechnology: 1300,
  //       zIndexEducation: 1300,
  //       error: "",
  //     });
  //   }
  // }

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
            p: '10vh',
            }}>
              <AboutMeMenu handleAboutChange={this.handleAboutChange} />
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