import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/navigation/TopBar";

import {
  FiHome,
  FiMail,
  FiGithub,
  FiEye,
  FiCoffee,
  FiThumbsUp,
  FiThumbsDown,
} from "react-icons/fi";

import "../styles/pages/BlogPost.css";
import SideBar from "../components/navigation/SideBar";
import Line from "../components/ui/Line";
import PageFooter from "../components/ui/PageFooter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ErrorPage from "./ErrorPage";
import BlogCard from "../components/features/BlogCard";

function feedbackMessage(success) {
  const feedbackElement = document.getElementsByClassName("feedback")[0];
  if (success) {
    feedbackElement.innerHTML = "<h3>Thanks for your feedback!</h3>";
  } else {
    feedbackElement.innerHTML = "<h3>Thanks for your feedback! (again)</h3>";
  }
}

async function likePost(postId, API_ENDPOINT, TOKEN) {
  try {
    const response = await fetch(`${API_ENDPOINT}/blogpost/like?id=${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${TOKEN}`,
      },
    });

    feedbackMessage(response.ok);
  } catch (error) {
    console.error("Error liking post:", error);
  }
}

async function dislikePost(postId, API_ENDPOINT, TOKEN) {
  try {
    const response = await fetch(
      `${API_ENDPOINT}/blogpost/dislike?id=${postId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${TOKEN}`,
        },
      },
    );

    feedbackMessage(response.ok);
  } catch (error) {
    console.error("Error disliking post:", error);
  }
}

async function viewPost(postId, API_ENDPOINT, TOKEN) {
  fetch(`${API_ENDPOINT}/blogpost/view?id=${postId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${TOKEN}`,
    },
  });
}

const BlogPost = ({ API_ENDPOINT, TOKEN }) => {
  const { id } = useParams(); // This gets the {id} from the URL
  const [blog, setBlog] = useState(null);
  const [blogPosts, setBlogPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [healthData, setHealthData] = useState({ status: "loading" });

  const TopBarItems = [
    {
      title: "Blog",
      url: "#/blog",
      icon: <FiCoffee />,
    },
    {
      title: "Home",
      url: "/",
      icon: <FiHome />,
    },
    {
      title: "Contact me",
      url: "mailto:mail@tallenpeli.dev",
      icon: <FiMail />,
    },
    {
      title: "Github",
      url: "https://github.com/TallenPeli",
      icon: <FiGithub />,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [blogRes, blogPostsRes, healthRes] = await Promise.all([
          fetch(`${API_ENDPOINT}/blogpost?id=${id}`),
          fetch(`${API_ENDPOINT}/blogposts?limit=4`),
          fetch(`${API_ENDPOINT}/health`),
        ]);

        const [blogJson, blogPostsJson, healthJson] = await Promise.all([
          blogRes.json(),
          blogPostsRes.json(),
          healthRes.json(),
        ]);

        if (blogJson.success) {
          setBlog(blogJson.data);
          viewPost(blogJson.data.id, API_ENDPOINT, TOKEN);
        }
        if (blogPostsJson.success) {
          setBlogPosts(blogPostsJson.data);
        }
        setHealthData(healthJson);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, API_ENDPOINT, TOKEN]);

  if (loading) {
    return (
      <div className="loading-page">
        <div className="loading-shape"></div>
        <span className="accent-text">Loading</span>
      </div>
    );
  }

  if (error) {
    return <ErrorPage error={error} healthData={healthData} />;
  }

  if (healthData?.status !== "ok" && healthData?.status !== "loading") {
    return <ErrorPage error={null} healthData={healthData} />;
  }

  return (
    <div className="BlogPost">
      <TopBar items={TopBarItems} />
      <SideBar />
      <div className="view">
        <div className="content">
          <img src={blog?.thumbnail} alt={blog?.title} className="thumbnail" />
          <h1 className="title">{blog?.title}</h1>
          <div className="details">
            <span>
              {blog?.authors.join(", ")} · {blog?.date}
            </span>
            <span>{}</span>
            <div className="information">
              <div className="views">
                <FiEye /> {blog?.views}
              </div>
              <div className="likes">
                <FiThumbsUp /> {blog?.helpful}%
              </div>
            </div>
          </div>
          <Line />
          <div className="markdown">
            <Markdown remarkPlugins={[remarkGfm]}>{blog?.content}</Markdown>
          </div>
          <br />
          <div className="feedback">
            <div className="feedback-buttons">
              <button
                className="feedback-button like"
                onClick={() => likePost(blog?.id, API_ENDPOINT, TOKEN)}
              >
                <FiThumbsUp />I found this helpful
              </button>
              <button
                className="feedback-button dislike"
                onClick={() => dislikePost(blog?.id, API_ENDPOINT, TOKEN)}
              >
                <FiThumbsDown />I didn't find this helpful
              </button>
            </div>
          </div>
        </div>
        <OhterBlogPosts blogposts={blogPosts} currentBlogId={blog?.id} />
      </div>
      <PageFooter />
    </div>
  );
};

const OhterBlogPosts = ({ blogposts, currentBlogId }) => {
  console.log(currentBlogId);
  if (!blogposts || blogposts.length === 0) return null;

  const rows = [];
  for (let i = 0; i < blogposts.length; i++) {
    if (blogposts[i].id === currentBlogId) continue;
    rows.push(
      <div key={i} className="blog-row">
        <BlogCard key={blogposts[i].id} blog={blogposts[i]} />
      </div>,
    );
  }

  return (
    <div className="blogpost__other-posts">
      <h1>
        Other Posts
        <FiCoffee />
      </h1>
      <div className="blogpost__blog-list">{rows}</div>
    </div>
  );
};
export default BlogPost;
