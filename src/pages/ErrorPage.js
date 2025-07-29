import { FaFlag, FaCircleInfo } from "react-icons/fa6";

function toggleActive(element) {
  element.classList.toggle("active");
}

const ErrorPage = ({ error }) => (
  <div className="error-page">
    <span className="error-title">Oops!</span>
    <img className="error-image" src="/images/errordude.png" alt="Error Dude" />
    <span>
      Sorry, but it seems like there's an issue connecting to the server.
    </span>
    <span>Please come back later!</span>
    <div className="report-error-button">
      Report
      <FaFlag />
    </div>
    <div
      className="show-details-button"
      onClick={() => toggleActive(document.getElementById("error-details"))}
    >
      <h5>Show Details</h5>
      <FaCircleInfo size={14} />
    </div>
    <div className="error-content" id="error-details">
      Error fetching data from server:{" "}
      {error ? error.message || error.toString() : "Unknown error"}
    </div>
  </div>
);

export default ErrorPage;
