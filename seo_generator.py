import json
import os
import random
import sys

# TEMPLATE A: Standard (Center Hero, Services, Use Cases, Tech, Why Me, FAQ Accordion)
TEMPLATE_A = """import React from "react";
import {{ Link }} from "react-router-dom";
import {{ Helmet }} from "react-helmet-async";

const {component_name} = () => {{
  return (
    <div className="seo-page position-relative overflow-hidden pt-5 bg-dark">
      <Helmet>
        <title>{seo_title}</title>
        <meta name="description" content="{meta_description}" />
        <meta name="keywords" content="{keywords}" />
        <link rel="canonical" href="https://parthivajith.dev/{slug}" />
      </Helmet>

      {{/* Hero Section - Center */}}
      <section className="hero-section d-flex align-items-center" style={{{{ minHeight: "80vh", paddingTop: "120px" }}}}>
        <div className="container position-relative z-1 text-center">
          <span className="text-gold fw-bold text-uppercase letter-spacing-2 d-block mb-3" data-aos="fade-up">
            {hero_subtitle}
          </span>
          <h1 className="display-4 fw-bold mb-4 text-white" data-aos="fade-up" data-aos-delay="100">
            {h1}
          </h1>
          <p className="lead text-muted mb-5 mx-auto" data-aos="fade-up" data-aos-delay="200" style={{{{ maxWidth: "800px" }}}}>
            {intro_text}
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
             <a href="/#contact" className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg hover-scale-up">{cta_button}</a>
          </div>
        </div>
      </section>

      {{/* Services Section */}}
      <section className="py-5 position-relative {bg_1}">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">{services_heading}</h2>
            <div className="d-flex justify-content-center mt-3"><svg width="100" height="10"><path d="M0 5 Q 50 10 100 5" stroke="#D4AF37" strokeWidth="2" fill="none" /></svg></div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <div className="feature-box p-4 rounded-4 shadow-sm h-100 text-center border-secondary" data-aos="fade-up">
                <i className="{service_1_icon} colored display-4 mb-3 text-gold"></i>
                <h3 className="h4 text-white">{service_1_title}</h3>
                <p className="text-muted small">{service_1_desc}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box p-4 rounded-4 shadow-sm h-100 text-center border-secondary" data-aos="fade-up" data-aos-delay="100">
                <i className="{service_2_icon} colored display-4 mb-3 text-gold"></i>
                <h3 className="h4 text-white">{service_2_title}</h3>
                <p className="text-muted small">{service_2_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* Use Cases Section */}}
      <section className="py-5 {bg_2}">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4 text-center">{usecases_heading}</h2>
          <div className="row">
            <div className="col-md-6 mb-4" data-aos="fade-right">
              <h4 className="text-gold">{usecase_1_title}</h4>
              <p className="text-muted">{usecase_1_desc}</p>
            </div>
            <div className="col-md-6 mb-4" data-aos="fade-left">
              <h4 className="text-gold">{usecase_2_title}</h4>
              <p className="text-muted">{usecase_2_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {{/* Technical Approach */}}
      <section className="py-5 border-top border-bottom border-secondary {bg_3}">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">{tech_heading}</h2>
              <p className="lead text-muted">
                {tech_desc}
              </p>
            </div>
            <div className="col-md-6 text-center" data-aos="zoom-in">
              <div className="collection-card p-5"><i className="{tech_icon} display-1 text-gold"></i></div>
            </div>
          </div>
        </div>
      </section>

      {{/* Why Choose Me & Location Section */}}
      <section className="py-5 {bg_4}">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">{why_me_heading}</h2>
          <p className="text-muted mx-auto" style={{{{ maxWidth: "700px" }}}}>
            {why_me_desc}
          </p>
        </div>
      </section>

      {{/* FAQ Section (Accordion) */}}
      <section className="py-5 {bg_5}">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush bg-transparent" id="faqAccordion">
            {{[ 
              {{ q: "{faq_1_q}", a: "{faq_1_a}" }},
              {{ q: "{faq_2_q}", a: "{faq_2_a}" }},
              {{ q: "{faq_3_q}", a: "{faq_3_a}" }},
              {{ q: "{faq_4_q}", a: "{faq_4_a}" }},
              {{ q: "{faq_5_q}", a: "{faq_5_a}" }},
              {{ q: "{faq_6_q}", a: "{faq_6_a}" }}
            ].map((faq, i) => (
              <div className="accordion-item bg-transparent border-secondary" key={{i}}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target={{`#faq-${{i}}`}}>
                    {{faq.q}}
                  </button>
                </h2>
                <div id={{`faq-${{i}}`}} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">{{faq.a}}</div>
                </div>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Internal Linking */}}
      <section className="py-5 border-top border-secondary bg-black">
        <div className="container text-center">
          <p className="text-muted">Explore my core capabilities:</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/python-django-developer-kerala" className="btn btn-outline-gold btn-sm">Kerala Python Services</Link>
            <Link to="/django-rest-framework-api" className="btn btn-outline-gold btn-sm">DRF Architecture Hub</Link>
            <Link to="/zoho-services-provider-kerala" className="btn btn-outline-gold btn-sm">Zoho Solutions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}};

export default {component_name};
"""

# TEMPLATE B: Left Hero, Tech First, FAQ Grid
TEMPLATE_B = """import React from "react";
import {{ Link }} from "react-router-dom";
import {{ Helmet }} from "react-helmet-async";

const {component_name} = () => {{
  return (
    <div className="seo-page position-relative overflow-hidden pt-5 bg-dark">
      <Helmet>
        <title>{seo_title}</title>
        <meta name="description" content="{meta_description}" />
        <meta name="keywords" content="{keywords}" />
        <link rel="canonical" href="https://parthivajith.dev/{slug}" />
      </Helmet>

      {{/* Hero Section - Centered Wide */}}
      <section className="hero-section d-flex align-items-center text-center" style={{{{ minHeight: "75vh", paddingTop: "140px" }}}}>
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up">
              <span className="badge bg-secondary text-gold mb-3 px-3 py-2 border border-secondary">
                {hero_subtitle}
              </span>
              <h1 className="display-4 fw-bold mb-4 text-white">
                {h1}
              </h1>
              <p className="lead text-muted mx-auto mb-5" style={{{{ maxWidth: "800px" }}}}>
                {intro_text}
              </p>
              <div>
                 <a href="/#contact" className="btn btn-outline-gold btn-lg px-4 hover-scale-up">{cta_button}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* Technical Approach - Moved Up */}}
      <section className="py-5 {bg_1} border-top border-secondary">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold mb-4 text-gold">{tech_heading}</h2>
              <p className="lead text-muted">
                {tech_desc}
              </p>
            </div>
            <div className="col-md-6 text-center" data-aos="fade-right">
              <i className="{tech_icon} display-1 text-white opacity-50"></i>
            </div>
          </div>
        </div>
      </section>

      {{/* Services Section - Stacked Row */}}
      <section className="py-5 {bg_2}">
        <div className="container">
          <div className="mb-5 border-start border-4 border-warning ps-4">
            <h2 className="display-5 fw-bold">{services_heading}</h2>
          </div>
          <div className="row g-5">
            <div className="col-md-6 d-flex align-items-start" data-aos="fade-up">
              <div className="me-4"><i className="{service_1_icon} display-5 text-gold"></i></div>
              <div>
                <h3 className="h4 text-white">{service_1_title}</h3>
                <p className="text-muted">{service_1_desc}</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-start" data-aos="fade-up" data-aos-delay="100">
              <div className="me-4"><i className="{service_2_icon} display-5 text-gold"></i></div>
              <div>
                <h3 className="h4 text-white">{service_2_title}</h3>
                <p className="text-muted">{service_2_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* FAQ Section (Grid) */}}
      <section className="py-5 {bg_3} border-top border-bottom border-secondary">
        <div className="container">
          <h2 className="fw-bold mb-5 text-center">Questions & Answers</h2>
          <div className="row g-4">
            {{[ 
              {{ q: "{faq_1_q}", a: "{faq_1_a}" }},
              {{ q: "{faq_2_q}", a: "{faq_2_a}" }},
              {{ q: "{faq_3_q}", a: "{faq_3_a}" }},
              {{ q: "{faq_4_q}", a: "{faq_4_a}" }},
              {{ q: "{faq_5_q}", a: "{faq_5_a}" }},
              {{ q: "{faq_6_q}", a: "{faq_6_a}" }}
            ].map((faq, i) => (
              <div className="col-md-6" key={{i}} data-aos="fade-up">
                <div className="p-4 h-100 bg-dark rounded-3 border border-secondary shadow-sm">
                  <h5 className="text-gold mb-3">{{faq.q}}</h5>
                  <p className="text-muted small mb-0">{{faq.a}}</p>
                </div>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Use Cases & Why Me Combined */}}
      <section className="py-5 {bg_4}">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-right">
              <h2 className="display-6 fw-bold mb-4">{usecases_heading}</h2>
              <div className="mb-4">
                <h4 className="text-white border-bottom border-secondary pb-2">{usecase_1_title}</h4>
                <p className="text-muted">{usecase_1_desc}</p>
              </div>
              <div>
                <h4 className="text-white border-bottom border-secondary pb-2">{usecase_2_title}</h4>
                <p className="text-muted">{usecase_2_desc}</p>
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0" data-aos="fade-left">
              <div className="p-4 bg-dark-lighter border border-secondary rounded-4 h-100 text-center d-flex flex-column justify-content-center">
                <h3 className="h4 fw-bold mb-3 text-gold">{why_me_heading}</h3>
                <p className="text-muted">{why_me_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* Internal Linking */}}
      <section className="py-4 border-top border-secondary bg-black">
        <div className="container text-center">
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <Link to="/python-django-developer-kerala" className="text-muted text-decoration-none hover-text-gold">Python Services</Link>
            <Link to="/django-rest-framework-api" className="text-muted text-decoration-none hover-text-gold">DRF APIs</Link>
            <Link to="/zoho-services-provider-kerala" className="text-muted text-decoration-none hover-text-gold">Zoho Solutions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}};

export default {component_name};
"""

# TEMPLATE C: Use Cases First, Services Cards, Center Minimal Hero
TEMPLATE_C = """import React from "react";
import {{ Link }} from "react-router-dom";
import {{ Helmet }} from "react-helmet-async";

const {component_name} = () => {{
  return (
    <div className="seo-page position-relative overflow-hidden pt-5 bg-black">
      <Helmet>
        <title>{seo_title}</title>
        <meta name="description" content="{meta_description}" />
        <meta name="keywords" content="{keywords}" />
        <link rel="canonical" href="https://parthivajith.me/{slug}" />
      </Helmet>

      {{/* Hero Section - Minimal Center */}}
      <section className="hero-section text-center d-flex align-items-end pb-5" style={{{{ minHeight: "65vh", paddingTop: "150px" }}}}>
        <div className="container position-relative z-1" data-aos="zoom-in">
          <h1 className="display-3 fw-bold mb-3 text-white text-uppercase" style={{{{ letterSpacing: "1px" }}}}>
            {h1}
          </h1>
          <p className="text-gold fw-bold letter-spacing-2 mb-4">{hero_subtitle}</p>
          <p className="lead text-muted mx-auto mb-5" style={{{{ maxWidth: "850px" }}}}>
            {intro_text}
          </p>
          <a href="/#contact" className="btn btn-light btn-lg px-5 text-dark fw-bold rounded-0">{cta_button}</a>
        </div>
      </section>

      {{/* Why Choose Me */}}
      <section className="py-5 {bg_1} border-top border-secondary">
        <div className="container text-center" data-aos="fade-up">
          <h2 className="fw-bold mb-3">{why_me_heading}</h2>
          <p className="text-muted lead mx-auto" style={{{{ maxWidth: "750px" }}}}>
            {why_me_desc}
          </p>
        </div>
      </section>

      {{/* Use Cases - Card Layout */}}
      <section className="py-5 {bg_2}">
        <div className="container">
          <h2 className="display-6 fw-bold mb-5 text-center text-gold">{usecases_heading}</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="card bg-dark border-secondary h-100">
                <div className="card-body p-5">
                  <h4 className="card-title text-white mb-3">{usecase_1_title}</h4>
                  <p className="card-text text-muted">{usecase_1_desc}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card bg-dark border-secondary h-100">
                <div className="card-body p-5">
                  <h4 className="card-title text-white mb-3">{usecase_2_title}</h4>
                  <p className="card-text text-muted">{usecase_2_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* Services Section */}}
      <section className="py-5 {bg_3} border-top border-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4 text-center">
              <h2 className="display-5 fw-bold">{services_heading}</h2>
            </div>
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <div className="d-flex align-items-center mb-3">
                <i className="{service_1_icon} text-gold fs-2 me-3"></i>
                <h3 className="h4 text-white m-0">{service_1_title}</h3>
              </div>
              <p className="text-muted ps-5">{service_1_desc}</p>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="d-flex align-items-center mb-3">
                <i className="{service_2_icon} text-gold fs-2 me-3"></i>
                <h3 className="h4 text-white m-0">{service_2_title}</h3>
              </div>
              <p className="text-muted ps-5">{service_2_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {{/* Tech & FAQ Combine */}}
      <section className="py-5 {bg_4}">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <i className="{tech_icon} display-2 text-gold mb-4"></i>
              <h2 className="fw-bold mb-3">{tech_heading}</h2>
              <p className="text-muted">{tech_desc}</p>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <h3 className="fw-bold mb-4 border-bottom border-secondary pb-2">FAQs</h3>
              <div className="accordion accordion-flush bg-transparent" id="faqAccordionC">
                {{[ 
                  {{ q: "{faq_1_q}", a: "{faq_1_a}" }},
                  {{ q: "{faq_2_q}", a: "{faq_2_a}" }},
                  {{ q: "{faq_3_q}", a: "{faq_3_a}" }}
                ].map((faq, i) => (
                  <div className="accordion-item bg-transparent border-secondary" key={{i}}>
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed bg-transparent text-white ps-0" type="button" data-bs-toggle="collapse" data-bs-target={{`#faqC-${{i}}`}}>
                        {{faq.q}}
                      </button>
                    </h2>
                    <div id={{`faqC-${{i}}`}} className="accordion-collapse collapse" data-bs-parent="#faqAccordionC">
                      <div className="accordion-body text-muted px-0">{{faq.a}}</div>
                    </div>
                  </div>
                ))}}
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* Internal Linking */}}
      <section className="py-3 bg-dark-lighter">
        <div className="container text-center">
          <Link to="/" className="text-muted small text-decoration-none">← Back to Main Portfolio</Link>
        </div>
      </section>
    </div>
  );
}};

export default {component_name};
"""

TEMPLATES = [TEMPLATE_A, TEMPLATE_B, TEMPLATE_C]
BG_CLASSES = ["bg-dark", "bg-black", "bg-dark-lighter"]

def generate_pages(data_file):
    with open(data_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    os.makedirs('src/pages', exist_ok=True)
    
    for page in data:
        component_name = page['component_name']
        
        # Randomize Template
        chosen_template = random.choice(TEMPLATES)
        
        # Randomize Backgrounds
        page['bg_1'] = random.choice(BG_CLASSES)
        page['bg_2'] = random.choice(BG_CLASSES)
        page['bg_3'] = random.choice(BG_CLASSES)
        page['bg_4'] = random.choice(BG_CLASSES)
        page['bg_5'] = random.choice(BG_CLASSES)
        
        content = chosen_template.format(**page)
        
        with open(f"src/pages/{component_name}.jsx", "w", encoding="utf-8") as f:
            f.write(content)
            
        print(f"Generated {component_name}.jsx with entropy.")

if __name__ == "__main__":
    import sys
    generate_pages(sys.argv[1] if len(sys.argv) > 1 else 'seo_data.json')
