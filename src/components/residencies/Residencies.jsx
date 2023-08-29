import React from "react";
import "./Residences.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/comon";
import { motion } from "framer-motion";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <motion.button
        initial={{ x: "70rem", opacity: 5 }}
        animate={{ x: 9, opacity: 5 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </motion.button>
      <motion.button
        initial={{ x: "-47rem", opacity: 5 }}
        animate={{ x: 2, opacity: 5 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </motion.button>
    </div>
  );
};
