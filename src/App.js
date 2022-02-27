import React from "react";

import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/utils/ScrollToTop";
import Connect from "./components/connect";
import Navigation from "./components/navigation";
import Newsletter from "./components/utils/Newsletter";
import Footer from "./components/footer";

import Home from "./home";
import Work from "./work";
import Experience from "./experience";
import About from "./about";
import NoMatch from "./no-match";

function App() {
  return (
    <>
      <ScrollToTop />
      <Connect />
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
