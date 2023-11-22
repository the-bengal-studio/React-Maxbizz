import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./ServiceCarousel.css";

const ServiceCarousel = () => {
  return (
    <div
      className="ot-testimonials ot-testimonials-carousel-2 vertical-dots"
      data-loop="true"
      data-auto="true"
      data-time="7000"
      data-dots="true"
    >
      <div class="container-fluid">
        <div className="row title" style={{ marginBottom: "20px" }}>
          {/* <div class="col-sm-12 btn btn-info">
            Owl Carousel In React Application
          </div> */}
        </div>
      </div>
      <div class="container-fluid">
        <OwlCarousel items={1} className="owl-theme" loop margin={8}>
          <div>
            <div class="testi-item text-left">
              <div class="ttext">
                “We know a diverse workforce and an inclusive culture matters to
                our clients. Through philanthropy and employee volunteerism, we
                support the diverse communities where our employees live.”
              </div>
              <div class="t-head">
                <div class="tinfo">
                  <h6>Oliver Simson</h6>
                  <span>client of company</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="testi-item text-left">
              <div class="ttext">
                "I am so happy, my dear friend, so absorbed in the exquisite
                sense of mere tranquil existence, that I neglect my talents. I
                should be incapable of drawing a single stroke at the present
                moment."
              </div>
              <div class="t-head">
                <div class="tinfo">
                  <h6>Mary Grey</h6>
                  <span>client of company</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="testi-item text-left">
              <div class="ttext">
                “We know a diverse workforce and an inclusive culture matters to
                our clients. Through philanthropy and employee volunteerism, we
                support the diverse communities where our employees live.”
              </div>
              <div class="t-head">
                <div class="tinfo">
                  <h6>Oliver Simson</h6>
                  <span>client of company</span>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ServiceCarousel;
