import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function ServiceClients({ backgroundColor }) {
  const sectionClass = backgroundColor || "bg-color-primary";

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="space-60"></div>
        <div className="row">
          <div className="col-lg-12">
            <OwlCarousel
              className="owl-theme"
              loop
              autoplay
              autoplayTimeout={7000}
              dots={false}
              items={6}
              margin={80}
              responsive={{
                0: {
                  items: 2,
                },
                600: {
                  items: 3,
                },
                1000: {
                  items: 6,
                },
              }}
            >
              <a href="#">
                <figure>
                  <img src="images/client-logos/01.svg" alt="" />
                </figure>
              </a>
              <a href="#">
                <figure>
                  <img src="images/client-logos/02.svg" alt="" />
                </figure>
              </a>
              <a href="#">
                <figure>
                  <img src="images/client-logos/03.svg" alt="" />
                </figure>
              </a>
              <a href="#">
                <figure>
                  <img src="images/client-logos/04.svg" alt="" />
                </figure>
              </a>
              <a href="#">
                <figure>
                  <img src="images/client-logos/05.svg" alt="" />
                </figure>
              </a>
              <a href="#">
                <figure>
                  <img src="images/client-logos/06.svg" alt="" />
                </figure>
              </a>
            </OwlCarousel>
          </div>
        </div>
        <div className="space-60"></div>
      </div>
    </section>
  );
}
export default ServiceClients;
