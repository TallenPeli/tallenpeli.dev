import { MdOpenInNew } from "react-icons/md";
import { FiGithub, FiCode } from "react-icons/fi";
import IconUrl from "../ui/IconUrl";

import "../../styles/components/features/ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, description, image, platform, url, type } = project;

  return (
    <div
      className={`project-card ${platform}`}
      onClick={() => window.open(url, "_blank")}
    >
      <div className="project-card-content">
        <div className="header">
          <h2>
            <a href={url}>{title}</a>
          </h2>
          <MdOpenInNew />
        </div>
        <p>{description}</p>
        <div className="footer">
          <IconUrl title={type} url="" icon={<FiCode />} />
          <IconUrl title={platform} url="" icon={<FiGithub />} />
        </div>
      </div>
    </div>
  );
}
