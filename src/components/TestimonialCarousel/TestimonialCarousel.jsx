import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function TestimonialCarousel() {
  return (
    <section className="consulting-testi">
      <div className="container">
        <div className="space-60 d-none d-md-block"></div>
        <div className="space-60"></div>
        <div className="ot-heading text-center">
          <span className="is_highlight">testimonials</span>
          <h3 className="main-head">What People Say About Us</h3>
        </div>
        <div className="space-50"></div>
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <OwlCarousel
              className="ot-testimonials ot-testimonials-carousel-2 owl-theme"
              loop
              autoplay
              autoplayTimeout={7000}
              nav
              dots={false}
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                1000: {
                  items: 1,
                },
              }}
            >
              <div className="testi-item">
                <div className="tphoto">
                  <img src="images/avatar-1.png" alt="Oliver Simson" />
                </div>
                <div className="ttext">
                  “We know a diverse workforce and an inclusive culture matters
                  to our clients. Through philanthropy and employee
                  volunteerism, we support the diverse communities where our
                  employees live.”
                </div>
                <div className="t-head">
                  <div className="tinfo">
                    <h6>Oliver Simson</h6>
                    <span>client of company</span>
                  </div>
                </div>
              </div>
              <div className="testi-item">
                <div className="tphoto">
                  <img src="images/testi2.png" alt="Mary Grey" />
                </div>
                <div className="ttext">
                  “We know a diverse workforce and an inclusive culture matters
                  to our clients. Through philanthropy and employee
                  volunteerism, we support the diverse communities where our
                  employees live.”
                </div>
                <div className="t-head">
                  <div className="tinfo">
                    <h6>Mary Grey</h6>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
              {/* Add more items here */}
              <div class="testi-item">
                <div class="tphoto">
                  <img src="images/testi3.png" alt="Samanta Fox" />
                </div>
                <div class="ttext">
                  “We know a diverse workforce and an inclusive culture matters
                  to our clients. Through philanthropy and employee
                  volunteerism, we support the diverse communities where our
                  employees live.”
                </div>
                <div class="t-head">
                  <div class="tinfo">
                    <h6>Samanta Fox</h6>
                    <span>Designer</span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="space-60"></div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
