import {
  FiCoffee,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiYoutube,
  FiInstagram,
  FiLayers,
  FiMousePointer,
  FiPhone,
} from "react-icons/fi";
import "../../styles/components/navigation/SideBar.css";
import IconUrl from "../ui/IconUrl";
import Line from "../ui/Line";
import Spacer from "../ui/Spacer";

const SideBar = ({ backendVersion, frontendVersion }) => {
  return (
    <div className="sidebar-view" id="sidebar">
      <div className="sidebar">
        <div className="section">
          <span className="accent-text">Links</span>
          <Line />
          <IconUrl
            iconSide="left"
            url="/#/blog"
            title="Blog"
            icon={<FiCoffee />}
          />
          <IconUrl
            iconSide="left"
            url="https://github.com/TallenPeli"
            title="Github"
            icon={<FiGithub />}
          />
          <IconUrl
            iconSide="left"
            url="https://www.thingiverse.com/tallenpeli/designs"
            title="Thingiverse"
            icon={<FiLayers />}
          />
          <IconUrl
            iconSide="left"
            url="https://tallenpeli.itch.io/"
            title="itch.io"
            icon={<FiMousePointer />}
          />
        </div>
        <div className="section">
          <span className="accent-text">Socials</span>
          <Line />
          <IconUrl
            iconSide="left"
            url="linkedin.com/in/tallen-pelissero-70715a255"
            title="LinkedIn"
            icon={<FiLinkedin />}
          />
          <IconUrl
            iconSide="left"
            url="https://www.youtube.com/@tallenpeli5365"
            title="YouTube"
            icon={<FiYoutube />}
          />
          <IconUrl
            iconSide="left"
            url="https://www.instagram.com/tallen_peli/"
            title="Instagram"
            icon={<FiInstagram />}
          />
          <IconUrl
            iconSide="left"
            url="https://mastodon.social/@tallen_peli"
            title="Mastodon"
            icon={<FiSend />}
          />
        </div>
        <div className="section">
          <span className="accent-text">Contact</span>
          <Line />
          <IconUrl
            iconSide="left"
            url="mailto:mail@tallenpeli.dev"
            title="Email"
            icon={<FiMail />}
          />
          <IconUrl
            iconSide="left"
            url="mailto:mail@tallenpeli.dev"
            title="Request phone number"
            icon={<FiPhone />}
          />
        </div>
        <div className="section">
          <span className="accent-text">Donate</span>
          <Line />
          <IconUrl
            iconSide="left"
            url="https://ko-fi.com/tallenpeli"
            title="Buy me a coffee"
            icon={<FiCoffee />}
          />
        </div>
        <Spacer />
        <div className="section">
          <h6 className="dim-text">Backend Version: v{backendVersion}</h6>
          <a
            href={`https://github.com/TallenPeli/home/commit/${frontendVersion}`}
          >
            <h6 className="dim-text">Frontend Commit: {frontendVersion}</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
