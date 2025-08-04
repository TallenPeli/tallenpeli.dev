// pages/BlogPost.js
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

const BlogPost = ({ API_ENDPOINT }) => {
  const { id } = useParams(); // This gets the {id} from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`${API_ENDPOINT}/blogpost?id=${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.data));
  }, [id, API_ENDPOINT]);

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
    <div className="BlogPost">
      <TopBar items={TopBarItems} />
      <SideBar />
      <div className="view">
        <div className="content">
          <img src={blog?.thumbnail} alt={blog?.title} className="thumbnail" />
          <h1 className="title">{blog?.title}</h1>
          <div className="details">
            <span>{blog?.authors.join(", ")}</span>
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
          <h3 className="accent-text">
            Read the whole article? Leave some feedback!
          </h3>
          <div className="feedback">
            <button className="feedback-button like">
              <FiThumbsUp />I found this helpful
            </button>
            <button className="feedback-button dislike">
              <FiThumbsDown />I didn't find this helpful
            </button>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default BlogPost;
