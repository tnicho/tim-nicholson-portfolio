import React, { Component } from "react"
import { Box} from "@mui/material"
import ProjectSelection from "../../components/ProjectSelection/ProjectSelection"
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay"

export default class ProjectsPage extends Component{
  state = {
    project: {
      title: "AMPLESS",
      description: "Try out audio effects with no pedals. Full CRUD, MERN stack web app for desktop using the WEB Audio API to manipulate audio inputs",
      tech: "MongoDB, Express, React, Node, Web Audio API, Material UI, Heroku, VSCode",
      linkDeployed: "https://ampless.herokuapp.com/",
      linkGithub: "https://github.com/tnicho/Ampless",
      screenshots: ["./PortfolioPics/Screenshots/Ampless Login.png",
      "./PortfolioPics/Screenshots/Ampless Signup.png", 
      "./PortfolioPics/Screenshots/Ampless Main.png"]
    }
  };

  handleProjectSelection = (evt) => {
    console.log(evt)
    const liftOff ={
      title: "LIFT OFF",
      description: "Complete a series of reflex-based, animated mini-games to complete a clean and press. Difficulty is increased and the high score is recorded",
      tech: "HTML, CSS, JavaScript, GitHub",
      linkDeployed: "https://tnicho.github.io/BrowserGame-LiftOff/",
      linkGithub: "https://github.com/tnicho/BrowserGame-LiftOff",
      screenshots: ["./PortfolioPics/Screenshots/Lift Off Main 1.png",
      "./PortfolioPics/Screenshots/Lift Off Main 2.png",
      "./PortfolioPics/Screenshots/Lift off Mobile.png"]
    }
    const myYearInMedia ={
      title: "MY YEAR IN MEDIA",
      description: "Use My Year In Media to track and review books read and movies watched. RESTful, full CRUD web app that is compatible with desktop and mobile. Made with Google books and TMDB APIs.",
      tech: "Express, Node.js, MongoDB, HTML, CSS, Javascript, OAuth, Google Books API, TMDB API, Heroku",
      linkDeployed: "https://myyearinmedia.herokuapp.com/",
      linkGithub: "https://github.com/tnicho/myyearofmedia",
      screenshots: ["./PortfolioPics/Screenshots/MYIM Books.png",
      "./PortfolioPics/Screenshots/MYIM Movies.png",]
    }
    const digipetsForever ={
      title: "DIGIPETS FOREVER",
      description: "A full CRUD mobile app in which you create and care for your pet.",
      tech: "Python, Django, HTML, CSS, TailwindCSS, PostgreSQL, Adobe Illustrator, Figma, Zeplin, Heroku",
      linkDeployed: "https://digipetsforever.herokuapp.com/",
      linkGithub: "https://github.com/tnicho/Digipets",
      screenshots: ["./PortfolioPics/Screenshots/Digipets Login.png",
      "./PortfolioPics/Screenshots/Digipets Mains.png",
      "./PortfolioPics/Screenshots/Digipets Update.png"]
    }
    const ampless ={
      title: "AMPLESS",
      description: "Try out audio effects with no pedals. Full CRUD, MERN stack web app for desktop using the WEB Audio API to manipulate audio inputs",
      tech: "MongoDB, Express, React, Node, Web Audio API, Material UI, Heroku, VSCode",
      linkDeployed: "https://ampless.herokuapp.com/",
      linkGithub: "https://github.com/tnicho/Ampless",
      screenshots: ["./PortfolioPics/Screenshots/Ampless Login.png",
      "./PortfolioPics/Screenshots/Ampless Signup.png", 
      "./PortfolioPics/Screenshots/Ampless Main.png"]
    }
    console.log("hello")
    // Animate out the project display, change values, annimate them in
    if (evt.target.id === "Lift Off"){
      this.setState({
        project: liftOff,
        error: "",
      });
    }else if (evt.target.id === "My Year Of Media"){
      this.setState({
        project: myYearInMedia,
        error: "",
      });
    }else if (evt.target.id === "Digipets Forever"){
      this.setState({
        project: digipetsForever,
        error: "",
      });
    }else if (evt.target.id === "AMPLESS"){
      this.setState({
        project: ampless,
        error: "",
      });
    }
   


  };

  render(){
    return(
      <Box
        sx={{
          mt: '80px'
        }}
      >
        <ProjectSelection handleProjectSelection = {this.handleProjectSelection}/>
        <ProjectDisplay project= {this.state.project}/>
      </Box>
    )
  }
}