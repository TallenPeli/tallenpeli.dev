import { FiEye, FiHeart } from "react-icons/fi";
import "../../styles/components/features/BlogCard.css";

const BigBlogCard = ({ blog }) => {
  return (
    <div
      className="blog-preview-card"
      onClick={() => (window.location.href = `#/blog/${blog.id}`)}
    >
      <div className="thumbnail">
        <img src={blog.thumbnail} alt={blog.title} />
      </div>
      <div className="content">
        <h2>
          {blog.title} <span className="id">#{blog.id}</span>
        </h2>
        <div className="information">
          <div className="views">
            <FiEye /> {blog.views}
          </div>
          <div className="likes">
            <FiHeart /> {blog.upvotes}
          </div>
        </div>
        <p className="excerpt">{blog.description}</p>
        <div className="meta">
          <span className="author">{blog.authors.join(", ")}</span>
          <span>·</span>
          <span className="date">{blog.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BigBlogCard;
