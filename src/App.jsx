import React, { useEffect } from "react";
import AOS from "aos";
// Import styles is handled in main.jsx usually, but we can do it here too
// AOS is loaded globally via CDN in index.html, but we will initialize it here

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg fixed-top transition-all" id="mainNav">
        <div className="container">
          <a className="navbar-brand fs-4" href="#">
            <span className="text-gold">&lt;</span>
            <span className="text-white">Parthiv</span>
            <span className="text-gold">/&gt;</span>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon bg-gold"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <a href="#contact" className="btn btn-primary btn-sm hover-scale-up">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section d-flex align-items-center position-relative overflow-hidden"
        style={{ minHeight: "100vh", paddingTop: "80px" }}
      >
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>

        <div className="container position-relative z-1">
          <div className="row align-items-center">
            {/* Hero Content */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-content">
                <h1 className="visually-hidden">Parthiv Ajith</h1>
                <h2 className="visually-hidden">Expert Python & Django Developer</h2>
                <span
                  className="text-gold fw-bold text-uppercase letter-spacing-2 d-block mb-3"
                  data-aos="fade-up"
                >
                  Python & Django Developer
                </span>
                <div className="display-3 fw-bold mb-4 text-white" data-aos="fade-up" data-aos-delay="100">
                  Hi, I'm <br />
                  <span className="text-gold fst-italic">Parthiv Ajith</span>
                </div>
                <p
                  className="lead text-muted mb-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  style={{ maxWidth: "500px" }}
                >
                  Building robust, scalable <strong className="text-white">backend systems</strong> and secure web
                  applications. Passionate about clean code, API architecture, and real-world problem solving.
                </p>
                <div data-aos="scale-in" data-aos-delay="300">
                  <a
                    href="#projects"
                    className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg hover-scale-up position-relative overflow-hidden me-3"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="position-relative z-1">View Projects</span>
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-outline-gold btn-lg px-5 py-3 rounded-pill hover-scale-up"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Background/Image */}
            <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="400">
              <div className="modern-hero-container">
                <div className="modern-hero-grid"></div>
                
                {/* Floating Badges */}
                <div className="hero-badge hero-badge-1">Backend<br/>Architecture</div>
                <div className="hero-badge hero-badge-2">API Design</div>
                <div className="hero-badge hero-badge-3">REST APIs</div>
                <div className="hero-badge hero-badge-4">Scalable<br/>Web Apps</div>
                
                {/* Zoho Badge */}
                <div className="hero-badge" style={{
                  top: "40%",
                  right: "-40px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  padding: "0.8rem 1rem",
                  transform: "rotate(0deg)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.5)"
                }}>
                  <img src="assets/zoho.svg" alt="Zoho" style={{ height: "30px", width: "auto" }} />
                </div>

                <img
                  src="assets/new_profile.jpg"
                  alt="Parthiv Ajith - Expert Python Django Backend Developer"
                  className="hero-main-img img-fluid rounded-4 border-secondary"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <a href="#about" className="text-gold opacity-75 hover-opacity-100 transition-all">
            <i className="fas fa-chevron-down fa-2x animate-bounce"></i>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 position-relative overflow-hidden">
        <div className="container py-5 z-1 position-relative">
          <div className="text-center mb-5 section-header">
            <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">About Me</h2>
            <p className="text-muted lead" data-aos="fade-up" data-aos-delay="100">
              Backend Architecture Specialist
            </p>
            <div className="d-flex justify-content-center mt-3" data-aos="zoom-in" data-aos-delay="200">
              <svg width="100" height="10">
                <path d="M0 5 Q 50 10 100 5" stroke="#D4AF37" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="lead text-muted">
                I am a <strong>Python Django Developer</strong> specializing in{" "}
                <strong>backend development</strong>, <strong>REST API development</strong>, and{" "}
                <strong>database-driven web applications</strong>.
              </p>
              <p className="lead text-muted">
                I works across <strong>full stack web development using Python</strong>, building{" "}
                <strong>scalable web applications</strong>, <strong>secure backend systems</strong>, and{" "}
                <strong>production-ready SaaS products</strong>.
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center mt-4">
            <div className="col-md-4 col-lg-3">
              <div
                className="feature-box p-4 rounded-4 shadow-sm h-100 text-center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="card-icon mb-4">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="h4 fw-bold mb-3 text-white">Clean Code</h3>
                <p className="text-muted small">Maintainable and efficient codebase standards following PEP8.</p>
                <div className="card-bg-gradient"></div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div
                className="feature-box p-4 rounded-4 shadow-sm h-100 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="card-icon mb-4">
                  <i className="fas fa-database"></i>
                </div>
                <h3 className="h4 fw-bold mb-3 text-white">Scalable DB</h3>
                <p className="text-muted small">Optimized PostgreSQL schemas and high-performance queries.</p>
                <div className="card-bg-gradient"></div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div
                className="feature-box p-4 rounded-4 shadow-sm h-100 text-center"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="card-icon mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="h4 fw-bold mb-3 text-white">Security</h3>
                <p className="text-muted small">Secure authentication, data protection, and OWASP compliance.</p>
                <div className="card-bg-gradient"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 position-relative">
        <div className="container py-5">
          <div className="text-center mb-5 section-header">
            <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Technical Arsenal</h2>
            <p className="text-muted lead" data-aos="fade-up" data-aos-delay="100">
              Technologies I work with to build scalable solutions
            </p>
          </div>
          <div className="row g-3">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up">
                <i className="devicon-python-plain colored display-5 mb-2" title="Python Development"></i>
                <p className="fw-bold mb-0 text-white">Python</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="100">
                <i className="devicon-django-plain colored display-5 mb-2" title="Django Framework"></i>
                <p className="fw-bold mb-0 text-white">Django</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="200">
                <i className="devicon-postgresql-plain colored display-5 mb-2" title="PostgreSQL Database"></i>
                <p className="fw-bold mb-0 text-white">PostgreSQL</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="300">
                <i className="devicon-html5-plain colored display-5 mb-2" title="HTML5 Semantics"></i>
                <p className="fw-bold mb-0 text-white">HTML5</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="400">
                <i className="devicon-css3-plain colored display-5 mb-2" title="CSS3 Styling"></i>
                <p className="fw-bold mb-0 text-white">CSS3</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="500">
                <i className="devicon-bootstrap-plain colored display-5 mb-2" title="Bootstrap Framework"></i>
                <p className="fw-bold mb-0 text-white">Bootstrap</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up">
                <i className="devicon-tailwindcss-original colored display-5 mb-2" title="Tailwind CSS"></i>
                <p className="fw-bold mb-0 text-white">Tailwind</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="100">
                <i className="devicon-javascript-plain colored display-5 mb-2" title="JavaScript"></i>
                <p className="fw-bold mb-0 text-white">JavaScript</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="200">
                <i className="devicon-git-plain colored display-5 mb-2" title="Git Version Control"></i>
                <p className="fw-bold mb-0 text-white">Git</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-server text-danger display-5 mb-2" title="REST API Architecture"></i>
                <p className="fw-bold mb-0 text-white">REST APIs</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="400">
                <i className="devicon-redis-plain colored display-5 mb-2" title="Redis Cache"></i>
                <p className="fw-bold mb-0 text-white">Redis</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="500">
                <svg viewBox="0 0 24 24" className="display-5 mb-2" style={{ width: "3rem", height: "3rem", fill: "#a9cc29" }} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Celery Task Queue">
                  <title>Celery</title>
                  <path d="M2.303 0A2.298 2.298 0 0 0 0 2.303v19.394A2.298 2.298 0 0 0 2.303 24h19.394A2.298 2.298 0 0 0 24 21.697V2.303A2.298 2.298 0 0 0 21.697 0zm8.177 3.072c4.098 0 7.028 1.438 7.68 1.764l-1.194 2.55c-2.442-1.057-4.993-1.41-5.672-1.41-1.574 0-2.17.922-2.17 1.763v8.494c0 .869.596 1.791 2.17 1.791.679 0 3.23-.38 5.672-1.41l1.194 2.496c-.435.271-3.637 1.818-7.68 1.818-1.112 0-4.64-.244-4.64-4.64V7.713c0-4.397 3.528-4.64 4.64-4.64z" />
                </svg>
                <p className="fw-bold mb-0 text-white">Celery</p>
              </div>
            </div>
          </div>

          <div className="row g-3 mt-1">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up">
                <i className="fas fa-cloud text-info display-5 mb-2" title="Full Zoho Services & Zoho Backend in Development"></i>
                <p className="fw-bold mb-0 text-white" style={{ fontSize: "0.9rem" }}>Zoho Services</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="100">
                <i className="devicon-wordpress-plain colored display-5 mb-2" title="WordPress"></i>
                <p className="fw-bold mb-0 text-white" style={{ fontSize: "0.9rem" }}>WordPress</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="skill-card p-3 rounded-4 shadow-sm h-100 text-center hover-scale-up" data-aos="fade-up" data-aos-delay="200">
                <i className="devicon-amazonwebservices-plain-wordmark colored display-5 mb-2" title="AWS (Hosting, RDS, S3 Bucket)"></i>
                <p className="fw-bold mb-0 text-white" style={{ fontSize: "0.9rem" }}>AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5 position-relative overflow-hidden bg-dark">
        <div className="container py-5 z-1 position-relative">
          <div className="text-center mb-5 section-header">
            <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Experience</h2>
            <p className="text-muted lead" data-aos="fade-up" data-aos-delay="100">
              My professional journey
            </p>
            <div className="d-flex justify-content-center mt-3" data-aos="zoom-in" data-aos-delay="200">
              <svg width="100" height="10">
                <path d="M0 5 Q 50 10 100 5" stroke="#D4AF37" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="timeline position-relative">
                <div className="card bg-dark-lighter border-secondary mb-4 rounded-4 shadow-sm hover-3d p-4" data-aos="fade-up" data-aos-delay="300" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="d-flex justify-content-between align-items-md-center flex-column flex-md-row mb-2">
                    <h3 className="h4 fw-bold text-white mb-1">Junior Python Developer</h3>
                    <span className="badge bg-gold text-dark align-self-start align-self-md-center">Current</span>
                  </div>
                  <h4 className="h6 text-gold mb-3" style={{ color: "#D4AF37" }}>
                    <a href="https://techgeum.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none hover-opacity-100" style={{ color: "inherit", transition: "opacity 0.3s", opacity: 0.9 }}>
                      Techgeum Private Limited, Perinthalmanna
                    </a>
                  </h4>
                  <p className="text-muted mb-0 small">Working as a Junior Python developer contributing to various development services.</p>
                </div>
                <div className="card bg-dark-lighter border-secondary mb-4 rounded-4 shadow-sm hover-3d p-4" data-aos="fade-up" data-aos-delay="400" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  <h3 className="h4 fw-bold text-white mb-1">Python Full Stack Developer Internship</h3>
                  <h4 className="h6 text-gold mb-3" style={{ color: "#D4AF37" }}>
                    <a href="https://catalysthub.in" target="_blank" rel="noopener noreferrer" className="text-decoration-none hover-opacity-100" style={{ color: "inherit", transition: "opacity 0.3s", opacity: 0.9 }}>
                      Catalyst Skill Hub, Calicut
                    </a>
                  </h4>
                  <p className="text-muted mb-0 small">Completed an internship focusing on full stack Python development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5 section-header">
            <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Featured Projects</h2>
            <p className="text-muted lead" data-aos="fade-up" data-aos-delay="100">
              Showcase of backend engineering & architecture
            </p>
            <div className="d-flex justify-content-center mt-3" data-aos="zoom-in" data-aos-delay="200">
              <svg width="100" height="10">
                <path d="M0 5 Q 50 10 100 5" stroke="#D4AF37" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="collection-card h-100 p-4 rounded-4 shadow-sm hover-3d" data-aos="fade-up">
                <div className="card-icon mb-4">
                  <img src="assets/connect_icon.png" alt="Connect Marketplace" style={{ width: "80px", height: "80px", objectFit: "contain", borderRadius: "12px" }} />
                </div>
                <h3 className="h4 fw-bold mb-2 text-white">Connect Marketplace</h3>
                <span className="badge bg-gold text-dark mb-3">Freelance Platform</span>
                <p className="text-muted small">
                  A comprehensive Freelancer Subscription Management System built using <strong className="text-white">Django</strong>. A scalable and secure platform connecting freelancers with clients featuring real-time updates.
                </p>
                <div className="d-flex gap-2 flex-wrap mt-3">
                  <span className="badge bg-dark border border-secondary text-light">Django</span>
                  <span className="badge bg-dark border border-secondary text-light">PostgreSQL</span>
                  <span className="badge bg-dark border border-secondary text-light">Payment Integration</span>
                </div>
                <div className="mt-4">
                  <a href="http://www.freelanceconnect.online" target="_blank" rel="noopener noreferrer" className="btn btn-outline-gold btn-sm px-4 py-2 hover-scale-up">
                    <i className="fas fa-external-link-alt me-2"></i>Live Now
                  </a>
                </div>
                <div className="card-bg-gradient"></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="collection-card h-100 p-4 rounded-4 shadow-sm hover-3d opacity-75" data-aos="fade-up" data-aos-delay="100">
                <div className="card-icon mb-4 text-muted">
                  <i className="fas fa-code-branch"></i>
                </div>
                <h3 className="h4 fw-bold mb-2 text-white">Coming Soon</h3>
                <p className="text-muted small">More enterprise-grade projects are being built.</p>
                <div className="card-bg-gradient"></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="collection-card h-100 p-4 rounded-4 shadow-sm hover-3d opacity-75" data-aos="fade-up" data-aos-delay="200">
                <div className="card-icon mb-4 text-muted">
                  <i className="fas fa-hammer"></i>
                </div>
                <h3 className="h4 fw-bold mb-2 text-white">Under Construction</h3>
                <p className="text-muted small">New system architectures in the workshop.</p>
                <div className="card-bg-gradient"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 position-relative overflow-hidden">
        <div className="container py-5">
          <div className="row section-header align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
              <h2 className="display-4 fw-bold mb-4">
                Let's Build<br /><span className="text-gold">Scalable Solutions</span>
              </h2>
              <p className="lead text-muted mb-5">
                Have a complex project in mind? Let's talk about how I can help you build scalable, secure, and robust backend systems.
              </p>
              <div className="d-flex flex-column gap-3">
                <a href="https://github.com/parthivajith4826" className="text-decoration-none text-white fs-5 hover-scale-up d-flex align-items-center gap-3">
                  <i className="devicon-github-original display-6"></i> github.com/parthivajith
                </a>
                <a href="https://www.linkedin.com/in/parthiv-ajith/" className="text-decoration-none text-white fs-5 hover-scale-up d-flex align-items-center gap-3">
                  <i className="devicon-linkedin-plain display-6 text-primary"></i> linkedin.com/in/parthiv-ajith
                </a>
                <a href="https://leetcode.com/u/ParthivAjith/" className="text-decoration-none text-white fs-5 hover-scale-up d-flex align-items-center gap-3">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="display-6" style={{ width: "2.5rem", height: "2.5rem", fill: "#ffa116" }}>
                    <title>LeetCode</title>
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                  leetcode.com/u/ParthivAjith
                </a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="bg-dark-lighter p-5 rounded-5 shadow-lg position-relative z-1" style={{ border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <form action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="32a3680c-0a9d-4274-92f6-3e7ca6ea634c" />
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label text-gold small fw-bold">YOUR NAME</label>
                    <input type="text" className="form-control form-control-custom" id="name" name="name" required placeholder="John Doe" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label text-gold small fw-bold">YOUR EMAIL</label>
                    <input type="email" className="form-control form-control-custom" id="email" name="email" required placeholder="john@example.com" />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="message" className="form-label text-gold small fw-bold">MESSAGE</label>
                    <textarea className="form-control form-control-custom" id="message" name="message" rows="3" required placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 py-3 shadow hover-scale-up">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-5 pb-3 border-top border-secondary">
        <div className="container text-center">
          <h3 className="text-white mb-4">Parthiv<span className="text-gold">Ajith.</span></h3>
          <p className="text-white-50 mb-4">&copy; 2026 Parthiv Ajith. Expert Python & Django Developer.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
