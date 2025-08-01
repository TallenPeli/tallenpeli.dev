import { FaChevronDown } from "react-icons/fa";
import "./AboutMe.css";
import Tag from "../ui/Tag";
import { FiArrowDown } from "react-icons/fi";

const ScrollDown = (elementID) => {
  const targetElement = document.getElementById(elementID);
  if (!targetElement) return;
  targetElement.scrollIntoView({ behavior: "smooth" });
};

const AboutMe = ({ aboutData }) => {
  if (!aboutData) return <div>Loading...</div>;
  return (
    <div id="about-me" className="about-me" style={{ position: "relative" }}>
      <div className="content">
        <div className="double-sided-image">
          <img
            src={aboutData.avatarURL}
            className="avatar-front"
            alt="Avatar"
          />
          <img
            src={aboutData.avatarBackURL}
            className="avatar-back"
            alt="Avatar2"
            style={{ transform: "rotateY(180deg)" }}
          />
        </div>
        <h1 className="name-container">
          <span>{aboutData.firstName}</span>
          <span>{aboutData.lastName}</span>
        </h1>
        <p className="description">{aboutData.description}</p>
        <div className="tags-list">
          {aboutData.tags.map((tag) => (
            <Tag key={tag.name} name={tag.name} url={tag.url} />
          ))}
        </div>
      </div>

      <div
        onClick={() => ScrollDown("projects")}
        className="scroll-down-button"
      >
        <span className="accent-text">View Projects</span>
        <div className="scroll-down-button">
          <FiArrowDown />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
