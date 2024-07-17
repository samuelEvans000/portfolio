import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Social from "./Components/social/Social";
import Sidebar from "./Components/Navbar/Sidebar";
import Blank from "./Components/blank/Blank";

function App() {
  return (
    <div className="app">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isBlankPage = location.pathname === "/blank";

  return (
    <>
      {!isBlankPage && <Navbar />}
      {!isBlankPage && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blank" element={<Blank />} />
      </Routes>
      {!isBlankPage && <Social />}
      {!isBlankPage && <Footer />}
    </>
  );
}

export default App;
