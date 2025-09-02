import { FiEye, FiThumbsUp } from "react-icons/fi";
import "../../styles/components/features/BlogCard.css";

const BigBlogCard = ({ blog }) => {
  return (
    <div
      className="blogcard__preview"
      onClick={() => (window.location.href = `#/blog/${blog.id}`)}
    >
      <div className="blogcard__thumbnail">
        <img src={blog.thumbnail} alt={blog.title} />
      </div>
      <div className="blogcard__content">
        <h2>
          {blog.title} <span className="blogcard__id">#{blog.id}</span>
        </h2>
        <div className="blogcard__information">
          <div className="blogcard__views">
            <FiEye /> {blog.views}
          </div>
          <div className="blogcard__helpful">
            <FiThumbsUp /> {blog.helpful}%
          </div>
        </div>
        <p className="blogcard__excerpt">{blog.description}</p>
        <div className="blogcard__meta">
          <span className="blogcard__author">{blog.authors.join(", ")}</span>
          <span>·</span>
          <span className="blogcard__date">{blog.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BigBlogCard;
