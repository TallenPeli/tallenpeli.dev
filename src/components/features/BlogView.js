import { FiCoffee } from "react-icons/fi";
import BlogCard from "./BlogCard";
import "../../styles/components/features/BlogView.css";

const BlogRows = ({ blogposts }) => {
  if (!blogposts || blogposts.length === 0) return null;

  const rows = [];
  for (let i = 0; i < blogposts.length; i += 2) {
    rows.push(
      <div key={i} className="blog-row">
        <BlogCard key={blogposts[i].url} blog={blogposts[i]} />
        {blogposts[i + 1] && (
          <BlogCard key={blogposts[i + 1].url} blog={blogposts[i + 1]} />
        )}
      </div>,
    );
  }

  return <div className="blog-list">{rows}</div>;
};

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
      <BlogRows blogposts={blogposts} />
    </div>
  );
};

export default BlogView;
