import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import SocialCard from "./SocialCard";

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
        <h1>Socials</h1>
        <FiUser className="socials-view-icon" size={32} />
      </div>
      <div className="socials-view-scroller">
        <FaAngleRight size={48} onClick={() => ScrollToSide("right")} />
        {socials.map((social) => (
          <SocialCard
            key={social.platformName}
            image={social.image}
            alt={social.alt}
            link={social.link}
            username={social.username}
            platformName={social.platformName}
            cardColor={social.cardColor}
          />
        ))}
        <FaAngleLeft size={48} onClick={() => ScrollToSide("left")} />
      </div>
    </div>
  );
}
