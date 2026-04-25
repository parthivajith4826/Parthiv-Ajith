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

// District SEO Pages
import TrivandrumDjango from "./pages/TrivandrumDjango";
import TrivandrumZoho from "./pages/TrivandrumZoho";
import KollamDjango from "./pages/KollamDjango";
import KollamZoho from "./pages/KollamZoho";
import PathanamthittaDjango from "./pages/PathanamthittaDjango";
import PathanamthittaZoho from "./pages/PathanamthittaZoho";
import AlappuzhaDjango from "./pages/AlappuzhaDjango";
import AlappuzhaZoho from "./pages/AlappuzhaZoho";
import KottayamDjango from "./pages/KottayamDjango";
import KottayamZoho from "./pages/KottayamZoho";
import IdukkiDjango from "./pages/IdukkiDjango";
import IdukkiZoho from "./pages/IdukkiZoho";
import ErnakulamDjango from "./pages/ErnakulamDjango";
import ErnakulamZoho from "./pages/ErnakulamZoho";
import ThrissurDjango from "./pages/ThrissurDjango";
import ThrissurZoho from "./pages/ThrissurZoho";
import PalakkadDjango from "./pages/PalakkadDjango";
import PalakkadZoho from "./pages/PalakkadZoho";
import MalappuramDjango from "./pages/MalappuramDjango";
import MalappuramZoho from "./pages/MalappuramZoho";
import KozhikodeDjango from "./pages/KozhikodeDjango";
import KozhikodeZoho from "./pages/KozhikodeZoho";
import WayanadDjango from "./pages/WayanadDjango";
import WayanadZoho from "./pages/WayanadZoho";
import KannurDjango from "./pages/KannurDjango";
import KannurZoho from "./pages/KannurZoho";
import KasaragodDjango from "./pages/KasaragodDjango";
import KasaragodZoho from "./pages/KasaragodZoho";

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
            
            {/* District Specific SEO Routes */}
            <Route path="/python-django-developer-thiruvananthapuram" element={<TrivandrumDjango />} />
            <Route path="/zoho-developer-thiruvananthapuram" element={<TrivandrumZoho />} />
            <Route path="/python-django-developer-kollam" element={<KollamDjango />} />
            <Route path="/zoho-developer-kollam" element={<KollamZoho />} />
            <Route path="/python-django-developer-pathanamthitta" element={<PathanamthittaDjango />} />
            <Route path="/zoho-developer-pathanamthitta" element={<PathanamthittaZoho />} />
            <Route path="/python-django-developer-alappuzha" element={<AlappuzhaDjango />} />
            <Route path="/zoho-developer-alappuzha" element={<AlappuzhaZoho />} />
            <Route path="/python-django-developer-kottayam" element={<KottayamDjango />} />
            <Route path="/zoho-developer-kottayam" element={<KottayamZoho />} />
            <Route path="/python-django-developer-idukki" element={<IdukkiDjango />} />
            <Route path="/zoho-developer-idukki" element={<IdukkiZoho />} />
            <Route path="/python-django-developer-kochi" element={<ErnakulamDjango />} />
            <Route path="/zoho-developer-kochi" element={<ErnakulamZoho />} />
            <Route path="/python-django-developer-thrissur" element={<ThrissurDjango />} />
            <Route path="/zoho-developer-thrissur" element={<ThrissurZoho />} />
            <Route path="/python-django-developer-palakkad" element={<PalakkadDjango />} />
            <Route path="/zoho-developer-palakkad" element={<PalakkadZoho />} />
            <Route path="/python-django-developer-malappuram" element={<MalappuramDjango />} />
            <Route path="/zoho-developer-malappuram" element={<MalappuramZoho />} />
            <Route path="/python-django-developer-kozhikode" element={<KozhikodeDjango />} />
            <Route path="/zoho-developer-kozhikode" element={<KozhikodeZoho />} />
            <Route path="/python-django-developer-wayanad" element={<WayanadDjango />} />
            <Route path="/zoho-developer-wayanad" element={<WayanadZoho />} />
            <Route path="/python-django-developer-kannur" element={<KannurDjango />} />
            <Route path="/zoho-developer-kannur" element={<KannurZoho />} />
            <Route path="/python-django-developer-kasaragod" element={<KasaragodDjango />} />
            <Route path="/zoho-developer-kasaragod" element={<KasaragodZoho />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
