import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="site-footer" class="site-footer footer-v1">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-5 mb-xl-0">
              <div class="logo-ft">
                <Link to="/">
                  <img src="/images/02_White.svg" alt />
                </Link>
              </div>
              <div class="space-30"></div>
              <div class="space-2"></div>
              <p>
                We make this belief a reality by putting clients first, leading
                with exceptional ideas, doing the right thing, and giving back.
              </p>
              <div class="space-5"></div>
              <div class="space-3"></div>
              <div class="ft-list-icon">
                <a class="twitter" href="twitter.html">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="facebook" href="facebook.html">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="linkedin" href="linkedin.html">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-5 mb-xl-0">
              <h6 class="widget-footer-title">About us</h6>
              <div class="row">
                <div class="col-6">
                  <ul class="ft-list-link">
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <a href="#">Connect</a>
                    </li>
                    <li>
                      <a href="#">Subscribe</a>
                    </li>
                    <li>
                      <a href="#">Terms of use</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
                <div class="col-6">
                  <ul class="ft-list-link">
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Newsroom</a>
                    </li>
                    <li>
                      <a href="#">Case Studies</a>
                    </li>
                    <li>
                      <a href="#">Disclosures</a>
                    </li>
                    <li>
                      <Link to="/service">Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-5 mb-lg-0">
              <h6 class="widget-footer-title">Contacts</h6>
              <div class="footer-contact">
                <div class="footer-contact-icon phone-info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path d="M256,0C150.125,0,64,86.135,64,192c0,141.646,177.146,310,184.688,317.104C250.75,511.031,253.375,512,256,512    s5.25-0.969,7.313-2.896C270.854,502,448,333.646,448,192C448,86.135,361.875,0,256,0z M256,298.667    c-58.813,0-106.667-47.854-106.667-106.667S197.188,85.333,256,85.333S362.667,133.188,362.667,192S314.813,298.667,256,298.667z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="footer-contact-desc phone-info-desc">
                  <h6>Visit Us Daily</h6>
                  <p>411 University St, Seattle</p>
                </div>
              </div>
              <div class="footer-contact">
                <div class="footer-contact-icon phone-info-icon">
                  <a href="tel:1-800-456-478-23">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 384 384"
                      style={{ enableBackground: "new 0 0 384 384" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="footer-contact-desc phone-info-desc">
                  <h6>
                    <a href="tel:+1-800-456-478-23">Have Any Questions?</a>
                  </h6>
                  <p>+1-800-456-478-23</p>
                </div>
              </div>
              <div class="footer-contact">
                <div class="footer-contact-icon phone-info-icon">
                  <a href="mailto:Betazen Infotech@mail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"></path>
                      <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"></path>
                    </svg>
                  </a>
                </div>
                <div class="footer-contact-desc phone-info-desc">
                  <h6>
                    <a href="mailto:Betazen Infotech@mail.com">Mail Us</a>
                  </h6>
                  <p>Betazen Infotech@mail.com</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <h6 class="widget-footer-title">Subscribe</h6>
              <form class="ft-sub mc4wp-form" method="post">
                <div class="mc4wp-form-fields">
                  <div class="subscribe-inner-form">
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder="Your Email *"
                      required
                    />
                    <button type="submit" class="subscribe-btn-icon">
                      <i class="ot-flaticon-trajectory"></i>
                    </button>
                  </div>
                </div>
              </form>
              <div class="space-20"></div>
              <p>Subscribe to our newsletter. Be always in trend!</p>
            </div>
          </div>
          <div class="space-100"></div>
          <div class="space-10"></div>
          <div class="row">
            <div class="col-md-12 text-center">
              <p class="copyright-text">
                Copyright © 2023 Betazen Infotech by The Bengal Studio. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
