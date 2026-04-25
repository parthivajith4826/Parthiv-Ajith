import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS css is imported if not loaded via CDN, though index.html CDN is fine.

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PythonDjangoDeveloper from "./pages/PythonDjangoDeveloper";
import DjangoRestApi from "./pages/DjangoRestApi";
import ZohoProvider from "./pages/ZohoProvider";
import ZohoIntegration from "./pages/ZohoIntegration";
import DjangoZohoIntegration from "./pages/DjangoZohoIntegration";

// Scroll restoration to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        
        {/* Route Structure */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/python-django-developer-kerala" element={<PythonDjangoDeveloper />} />
            <Route path="/django-rest-framework-api" element={<DjangoRestApi />} />
            <Route path="/zoho-services-provider-kerala" element={<ZohoProvider />} />
            <Route path="/zoho-api-integration-automation" element={<ZohoIntegration />} />
            <Route path="/django-zoho-integration" element={<DjangoZohoIntegration />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
