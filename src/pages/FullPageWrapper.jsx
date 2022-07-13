import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import LandingPage from "../components/LandingPage";
import {Box} from "@mui/material"

const anchors = ["landingpage", "skillspage", "projectpage", "resumepage"]

const FullPageWrapper = () => {
    <ReactFullpage
    anchors = {anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#282c34", "#ff5f45", "#0798ec", "#282c34"]}
    onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction })
    }}
    render={({ state, fullpageApi}) => {
        console.log("render prop change", state, fullpageApi);

        return (
            <ReactFullpage.Wrapper>
                <h3>hi</h3>
            </ReactFullpage.Wrapper>
        )
    }}
    />
}