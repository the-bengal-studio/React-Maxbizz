import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceClients from "../../components/ServiceClients/ServiceClients";
import AboutUsTestimonial from "../../components/AboutUsTestimonial/AboutUsTestimonial";

const TeamSocialSection = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`team-social ${isActive ? "active" : ""}`}>
      <a rel="nofollow" href="#" className="pinterest">
        <i aria-hidden="true" className="fab fa-pinterest-p"></i>
      </a>
      <a rel="nofollow" href="#" className="facebook">
        <i aria-hidden="true" className="fab fa-facebook-f"></i>
      </a>
      <a rel="nofollow" href="#" className="twitter">
        <i aria-hidden="true" className="fab fa-twitter"></i>
      </a>
      <span className="ot-flaticon-signs" onClick={toggleActive}></span>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div>
      <div id="content" class="site-content">
        <div class="page-header flex-middle page-header-about">
          <div class="container">
            <div class="inner flex-middle">
              <h1 class="page-title">About Us</h1>
              <ul id="breadcrumbs" class="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li class="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="space-60 d-none d-md-block"></div>
          <div class="space-60"></div>
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0 align-self-center">
              <div class="about-img">
                <img src="images/image1-about-us.jpg" alt />
              </div>
            </div>
            <div class="offset-xl-1 col-xl-5 col-lg-6 align-self-center">
              <div class="ot-heading">
                <span class="is_highlight">about company</span>
                <h3 class="main-head">
                  Make Digital Marketing Work For Your Business
                </h3>
              </div>
              <div class="space-20"></div>
              <div class="space-4"></div>
              <p>
                Our clients’ needs are constantly changing, so we continually
                seek new and better ways to serve them. To do this, we are
                bringing new talent into the firm, acquiring new companies, and
                developing new capabilities, for example, in design.
              </p>
              <p>
                We serve clients at every level of their organization, whether
                as a trusted advisor to top management or as a hands-on coach.
              </p>
              <div class="space-20"></div>
              <div class="row">
                <div class="col-6 about-border-right">
                  <img src="images/signature.png" alt />
                </div>
                <div class="col-6">
                  <div class="about-author">
                    <h6>Peter Adams</h6>
                    <p>co-founder of company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-60 d-none d-md-block"></div>
          <div class="space-50"></div>
          <div class="space-5"></div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-6 mb-5 mb-lg-0">
              <div class="number-left">
                <div class="ot-counter icounter">
                  <div class="c-number">
                    <span class="num" data-to="350" data-time="2000">
                      0
                    </span>
                  </div>
                  <h6>
                    Trusted <br />
                    Clients
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-6 mb-5 mb-lg-0">
              <div class="number-left">
                <div class="ot-counter icounter">
                  <div class="c-number">
                    <span class="num" data-to="215" data-time="2000">
                      0
                    </span>
                  </div>
                  <h6>
                    Finished <br />
                    Projects
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="number-left">
                <div class="ot-counter icounter">
                  <div class="c-number">
                    <span class="num" data-to="15" data-time="2000">
                      0
                    </span>
                  </div>
                  <h6>
                    Years of <br />
                    Experience
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="number-left">
                <div class="ot-counter icounter">
                  <div class="c-number">
                    <span class="num" data-to="36" data-time="2000">
                      0
                    </span>
                  </div>
                  <h6>
                    Visited <br />
                    Conferences
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="space-60 d-none d-md-block"></div>
          <div class="space-50"></div>
          <div class="space-2"></div>
        </div>
      </section>
      <section class="about-work">
        <div class="container">
          <div class="space-60 d-none d-md-block"></div>
          <div class="space-50"></div>
          <div class="space-5"></div>
          <div class="row">
            <div class="col-xl-8 offset-xl-2 text-center">
              <div class="ot-heading">
                <span class="is_highlight">what we do</span>
                <h3 class="main-head text-light">
                  Creating Your Startup Business
                </h3>
              </div>
              <div class="space-20"></div>
              <div class="space-3"></div>
              <p class="text-light">
                We help you see the world differently, discover opportunities
                you may never have imagined and achieve results that bridge what
                is with what can be.
              </p>
            </div>
          </div>
          <div class="space-20"></div>
          <div class="space-4"></div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <div class="ot-image-box hover-transfoem-none">
                <a href="#">
                  <img src="images/features1-about-us.jpg" alt />
                </a>
                <div class="content-box">
                  <h5 class="title-box">
                    <a href="#">Accounting & Finance</a>
                  </h5>
                  <p>
                    A great corporate strategy combines five elements: a bold
                    yet realistic ambition, a carefully considered portfolio.
                  </p>
                </div>
                <a href="#" class="link-box font-second">
                  <span>Explore More</span>
                  <i class="ot-flaticon-trajectory"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <div class="ot-image-box hover-transfoem-none">
                <a href="#">
                  <img src="images/features2-about-us.jpg" alt />
                </a>
                <div class="content-box">
                  <h5 class="title-box">
                    <a href="#">Management Skills</a>
                  </h5>
                  <p>
                    A great corporate strategy combines five elements: a bold
                    yet realistic ambition, a carefully considered portfolio.
                  </p>
                </div>
                <a href="#" class="link-box font-second">
                  <span>Explore More</span>
                  <i class="ot-flaticon-trajectory"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="ot-image-box hover-transfoem-none">
                <a href="#">
                  <img src="images/features3-about-us.jpg" alt />
                </a>
                <div class="content-box">
                  <h5 class="title-box">
                    <a href="#">Business Planning</a>
                  </h5>
                  <p>
                    A great corporate strategy combines five elements: a bold
                    yet realistic ambition, a carefully considered portfolio.
                  </p>
                </div>
                <a href="#" class="link-box font-second">
                  <span>Explore More</span>
                  <i class="ot-flaticon-trajectory"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="space-60"></div>
          <div class="space-6"></div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 mb-5 mb-lg-0 px-lg-0 text-center">
              <img src="images/image2-about-us.png" alt />
            </div>
            <div class="col-lg-6 col-md-12 px-lg-0">
              <div class="ot-heading">
                <span class="is_highlight">main principles</span>
                <h3 class="main-head">Global Reach with Local Understanding</h3>
              </div>
              <div class="space-20"></div>
              <div class="space-2"></div>
              <p>
                In healthy companies, changing directions or launching new
                projects means combining underlying strengths and capacities
                with new.
              </p>
              <div class="space-30"></div>
              <div class="space-5"></div>
              <div class="line-progress" data-percent="60">
                <h6>marketing analysis</h6>
                <div class="iprogress">
                  <div class="progress-bar">
                    <span class="percent"></span>
                  </div>
                </div>
              </div>
              <div class="space-10"></div>
              <div class="space-7"></div>
              <div class="line-progress" data-percent="80">
                <h6>finance strategy</h6>
                <div class="iprogress">
                  <div class="progress-bar">
                    <span class="percent"></span>
                  </div>
                </div>
              </div>
              <div class="space-10"></div>
              <div class="space-7"></div>
              <div class="line-progress" data-percent="58">
                <h6>business innovation</h6>
                <div class="iprogress">
                  <div class="progress-bar">
                    <span class="percent"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-60 d-lg-none"></div>
        </div>
      </section>
      <section>
        <ServiceClients></ServiceClients>
      </section>
      <section>
        <AboutUsTestimonial></AboutUsTestimonial>
      </section>
      <section>
        <div class="container">
          <div class="space-60 d-none d-md-block"></div>
          <div class="space-60"></div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 text-center">
              <div class="ot-heading">
                <span class="is_highlight">our team</span>
                <h3 class="main-head">Our Skilled Leaders</h3>
              </div>
              <div class="space-20"></div>
              <p class="px-xl-5">
                We help you see the world differently, discover opportunities
                you may never have imagined and achieve results that bridge what
                is with what can be.
              </p>
              <div class="space-20"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-md-6 mb-5 mb-xl-0">
              <div class="ot-team team-1">
                <div class="team-thumb">
                  <img src="images/team1.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div class="team-info">
                  <h6 class="tname">Monica Black</h6>
                  <span>chief communication officer</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-5 mb-xl-0">
              <div class="ot-team team-1">
                <div class="team-thumb">
                  <img src="images/team2.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div class="team-info">
                  <h6 class="tname">Peter Perish</h6>
                  <span>chief business project</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-5 mb-md-0">
              <div class="ot-team team-1">
                <div class="team-thumb">
                  <img src="images/team3.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div class="team-info">
                  <h6 class="tname">Olivia Woodson</h6>
                  <span>international consultant</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="ot-team team-1">
                <div class="team-thumb">
                  <img src="images/team4.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div class="team-info">
                  <h6 class="tname">Peter Adams</h6>
                  <span>co-founder of company</span>
                </div>
              </div>
            </div>
          </div>
          <div class="space-50 d-none d-md-block"></div>
          <div class="space-60"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
