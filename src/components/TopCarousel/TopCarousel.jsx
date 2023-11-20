import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./TopCarousel.css";

const animation = { duration: 100000, easing: (t) => t };

export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 6,
      //   spacing: 15,
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
        <img src="/public/images/client-logos/01.svg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide-all">
        <img src="/public/images/client-logos/02.svg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide-all">
        <img src="/public/images/client-logos/03.svg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide-all">
        <img src="/public/images/client-logos/04.svg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide-all">
        <img src="/public/images/client-logos/05.svg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide-all">
        <img src="/public/images/client-logos/06.svg" alt="" />
      </div>
    </div>
  );
};
