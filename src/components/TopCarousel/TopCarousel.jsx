import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./TopCarousel.css";

const animation = { duration: 50000, easing: (t) => t };

export default () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: isMobile ? 2 : 6,
      //   spacing: 15,
    },
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={sliderRef} className="keen-slider keen-slider-top">
      <div className="keen-slider__slide number-slide-top">
        <img src="/images/client-logos/01.svg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide-top">
        <img src="/images/client-logos/02.svg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide-top">
        <img src="/images/client-logos/03.svg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide-top">
        <img src="/images/client-logos/04.svg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide-top">
        <img src="/images/client-logos/05.svg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide-top">
        <img src="/images/client-logos/06.svg" alt="" />
      </div>
    </div>
  );
};
