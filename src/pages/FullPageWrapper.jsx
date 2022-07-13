
const anchors = ["landingpage", "skillspage", "projectpage", "resumepage"]

export const FullPageWrapper = () => {
    <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    anchors = {anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={['#282c34', '#ff5f45', '#0798ec', '#282c34']}
    onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction })
    }}
    render={({ state, fullpageApi}) => {
        console.log("render prop change", state, fullpageApi);

        return (
            <div>
                <LandingPage/>
                <LandingPage/>
                <LandingPage/>
                <LandingPage/>
            </div>
        )
    }}
    />
}