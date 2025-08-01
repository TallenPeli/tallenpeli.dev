import { FiGithub, FiMenu, FiMail, FiCoffee } from "react-icons/fi";
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

const TopBar = () => {
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
        <IconUrl title="Blog" url="/#/blog" icon={<FiCoffee />} />
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
