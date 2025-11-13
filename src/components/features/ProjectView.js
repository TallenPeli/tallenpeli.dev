import { FiTool } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

// map every 2 projects to a new row to fix the flexbox shit
const ProjectRows = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.url} project={project} />
      ))}
    </div>
  );
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
