import "../../styles/components/ui/Tag.css";

const Tag = ({ name, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="tag">
      {name}
    </a>
  );
};

export default Tag;
