import { MdOpenInNew } from "react-icons/md";
import { FaCode } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { title, description, image, platform, url, type } = project;

  return (
    <div
      className={`project-card ${platform}`}
      onClick={() => window.open(url, "_blank")}
    >
      <div className="project-card-content">
        <img src={image} alt={title} className="image" />
        <div className="spaced">
          <div>
            <div className="header">
              <h2>
                <a href={url}>{title}</a>
              </h2>
              <MdOpenInNew />
            </div>
            <p>{description}</p>
          </div>
          <div className="footer">
            <FaCode />
            <span>{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
