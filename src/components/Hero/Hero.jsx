import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br />
              Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of propeties that suit you very easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <motion.span
                initial={{ x: "-47rem", opacity: 5 }}
                animate={{ x: 2, opacity: 5 }}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
                className="primaryText"
              >
                <CountUp start={8800} end={9000} duration={4} />
                <span className="orangeText">+</span>
              </motion.span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <motion.span
                initial={{  x: "90rem", opacity: 50 }}
                animate={{ x: 2, opacity: 5 }}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
                className="primaryText"
              >
                <CountUp start={1950} end={2000} duration={4} />
                <span className="orangeText">+</span>
              </motion.span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <motion.span
                initial={{  x: "30rem", opacity: 50 }}
                animate={{ x: 2, opacity: 5 }}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
                className="primaryText"
              >
                <CountUp  start={12} end={38} />
                <span className="orangeText">+</span>
              </motion.span>
              <span className="secondaryText">Awards Winnings</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
