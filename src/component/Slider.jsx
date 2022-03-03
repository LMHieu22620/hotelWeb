import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import
const Slider = (props) => {
  const data = props.data;
  const timeOut = props.timeOut ? props.timeOut : "3000";
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlider = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    // const index = activeSlide + 1 === data.length ? data.length : "";
    setActiveSlide(index);
  });

  const prevSlider = useCallback(() => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  });

  useEffect(() => {
    if (props.auto) {
      const autoSlider = setInterval(() => {
        nextSlider();
      }, timeOut);
      return () => {
        clearInterval(autoSlider);
      };
    }
  }, [timeOut, nextSlider, props]);

  return (
    <div className="hero-slider">
      {data.map((item, index) => (
        <HeroSlider key={index} item={item} active={index === activeSlide} />
      ))}
      <div className="hero-slider__control">
        <div className="hero-slider__control__item" onClick={prevSlider}>
          <i class="bx bx-chevron-left bx-tada"></i>
        </div>
        <div className="hero-slider__control__item" onClick={nextSlider}>
          <i className="bx bx-chevron-right bx-tada"></i>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

const HeroSlider = (props) => (
  <div className={`hero-slider__item ${props.active ? "active" : ""}`}>
    <div className="hero-slider__item__image">
      <img src={props.item.image} alt="" />
      <div className="hero-slider__item__info">
        <div className="hero-slider__item__info__title">
          <span>{props.item.title}</span>
        </div>

        <div className="hero-slider__item__info__description">
          <span>{props.item.description}</span>
        </div>

        <div className="hero-slider__item__info__btn">
          <Link to={props.item.path}>
            <button>
              <i class="bx bx-heart-circle bx-burst"></i>
              <span>Xem chi tiết</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Slider;
