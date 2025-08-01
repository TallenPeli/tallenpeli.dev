import { FiAlertTriangle, FiX } from "react-icons/fi";
import "../../styles/components/ui/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <FiAlertTriangle />
        <span>Site under construction</span>
      </div>
      <FiX className="banner-close" />
    </div>
  );
};

export default Banner;
