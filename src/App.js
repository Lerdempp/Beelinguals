import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Faq from "./components/Faq/Faq";
import Blog from "./components/Blog/Blog";
import Hero from "./components/Hero/Hero";
import BlogAlt from "./components/BlogAlt/BlogAlt";
import SheetsPage from "./components/SheetsPage"; // SheetsPage bileşeni
import Words from "./components/Words";
import ScrollToTop from "./components/ScrollToTop"; // ScrollToTop bileşeni
import "./App.css";

// Router içinde kullanılacak yeni bileşen
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Background>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Blog />
                <Faq />
                <Footer />
              </>
            }
          />
          <Route path="/blog-details/:id" element={<BlogAlt />} />
          <Route path="/sheets" element={<SheetsPage />} />{" "}
          {/* Sheets sayfası rotası eklendi */}
          <Route path="/words" element={<Words />} />
        </Routes>
      </Background>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
