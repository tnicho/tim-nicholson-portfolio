import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import LandingPage from '../LandingPage/LandingPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import SkillsPage from '../SkillsPage/SkillsPage';
import LinksPage from '../LinksPage/LinksPage';

export const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    sectionsColor={['#282c34', '#ff5f45', '#0798ec', '#282c34']}
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
            <ProjectsPage/>
          </div>
          <div className="section">
            <SkillsPage/>
          </div>
          <div className="section">
            <LinksPage/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
