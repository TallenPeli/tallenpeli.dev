import { useState, useEffect } from "react";

import ErrorPage from "./ErrorPage";
import BlogCard from "../components/features/BlogCard";

import Line from "../components/ui/Line";
import TopBar from "../components/navigation/TopBar";
import SideBar from "../components/navigation/SideBar";
import PageFooter from "../components/ui/PageFooter";

import "../styles/pages/Blog.css";

import BuildInfo from "../build-info.json";

import { FiHome, FiMail, FiGithub } from "react-icons/fi";

const Blog = ({ API_ENDPOINT }) => {
  const [blogpostData, setBlogpostData] = useState([]);
  const [latestBlogPost, setLatestBlogPost] = useState(null);
  const [healthData, setHealthData] = useState({ status: "no response" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [latestBlogRes, blogRes, healthRes] = await Promise.all([
          fetch(`${API_ENDPOINT}/blogpost?id=latest`),
          fetch(`${API_ENDPOINT}/blogposts?limit=10`),
          fetch(`${API_ENDPOINT}/health`),
        ]);

        const [latestBlogJson, blogJson, healthJson] = await Promise.all([
          latestBlogRes.json(),
          blogRes.json(),
          healthRes.json(),
        ]);

        if (latestBlogJson.success) setLatestBlogPost(latestBlogJson.data);
        if (blogJson.success) setBlogpostData(blogJson.data);
        if (healthJson.status === "ok") setHealthData(healthJson);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
      title: "Home",
      url: "/",
      icon: <FiHome />,
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
    // Map the blogpost data into divs
    <div className="Blog">
      <TopBar items={TopBarItems} />
      <SideBar
        backendVersion={healthData.version}
        frontendVersion={BuildInfo.commitShort}
      />

      <div className="view">
        <div className="blogs-content">
          <div className="latest-post">
            <h1 className="header">Latest Post</h1>
            {latestBlogPost && (
              <BlogCard key={latestBlogPost.id} blog={latestBlogPost} />
            )}
          </div>
          <br />
          <Line />
          <h1 className="header">More Posts</h1>
          <div className="blogs">
            {blogpostData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default Blog;
