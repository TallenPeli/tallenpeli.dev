import { FiExternalLink } from "react-icons/fi";
import { MdOpenInNew } from "react-icons/md";
import "../../styles/components/features/SocialCard.css";
import Line from "./Line";

export default function SocialCard({
  image,
  alt,
  link,
  username,
  platformName,
}) {
  return (
    <div className="social-card" onClick={() => window.open(link, "_blank")}>
      <FiExternalLink className="external-link-icon" />
      <img src={image} alt={alt} className="social-card-image" />
      <h1>{platformName}</h1>
      <h5>@{username}</h5>
      <Line />
      <div className="account-details">
        <div className="left">100 Followers</div>
        <div className="right">50 Posts</div>
      </div>
    </div>
  );
}
