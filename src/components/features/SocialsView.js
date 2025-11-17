import { FiArrowLeft, FiUser, FiArrowRight } from "react-icons/fi";
import SocialCard from "../ui/SocialCard";
import "../../styles/components/features/SocialsView.css";

import { useEffect, useRef, useState } from "react";

function ScrollToSide(direction, scrollAmount) {
  console.log(scrollAmount);
  const scrollContainer = document.querySelector(".socials-view-scroller");

  if (!scrollContainer) return;

  if (direction === "left") {
    scrollContainer.scrollBy({
      left: scrollAmount * -1,
      behavior: "smooth",
    });
  } else if (direction === "right") {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
}

export default function SocialsView({ socials }) {
  const [scrollStep, setScrollStep] = useState(0);

  const scrollerRef = useRef(null);
  useEffect(() => {
    if (scrollerRef.current) {
      const firstCard = scrollerRef.current.querySelector(".social-card");
      const scrollerStyle = window.getComputedStyle(scrollerRef.current);

      const gapValueString = scrollerStyle.gap;
      const horizontalGapString = gapValueString.split(" ")[0];
      const GAP_PIXELS = parseFloat(horizontalGapString) || 0;

      if (firstCard) {
        const cardStyle = window.getComputedStyle(firstCard);
        const cardWidth = firstCard.offsetWidth;

        const totalScrollStep = cardWidth + GAP_PIXELS;
        setScrollStep(totalScrollStep);
        console.log("Calculated Scroll Step:", totalScrollStep);
      }
    }
  }, [socials]);

  return (
    // SocialCard Carousel
    <div className="socials-view-container">
      <div className="view-header">
        <h1>Platforms</h1>
        <FiUser className="socials-view-icon" size={32} />
      </div>
      <div className="view-content">
        <FiArrowLeft
          size={48}
          onClick={() => ScrollToSide("left", scrollStep)}
        />
        <div className="socials-view-scroller" ref={scrollerRef}>
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
        <FiArrowRight
          size={48}
          onClick={() => ScrollToSide("right", scrollStep)}
        />
      </div>
    </div>
  );
}
