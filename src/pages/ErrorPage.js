import { FaCircleInfo } from "react-icons/fa6";

function toggleActive(element) {
  element.classList.toggle("active");
}

const ErrorTitles = ["Oops!", "Uh Oh!", "Oh No!", "Whoops!"];

const ErrorPage = ({ error, healthData }) => {
  const status = healthData.status;
  var image = null;
  var alt = null;
  var message = null;

  if (status === "no response") {
    image = "/images/errordude.avif";
    alt = "Error Dude";
    message =
      "Sorry, but it seems like there's an issue connecting to the server.";
  } else if (status === "maintenance") {
    image = "/images/maintenance.avif";
    alt = "Maintenance";
    message = "Sorry, looks like we're currently under maintenance.";
  } else if (status === "emergency") {
    image = "/images/emergency.avif";
    alt = "Emergency";
    message = "Sorry, but we're undergoing emergency maintenance.";
  } else {
    image = "/images/confused.avif";
    alt = "Confused";
    message = "We're not sure what's happened. Reload or try again later.";
  }

  return (
    <div className="error-page">
      <span className="error-title">
        {ErrorTitles[Math.floor(Math.random() * ErrorTitles.length)]}
      </span>
      <img className="error-image" src={image} alt={alt} />
      <span>{message}</span>
      <span>Please come back later!</span>
      <div
        className="show-details-button"
        onClick={() => toggleActive(document.getElementById("error-details"))}
      >
        <h5>Show details</h5>
        <FaCircleInfo size={14} />
      </div>
      <div className="error-content" id="error-details">
        Error fetching data from server:{" "}
        {error ? error.message || error.toString() : "Unknown error"}
      </div>
    </div>
  );
};

export default ErrorPage;
