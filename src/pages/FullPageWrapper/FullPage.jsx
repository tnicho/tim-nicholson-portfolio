import React from 'react';
import { Box} from '@mui/material'
import ReactFullpage from '@fullpage/react-fullpage';
import LandingPage from '../LandingPage/LandingPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import AboutMePage from '../AboutMePage/AboutMePage';
import LinksPage from '../LinksPage/LinksPage';

export const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    menu= '#myMenu'
    css3='true'
    licenseKey = {'YOUR_KEY_HERE'}
    anchors = {["landingPage", "projectPage", "aboutMePage", "linksPage"]}
    scrollingSpeed = {1000} /* Options here */
    sectionsColor={['#E1C699', '#ff5f45', '#0798ec', '#282c34']}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {/* <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <LandingPage/>
          </div> */}
          <div className="section">
            <LandingPage/>
          </div>
          <div className="section">
            <ProjectsPage/>
          </div>
          <div className="section">
            <AboutMePage/>
          </div>
          <div className="section">
            <LinksPage/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
