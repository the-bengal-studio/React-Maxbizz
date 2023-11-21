import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const TestimonialCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    spacing: 15,
  });

  return (
    <div className="ot-testimonials ot-testimonials-carousel-2">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <div className="testi-item">
            <div className="tphoto">
              <img src="/images/avatar-1.png" alt="Oliver Simson" />
            </div>
            <div className="ttext">
              “We know a diverse workforce and an inclusive culture matters to
              our clients. Through philanthropy and employee volunteerism, we
              support the diverse communities where our employees live.”
            </div>
            <div className="t-head">
              <div className="tinfo">
                <h6>Oliver Simson</h6>
                <span>client of company</span>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="testi-item">
            <div className="tphoto">
              <img src="/images/testi2.png" alt="Mary Grey" />
            </div>
            <div className="ttext">
              “We know a diverse workforce and an inclusive culture matters to
              our clients. Through philanthropy and employee volunteerism, we
              support the diverse communities where our employees live.”
            </div>
            <div className="t-head">
              <div className="tinfo">
                <h6>Mary Grey</h6>
                <span>Manager</span>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="testi-item">
            <div className="tphoto">
              <img src="/images/testi3.png" alt="Samanta Fox" />
            </div>
            <div className="ttext">
              “We know a diverse workforce and an inclusive culture matters to
              our clients. Through philanthropy and employee volunteerism, we
              support the diverse communities where our employees live.”
            </div>
            <div className="t-head">
              <div className="tinfo">
                <h6>Samanta Fox</h6>
                <span>Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
