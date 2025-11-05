import { useState, useEffect } from "react";

import { FiMenu } from "react-icons/fi";
import IconUrl from "../ui/IconUrl";
import "../../styles/components/navigation/TopBar.css";

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const sidebarButton = document.getElementById("side-bar-toggle");
  if (!sidebar || !sidebarButton) return;

  if (!sidebarButton.classList.contains("active")) {
    sidebarButton.classList.add("active");
  } else {
    sidebarButton.classList.remove("active");
  }

  if (!sidebar.classList.contains("open")) {
    sidebar.classList.add("open");
  } else {
    sidebar.classList.remove("open");
  }
}

// on window resize
window.addEventListener("resize", () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarButton = document.getElementById("side-bar-toggle");
  if (!sidebar || !sidebarButton) return;

  if (document.documentElement.clientWidth < 100) {
    sidebar.classList.remove("open");
    sidebarButton.classList.remove("active");
  }
});

const TopBar = ({ items }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth < 500) {
    return (
      <div className="top-bar">
        <button
          className="side-bar-toggle"
          id="side-bar-toggle"
          onClick={toggleSidebar}
        >
          <FiMenu size={25} />
        </button>
        <div className="top-bar-icons">
          {items.map((item) => (
            <IconUrl key={item.title} url={item.url} icon={item.icon} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="top-bar">
        <button
          className="side-bar-toggle"
          id="side-bar-toggle"
          onClick={toggleSidebar}
        >
          <FiMenu size={25} />
        </button>
        <div className="top-bar-icons">
          {items.map((item) => (
            <IconUrl
              key={item.title}
              title={item.title}
              url={item.url}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default TopBar;
