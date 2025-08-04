import { FiArrowLeft, FiUser, FiArrowRight } from "react-icons/fi";
import SocialCard from "../ui/SocialCard";
import "../../styles/components/features/SocialsView.css";
function ScrollToSide(direction) {
  const scrollContainer = document.querySelector(".socials-view-scroller");
  if (!scrollContainer) return;

  if (direction === "left") {
    scrollContainer.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else if (direction === "right") {
    scrollContainer.scrollTo({
      left: scrollContainer.scrollWidth - scrollContainer.offsetWidth,
      behavior: "smooth",
    });
  }
}

export default function SocialsView({ socials }) {
  return (
    // SocialCard Carousel
    <div className="socials-view-container">
      <div className="view-header">
        <h1>Platforms</h1>
        <FiUser className="socials-view-icon" size={32} />
      </div>
      <div className="view-content">
        <FiArrowLeft size={48} onClick={() => ScrollToSide("left")} />
        <div className="socials-view-scroller">
          {socials.map((social) => (
            <SocialCard
              key={social.platformName}
              image={social.image}
              alt={social.alt}
              link={social.link}
              username={social.username}
              platformName={social.platformName}
            />
          ))}
        </div>
        <FiArrowRight size={48} onClick={() => ScrollToSide("right")} />
      </div>
    </div>
  );
}
