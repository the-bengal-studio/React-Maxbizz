import React from "react";
import { Link } from "react-router-dom";
import ServiceCarousel from "../../components/ServiceCarousel/ServiceCarousel";
import ServiceClients from "../../components/ServiceClients/ServiceClients";

const Service = () => {
  return (
    <div id="page" class="site">
      <div id="content" class="site-content">
        <div class="page-header flex-middle page-header-service">
          <div class="container">
            <div class="inner flex-middle">
              <h1 class="page-title">Our Services</h1>
              <ul id="breadcrumbs" class="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li class="active">Our Services</li>
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
            <div class="col-md-12 text-center">
              <div class="ot-heading">
                <span class="is_highlight">Improve Your Business</span>
                <h3 class="main-head">
                  We Offer Great <br /> Number of Finance Services
                </h3>
              </div>
              <div class="space-60"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4 col-md-6 mb-5">
              <div class="ot-image-box">
                <a href="service-detail-1.html">
                  <img src="/images/services/service-box1.jpg" alt />
                </a>
                <div class="content-box">
                  <h5 class="title-box">
                    <a href="service-detail-1.html">Marketing Research</a>
                  </h5>
                  <p>
                    Analysis of the market as a whole and its particular
                    components (competitors, consumers, product, etc.)
                  </p>
                </div>
                <a href="service-detail-1.html" class="link-box font-second">
                  <span>Explore More</span>
                  <i class="ot-flaticon-trajectory"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 mb-5">
              <div class="ot-image-box">
                <a href="service-detail-1.html">
                  <img src="/images/services/service-box2.jpg" alt />
                </a>
                <div class="content-box">
                  <h5 class="title-box">
                    <a href="service-detail-1.html">Organizational Audit</a>
                  </h5>
                  <p>
                    Analysis of internal processes & procedures, staff activity
                    evaluation, evaluation of technologies.
                  </p>
                </div>
                <a href="service-detail-1.html" class="link-box font-second">
                  <span>Explore More</span>
                  <i class="ot-flaticon-trajectory"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 mb-5">
              <div class="ot-image-box">
                <a href="service-detail-1.html">
                  <img src="/images/services/service-box3.jpg" alt />
                </a>
                <div class="content-box">
                  <h5 class="title-box">
                    <a href="service-detail-1.html">Business Consulting</a>
                  </h5>
                  <p>
                    Successful experience of experts in structuring investment
                    projects, developing and implementing.
                  </p>
                </div>
                <a href="service-detail-1.html" class="link-box font-second">
                  <span>Explore More</span>
                  <i class="ot-flaticon-trajectory"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 mb-5 mb-xl-0">
              <div class="ot-image-box">
                <a href="service-detail-1.html">
                  <img src="/images/services/service-box4.jpg" alt />
                </a>
                <div class="content-box">
                  <h5 class="title-box">
                    <a href="service-detail-1.html">Project Management</a>
                  </h5>
                  <p>
                    We are working in the format of an outsourcing project
                    office. We assume operational coordination.
                  </p>
                </div>
                <a href="service-detail-1.html" class="link-box font-second">
                  <span>Explore More</span>
                  <i class="ot-flaticon-trajectory"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 mb-5 mb-md-0">
              <div class="ot-image-box">
                <a href="service-detail-1.html">
                  <img src="/images/services/service-box5.jpg" alt />
                </a>
                <div class="content-box">
                  <h5 class="title-box">
                    <a href="service-detail-1.html">Support Functions</a>
                  </h5>
                  <p>
                    Integrating of innovation and public benefit into your
                    workflows; ensuring strategic and sustainable.
                  </p>
                </div>
                <a href="service-detail-1.html" class="link-box font-second">
                  <span>Explore More</span>
                  <i class="ot-flaticon-trajectory"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="ot-image-box">
                <a href="service-detail-1.html">
                  <img src="/images/services/service-box6.jpg" alt />
                </a>
                <div class="content-box">
                  <h5 class="title-box">
                    <a href="service-detail-1.html">Finance Planning</a>
                  </h5>
                  <p>
                    We identify the mission, goals and strategic priorities of a
                    business project or non-profit organization.
                  </p>
                </div>
                <a href="service-detail-1.html" class="link-box font-second">
                  <span>Explore More</span>
                  <i class="ot-flaticon-trajectory"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="space-60 d-none d-md-block"></div>
          <div class="space-60"></div>
        </div>
      </section>
      <section class="service-testi">
        <div class="space-90 d-none d-md-block"></div>
        <div class="space-60"></div>
        <div class="row mx-0">
          <div class="col-xl-6 offset-xl-6 col-lg-8 offset-lg-3 col-md-9 offset-md-2 px-3 px-lg-0">
            <div class="ot-heading">
              <span class="is_highlight">testimonials</span>
              <h3 class="main-head">What People Say About Us</h3>
            </div>
            <div class="space-10"></div>
            <div class="space-8"></div>
            <ServiceCarousel></ServiceCarousel>
          </div>
        </div>
        <div class="space-60 d-none d-md-block"></div>
        <div class="space-60"></div>=
      </section>
      <ServiceClients></ServiceClients>
    </div>
  );
};

export default Service;
