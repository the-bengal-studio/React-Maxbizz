import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./TeamCarousel.css";

const animation = { duration: 100000, easing: (t) => t };

export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 15,
    },
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide-all">
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
      <div className="keen-slider__slide number-slide-all">
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
        </div>{" "}
      </div>
      <div className="keen-slider__slide number-slide-all">
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
        </div>{" "}
      </div>
      <div className="keen-slider__slide number-slide-all">
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
        </div>{" "}
      </div>
      <div className="keen-slider__slide number-slide-all">
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
        </div>{" "}
      </div>
      <div className="keen-slider__slide number-slide-all">
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
          </div>{" "}
        </div>
        <div className="keen-slider__slide number-slide-all">
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
          </div>{" "}
        </div>
        <div className="keen-slider__slide number-slide-all">
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
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
