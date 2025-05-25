import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      {/* ScrollToTop bileşeni her yönlendirmede en üstte başlatır */}
      <ScrollToTop /> 
      <Background>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Faq />
                <Blog />
                <Footer />
              </>
            }
          />
          <Route path="/blog-details/:id" element={<BlogAlt />} />
          <Route path="/sheets" element={<SheetsPage />} /> {/* Sheets sayfası rotası eklendi */}
          <Route path="/words" element={<Words />} />
        </Routes>
      </Background>
    </Router>
  );
};

export default App;
