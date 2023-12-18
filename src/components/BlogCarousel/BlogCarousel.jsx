import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./BlogCarousel.css";
const BlogCarousel = () => {
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
        <OwlCarousel items={1} className="owl-theme" loop margin={8}>
          <div>
            <div class="testi-item text-left">
              <img src="images/blog/gallery-2.jpg" alt />
            </div>
          </div>
          <div>
            <div class="testi-item text-left">
              <img src="images/blog/gallery-1.jpg" alt />
            </div>
          </div>
          <div>
            <div class="testi-item text-left">
              <img src="images/blog/gallery-2.jpg" alt />
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default BlogCarousel;
