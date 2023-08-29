import React from "react";
import "./GetStarted.css";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <motion.div
        initial={{ x: "-30rem", opacity: 50 }}
        animate={{ x: 7, opacity: 5 }}
        transition={{
          duration: 4,
          type: "spring",
        }}
        className="paddings innerWidth g-container"
      >
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Ginger</span>
          <span className="secondaryText">
            Subscribe and find super attractive prices.
            <br />
            Find your residence soon.
          </span>
          <button className="button">
            <a href="gingerlx56@gmail.com">Get Started</a>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
