import { FiCoffee } from "react-icons/fi";
import BlogCard from "./BlogCard";

const BlogView = ({ blogpostsData }) => {
  return (
    <div id="projects" className="project-view">
      <h1 className="view-header">
        Blogposts
        <FiCoffee />
      </h1>
    </div>
  );
};

export default BlogView;
