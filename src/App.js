import TopBar from "./components/navigation/TopBar";
import AboutMe from "./components/features/AboutMe";
import ProjectView from "./components/features/ProjectView";
import SocialsView from "./components/features/SocialsView";
import SideBar from "./components/navigation/SideBar";
import ErrorPage from "./pages/ErrorPage";

import { useEffect, useState } from "react";
import "./App.css";

// const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 whole hour
// const CACHE_KEY = "tallenportfoliocache";

const API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://api.tallenpeli.dev"
    : "http://192.168.68.66:8080";

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else {
  console.log("Development mode");
}

const REPORTS_ENDPOINT = "/report-downtime";

// Report the error type and corresponding data
function Report(type, data) {
  // Send a report to the server endpoint /report-downtime
  const sendReport = async () => {
    try {
      if (type === "downtime") {
        const response = await fetch(`${API_ENDPOINT}/report-downtime`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        if (!responseData.success) {
          console.error("Failed to report downtime:", responseData.error);
        }
      }
    } catch (error) {
      console.error("Failed to report downtime:", error);
    }
  };

  return sendReport;
}

function App() {
  const [aboutData, setAboutData] = useState(null);
  const [socialsData, setSocialsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
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
        const [aboutRes, socialsRes, projectsRes] = await Promise.all([
          fetch(`${API_ENDPOINT}/about`),
          fetch(`${API_ENDPOINT}/socials`),
          fetch(`${API_ENDPOINT}/projects`),
        ]);

        const [aboutJson, socialsJson, projectsJson] = await Promise.all([
          aboutRes.json(),
          socialsRes.json(),
          projectsRes.json(),
        ]);

        if (aboutJson.success) setAboutData(aboutJson.data);
        if (socialsJson.success) setSocialsData(socialsJson.data);
        if (projectsJson.success) setProjectsData(projectsJson.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    console.error("Error fetching data:", error);
    return <ErrorPage error={error} />;
  }

  return (
    <div className="App">
      <TopBar />
      <SideBar />

      <AboutMe aboutData={aboutData} />
      <SocialsView socials={socialsData} />
      <ProjectView projects={projectsData} />
      <div className="footer">
        <p>© {new Date().getFullYear()} Tallen Pelissero</p>
      </div>
    </div>
  );
}

export default App;
