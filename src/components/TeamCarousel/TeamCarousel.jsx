import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./TeamCarousel.css";

const TeamCarousel = () => {
  return (
    <div
      className="ot-testimonials ot-testimonials-carousel-2 "
      data-loop="true"
      data-auto="true"
      data-time="7000"
      data-dots="true"
    >
      <div class="container-fluid">
        <div className="row title" style={{ marginBottom: "20px" }}></div>
      </div>
      <div class="container-fluid">
        <OwlCarousel
          items={5}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 6,
            },
          }}
          className="owl-theme"
          loop
          margin={8}
        >
          <div>
            <div class="ot-team team-2 circle-social">
              <div class="team-thumb">
                <img src="images/team5.jpg" alt />
              </div>
              <div class="team-info">
                <h6 class="tname">Mary Flynn</h6>
                <span>CHIEF TECHNOLOGY OFFICER</span>
                <div class="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="ot-team team-2 circle-social">
              <div class="team-thumb">
                <img src="images/team1.jpg" alt />
              </div>
              <div class="team-info">
                <h6 class="tname">Monica Black</h6>
                <span>CHIEF TECHNOLOGY OFFICER</span>
                <div class="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="ot-team team-2 circle-social">
              <div class="team-thumb">
                <img src="images/team2.jpg" alt />
              </div>
              <div class="team-info">
                <h6 class="tname">Peter Perish</h6>
                <span>INTERNATIONAL CONSULTANT</span>
                <div class="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="ot-team team-2 circle-social">
              <div class="team-thumb">
                <img src="images/team3.jpg" alt />
              </div>
              <div class="team-info">
                <h6 class="tname">Olivia Woodson</h6>
                <span>INTERNATIONAL CONSULTANT</span>
                <div class="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="ot-team team-2 circle-social">
              <div class="team-thumb">
                <img src="images/team4.jpg" alt />
              </div>
              <div class="team-info">
                <h6 class="tname">Peter Adams</h6>
                <span>CO-FOUNDER OF COMPANY</span>
                <div class="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="ot-team team-2 circle-social">
            <div class="team-thumb">
              <img src="images/team6.jpg" alt />
            </div>
            <div class="team-info">
              <h6 class="tname">Adam Oswald</h6>
              <span>CHIEF MARKETING OFFICER</span>
              <div class="team-social">
                <a rel="nofollow" href="#">
                  <i aria-hidden="true" class="fab fa-twitter"></i>
                </a>
                <a rel="nofollow" href="#">
                  <i aria-hidden="true" class="fab fa-facebook-f"></i>
                </a>
                <a rel="nofollow" href="#">
                  <i aria-hidden="true" class="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="ot-team team-2 circle-social">
              <div class="team-thumb">
                <img src="images/team7.jpg" alt />
              </div>
              <div class="team-info">
                <h6 class="tname">Kate Green</h6>
                <span>CHIEF FINANCIAL OFFICER</span>
                <div class="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="ot-team team-2 circle-social">
              <div class="team-thumb">
                <img src="images/team8.jpg" alt />
              </div>
              <div class="team-info">
                <h6 class="tname">Harry Septem</h6>
                <span>CO-FOUNDER OF COMPANY</span>
                <div class="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" class="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TeamCarousel;
