import React, { Component } from "react"
import {Typography, Box} from "@mui/material"
import ProjectSelection from "../../components/ProjectSelection/ProjectSelection"
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay"

export default class ProjectsPage extends Component{
  state = {
    project: {title: "AMPLESS",
    description: "AMPLESS description",
    tech: "AMPLESS tech",
    linkDeployed: "https://tnicho.github.io/BrowserGame-LiftOff/",
    linkGithub: "https://github.com/tnicho/BrowserGame-LiftOff",
    screenshots: ["./PortfolioPics/Screenshots/Ampless Login.png",
    "./PortfolioPics/Screenshots/Ampless Signup.png", 
    "./PortfolioPics/Screenshots/Ampless Main.png"]}
  };

  handleProjectSelection = (evt) => {
    console.log(evt)
    const liftoff ={
      title: "LIFT OFF",
      description: "liftoff description",
      tech: "liftoff tech",
      linkDeployed: "https://tnicho.github.io/BrowserGame-LiftOff/",
      linkGithub: "https://github.com/tnicho/BrowserGame-LiftOff",
      screenshots: []
    }
    const myYearInMedia ={
      title: "MY YEAR IN MEDIA",
      description: "myim description",
      tech: "myim tech",
      linkDeployed: "https://tnicho.github.io/BrowserGame-LiftOff/",
      linkGithub: "https://github.com/tnicho/BrowserGame-LiftOff",
      screenshots: []
    }
    const digipetsForever ={
      title: "DIGIPETS FOREVER",
      description: "DIGIPETS FOREVER description",
      tech: "DIGIPETS FOREVER tech",
      linkDeployed: "https://tnicho.github.io/BrowserGame-LiftOff/",
      linkGithub: "https://github.com/tnicho/BrowserGame-LiftOff"
    }
    const ampless ={
      title: "AMPLESS",
      description: "AMPLESS description",
      tech: "AMPLESS tech",
      linkDeployed: "https://tnicho.github.io/BrowserGame-LiftOff/",
      linkGithub: "https://github.com/tnicho/BrowserGame-LiftOff",
      screenshots: ["./PortfolioPics/Screenshots/Ampless Login.png",
      "./PortfolioPics/Screenshots/Ampless Signup.png", 
      "./PortfolioPics/Screenshots/Ampless Main.png"]
    }
    console.log("hello")
    // Animate out the project display, change values, annimate them in
    if (evt.target.innerHTML === "My Year Of Media"){
      console.log("inside if")
      this.setState({
        project: myYearInMedia,
        error: "",
      });
    }
   


  };

  render(){
    return(
      <Box>
        <Typography>Projects  Page</Typography>
        {/* <Typography>Uses a  slider for the projects you present</Typography>
        <Typography>Show Options along the bottom as cards and selected as larger above with info and links</Typography>
        <Typography>Have show include a Slider of Screenshots</Typography>
        <Typography>Or USe Animations. Slide out the main slide(component) and slide in the selected while using React-animations to show selected square</Typography> */}
        <ProjectSelection handleProjectSelection = {this.handleProjectSelection}/>
        <ProjectDisplay project= {this.state.project}/>
      </Box>
    )
  }
}