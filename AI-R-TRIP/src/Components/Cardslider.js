import React, { useState, useEffect, useRef } from "react";
import "./CustomSlider.css";

const CustomSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default to show 3 slides
  const sliderWrapperRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(slides.length / slidesToShow) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(slides.length / slidesToShow) - 1
        : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4); // or 4, depending on your design
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  useEffect(() => {
    if (sliderWrapperRef.current) {
      sliderWrapperRef.current.style.transform = `translateX(-${
        currentIndex * (100 / slidesToShow)
      }%)`;
    }
  }, [currentIndex, slidesToShow]);

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="slider-wrapper" ref={sliderWrapperRef}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>

      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="dots">
        {Array.from({ length: Math.ceil(slides.length / slidesToShow) }).map(
          (_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          )
        )}
      </div>
    </div>
  );
};

export default CustomSlider;
