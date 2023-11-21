import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

const ServiceCarousel = () => {
  const owlCarouselRef = useRef();

  useEffect(() => {
    // Initialize Owl Carousel
    if (owlCarouselRef.current) {
      $(owlCarouselRef.current).owlCarousel({
        items: 3, // Number of items to display
        loop: true,
        margin: 10,
        autoplay: true,
      });
    }
    return () => {
      // Destroy Owl Carousel when the component unmounts
      if (owlCarouselRef.current) {
        owlCarouselRef.current.trigger("destroy.owl.carousel");
      }
    };
  }, []);

  return (
    <div>
      <div className="owl-carousel" ref={owlCarouselRef}>
        {/* Your carousel items here */}
        <div className="item">
          {" "}
          <div class="ttext">
            “We know a diverse workforce and an inclusive culture matters to our
            clients. Through philanthropy and employee volunteerism, we support
            the diverse communities where our employees live.”
          </div>
          <div class="t-head">
            <div class="tinfo">
              <h6>Oliver Simson</h6>
              <span>client of company</span>
            </div>
          </div>
        </div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
