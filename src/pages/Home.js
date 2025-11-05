// Features
import TopBar from "../components/navigation/TopBar";
import AboutMe from "../components/features/AboutMe";
import ProjectView from "../components/features/ProjectView";
import SocialsView from "../components/features/SocialsView";
import BlogView from "../components/features/BlogView";
import SideBar from "../components/navigation/SideBar";
import PageFooter from "../components/ui/PageFooter";

import { FiCoffee, FiMail, FiGithub } from "react-icons/fi";

// Data
import BuildInfo from "../build-info.json";

// Pages
import ErrorPage from "./ErrorPage";

import { useEffect, useState } from "react";

import "../styles/pages/Home.css";

// const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 whole hour
// const CACHE_KEY = "tallenportfoliocache";

const Home = ({ API_ENDPOINT }) => {
  const [aboutData, setAboutData] = useState(null);
  const [socialsData, setSocialsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [healthData, setHealthData] = useState({ status: "no response" });
  const [blogpostsData, setBlogpostsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Save the cache function
  // const saveCache = useCallback((about, socials, projects) => {
  //   localStorage.setItem(
  //     CACHE_KEY,
  //     JSON.stringify({
  //       aboutData: aboutData,
  //       socialsData: socialsData,
  //       projectsData: projectsData,
  //       timestamp: Date.now(),
  //     }),
  //   );
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutRes, socialsRes, projectsRes, healthRes, blogpostsRes] =
          await Promise.all([
            fetch(`${API_ENDPOINT}/about`),
            fetch(`${API_ENDPOINT}/socials`),
            fetch(`${API_ENDPOINT}/projects`),
            fetch(`${API_ENDPOINT}/health`),
            fetch(`${API_ENDPOINT}/blogposts?limit=4`),
          ]);

        const [
          aboutJson,
          socialsJson,
          projectsJson,
          healthJson,
          blogpostsJson,
        ] = await Promise.all([
          aboutRes.json(),
          socialsRes.json(),
          projectsRes.json(),
          healthRes.json(),
          blogpostsRes.json(),
        ]);

        if (aboutJson.success) setAboutData(aboutJson.data);
        if (socialsJson.success) setSocialsData(socialsJson.data);
        if (projectsJson.success) setProjectsData(projectsJson.data);
        if (blogpostsJson.success) setBlogpostsData(blogpostsJson.data);
        setHealthData(healthJson);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_ENDPOINT]);

  if (loading) {
    return (
      <div className="loading-page">
        <div className="loading-shape"></div>
        <span className="accent-text">Loading</span>
      </div>
    );
  }

  if (healthData.status !== "ok") {
    return <ErrorPage error={null} healthData={healthData} />;
  }

  if (error) {
    console.error("Error fetching data:", error);
    return <ErrorPage error={error} healthData={healthData} />;
  }

  const TopBarItems = [
    {
      title: "Blog",
      url: "/#/blog",
      icon: <FiCoffee />,
    },
    {
      title: "Contact me",
      url: "mailto:mail@tallenpeli.dev", // a very cool email address
      icon: <FiMail />,
    },
    {
      title: "Github",
      url: "https://github.com/TallenPeli",
      icon: <FiGithub />,
    },
  ];

  return (
    <div className="Home">
      <TopBar items={TopBarItems} />
      <SideBar
        backendVersion={healthData?.version}
        frontendVersion={BuildInfo.commitShort}
      />
      <AboutMe aboutData={aboutData} />
      <SocialsView socials={socialsData || []} />
      <ProjectView projects={projectsData || []} />
      <BlogView blogposts={blogpostsData || []} />
      <PageFooter />
    </div>
  );
};

export default Home;
