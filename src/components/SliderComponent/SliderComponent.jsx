import React from "react";
// import "/public/css/bootstrap.min.css";
// import "/public/css/style.css";
// import "/public/css/settings.css";
// import "/public/css/navigation.css";
// import "/public/js/jquery.min.js";
// import "/public/js/jquery.magnific-popup.min.js";
// import "/public/js/jquery.themepunch.tools.min.js";
// import "/public/js/jquery.themepunch.revolution.min.js";
// import "/public/js/scripts.js";
// import "/public/js/rev-script-1.js";

const SliderComponent = () => {
  return (
    <div
      id="rev_slider_one_wrapper"
      className="rev_slider_wrapper fullscreen-container"
      data-alias="mask-showcase"
      data-source="gallery"
      style={{ background: "#ffffff", padding: "0px" }}
    >
      {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
      <div
        id="rev_slider_one"
        className="rev_slider fullscreenbanner"
        style={{ display: "none" }}
        data-version="5.4.1"
      >
        <ul>
          {/* SLIDE 1 */}
          <li
            data-index="rs-70"
            data-transition="fade"
            data-slotamount="default"
            // ... other data attributes
          >
            {/* MAIN IMAGE */}
            <img
              src={"/images/slider/slide1.jpg"}
              data-bgcolor="transparent"
              alt=""
              data-bgposition="50% 50%"
              data-bgfit="cover"
              data-bgrepeat="no-repeat"
              data-bgparallax="off"
              className="rev-slidebg"
              data-no-retina
            />

            {/* LAYER 3  Thin text title*/}
            <div
              className="tp-caption tp-resizeme slider-tag-line slide-rev-subtitle"
              // ... other attributes
            >
              <span>Welcome</span>
              Start growing your marketing today
            </div>

            {/* LAYER 2  Bold Title*/}
            <div
              className="tp-caption tp-resizeme"
              // ... other attributes
            >
              Corporate and <br />
              Finance Solutions
            </div>

            {/* LAYER 3  Paragraph*/}
            <div
              className="tp-caption"
              // ... other attributes
            >
              We are a boutique firm designed for Private Equity, Family
              Offices, and <br />
              Growth-Stage Companies seeking to maximize results
            </div>

            {/* LAYER 4  Explore More*/}
            <div className="tp-caption rev-btn">
              <a
                href="about-us.html"
                className="octf-btn octf-btn-primary btn-slider btn-large"
              >
                Explore More
              </a>
            </div>

            {/* LAYER 5  Get in touch*/}
            <div className="tp-caption rev-btn">
              <a
                href="contact.html"
                className="octf-btn octf-btn-border octf-btn-light btn-slider btn-large"
              >
                Get in touch
              </a>
            </div>
          </li>
          {/* Repeat similar structure for other slides */}
        </ul>
        <div
          className="tp-bannertimer"
          style={{ height: "10px", background: "rgba(0, 0, 0, 0)" }}
        ></div>
      </div>
    </div>
  );
};

export default SliderComponent;
