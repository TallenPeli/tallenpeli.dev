import { MdOpenInNew } from "react-icons/md";

export default function SocialCard({
  image,
  alt,
  link,
  username,
  platformName,
  cardColor,
}) {
  return (
    <div
      className="social-card"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${cardColor}, transparent)`,
      }}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={image} alt={alt} className="social-card-image" />
      <span>{username}</span>
    </div>
  );
}
