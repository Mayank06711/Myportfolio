import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion.js";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { useReducer } from "react";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef(); //its hook of react
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
    // both are function if you remove this you wil see that when you click on side bar menu to mov to diff section it doesn't closes on its own
  });
  // useHeaderShadow is cutom hooks made by me
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      {/*  a without href will go to the corresponding id */}
      <a className="anchor" id="expert"></a>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Mayank</div>
        <ul
          ref={menuRef}
          className={`flexCenter ${css.menu}`}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#experties">Services</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+91 91252526906</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        {/* this is only for mediun and small screen*/}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};
export default Header;
