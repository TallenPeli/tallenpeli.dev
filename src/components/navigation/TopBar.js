import React from "react";
import { FiGithub, FiSidebar, FiMail, FiCoffee } from "react-icons/fi";

const IconUrl = ({ title, url, icon }) => {
  return (
    <a href={url} className="icon-url">
      <p>{title}</p>
      {icon}
    </a>
  );
};

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

const TopBar = () => {
  return (
    <div className="top-bar">
      <button className="side-bar-toggle" onClick={toggleSidebar}>
        <FiSidebar size={25} />
      </button>

      <div className="top-bar-icons">
        <IconUrl title="Blog" url="/blog" icon={<FiCoffee />} />
        <IconUrl
          title="Contact me"
          url="mailto:mail@tallenpeli.dev" // a very cool email address
          icon={<FiMail />}
        />
        <IconUrl
          title="Github"
          url="https://github.com/TallenPeli"
          icon={<FiGithub />}
        />
      </div>
    </div>
  );
};

export default TopBar;
