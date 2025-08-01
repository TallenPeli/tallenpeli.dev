import TopBar from "../components/navigation/TopBar";
import AboutMe from "../components/features/AboutMe";
import ProjectView from "../components/features/ProjectView";
import SocialsView from "../components/features/SocialsView";
import SideBar from "../components/navigation/SideBar";
import BuildInfo from "../build-info.json";

const Home = ({ healthData, aboutData, socialsData, projectsData }) => {
  return (
    <div className="App">
      {/*<Banner />*/}
      <TopBar />
      <SideBar
        backendVersion={healthData.version}
        frontendVersion={BuildInfo.commitShort}
      />

      <AboutMe aboutData={aboutData} />
      <SocialsView socials={socialsData} />
      <ProjectView projects={projectsData} />
      <div className="footer">
        <p>© {new Date().getFullYear()} Tallen Pelissero</p>
      </div>
    </div>
  );
};

export default Home;
