import { FiTool } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

// map every 2 projects to a new row to fix the flexbox shit
const ProjectRows = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(
      <div key={i} className="project-row">
        <ProjectCard key={projects[i].url} project={projects[i]} />
        {projects[i + 1] && (
          <ProjectCard key={projects[i + 1].url} project={projects[i + 1]} />
        )}
      </div>,
    );
  }

  return <div className="project-list">{rows}</div>;
};

const ProjectView = ({ projects }) => {
  return (
    <div id="projects" className="project-view">
      <h1 className="view-header">
        Projects
        <FiTool />
      </h1>
      <ProjectRows projects={projects} />
    </div>
  );
};

export default ProjectView;
