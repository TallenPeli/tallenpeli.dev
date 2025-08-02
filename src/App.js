import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Banner from "./components/ui/Banner";

// import Banner from "./components/ui/Banner";

const API_ENDPOINT =
  process.env.NODE_ENV !== "production"
    ? "https://api.tallenpeli.dev"
    : "http://192.168.68.66:8080";

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else {
  console.log("Development mode");
}

function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Home API_ENDPOINT={API_ENDPOINT} />} />
        <Route path="/blog" element={<Blog API_ENDPOINT={API_ENDPOINT} />} />
      </Routes>
    </Router>
  );
}

export default App;
