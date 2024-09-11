import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Heart from "../../assets/heart.webp";
import hero_image from "../../assets/hero_image.webp";
import hero_image_back from "../../assets/hero_image_back.webp";
import Calories from "../../assets/calories.webp";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = { type: "spring", duration: 2 };
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="home" >
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />

        <div className="the-hero-ad">
          <motion.div
            initial={{ left: mobile ? "165px": "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading Section */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* FIGURES */}

        <div className="figures">
          <div>
            <span>
              <NumberCounter start={100} end={140} delay='4' preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter start={800} end={978} delay='4' preFix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter start={25} end={50} delay='4' preFix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="heart image" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Image */}

        <img
          src={hero_image}
          alt="a guy binding his shoe lace"
          className="hero-image"
        />
        <motion.img
        initial={{right:"11rem"}}
        whileInView={{right:"20rem"}}
        transition={transition}
          src={hero_image_back}
          alt="a background image"
          className="hero-image-back"
        />

        {/* Calories Image Div */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="calories burned image" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
