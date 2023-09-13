import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        // staggerconatiner will show same animation to all children of parent container otherwise they will show different animation
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        // view port will cnonatain around 0.25 % of hero section
        className={`innerWidth ${css.container}`}
      >
        {/* upperelement */}
        <div className={css.upperElements}>
          {/* we need to specify specific animation for it s children so that they can be animated */}

          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText "
          >
            Hey There <br />
            I'm Mayank.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I am web-dev and cp enthusiast
            <br />
            And I love what i do
          </motion.span>
        </div>
        {/* {person imge} */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          {/* we keep our phots and icons in public so we can use them directly */}
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt="Myphoto"
          />
        </motion.div>
        {/* email */}
        <a className={css.email} href="mailto:mayank93soni@gmail.com">
          mayank93soni@gmail.com
        </a>

        {/* lowerelememt */}
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="certificate" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>WEBD/CP</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
