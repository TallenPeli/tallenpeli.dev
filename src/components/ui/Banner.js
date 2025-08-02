import { FiAlertTriangle, FiX } from "react-icons/fi";
import "../../styles/components/ui/Banner.css";

function HideBanner() {
  var banner = document.getElementById("banner");
  banner.classList.add("hidden");
}

const Banner = () => {
  return (
    <div className="banner" id="banner">
      <div className="banner-content">
        <FiAlertTriangle />
        <span>Site under construction</span>
      </div>

      <FiX className="banner-close" onClick={() => HideBanner()} />
    </div>
  );
};

export default Banner;
