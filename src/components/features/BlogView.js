import { FiCoffee } from "react-icons/fi";
import BlogCard from "./BlogCard";
import "../../styles/components/features/BlogView.css";

const BlogView = ({ blogposts }) => {
  // Handle undefined or null blogposts
  if (!blogposts || !Array.isArray(blogposts)) {
    return (
      <div className="blog-view">
        <h2>Latest Blog Posts</h2>
        <p>Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="blog-view">
      <h1 className="view-header">
        Latest Blog Posts
        <FiCoffee />
      </h1>

      {blogposts.map((blogpost) => (
        <div key={blogpost.id} className="blog-row">
          <BlogCard key={blogpost.id} blog={blogpost} />
        </div>
      ))}
    </div>
  );
};

export default BlogView;
