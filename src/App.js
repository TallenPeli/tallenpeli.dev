import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import Banner from "./components/ui/Banner";

const API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://api.tallenpeli.dev"
    : "http://localhost:8080";

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else {
  console.log("Development mode");
}

const IS_PRODUCTION = process.env.NODE_ENV === "production";

// Use this for unique transactions, i.e. liking and viewing a post
// returns a unique identifier for the browser
const generateBrowserFingerprint = () => {
  // Collect important information
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "top";
  ctx.font = "14px Arial";
  ctx.fillText("Browser fingerprint", 2, 2);

  // Create a key
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    window.screen.width + "x" + window.screen.height,
    new Date().getTimezoneOffset(),
    canvas.toDataURL(),
    navigator.hardwareConcurrency || "unknown",
  ].join("|");

  // Create the hash with the key
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  return Math.abs(hash).toString(36);
};

function App() {
  // Check cookies for authentication, if nothing there, generate one.
  const IDENTIFIER_TOKEN = localStorage.getItem("identifier_token");
  if (!IDENTIFIER_TOKEN) {
    localStorage.setItem("identifier_token", generateBrowserFingerprint());
  }

  return (
    <Router>
      {IS_PRODUCTION && <Banner />}
      <Routes>
        <Route path="/" element={<Home API_ENDPOINT={API_ENDPOINT} />} />
        <Route path="/blog" element={<Blog API_ENDPOINT={API_ENDPOINT} />} />
        <Route
          path="/blog/:id"
          element={
            <BlogPost API_ENDPOINT={API_ENDPOINT} TOKEN={IDENTIFIER_TOKEN} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
