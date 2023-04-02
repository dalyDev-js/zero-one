import React from "react";
import { useRef, useState } from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import "./nav-bar.scss";

const variants1 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

/////
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      duration: 0.5,
    },
  },
  closed: {
    y: 200,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.5,
    },
  },
};

/////////////

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 2000}px at right top)`,
    transition: {
      type: "tween",
      stiffness: 220,
      restDelta: 2,
      duration: 0.5,
    },
  }),
  closed: {
    clipPath: "circle(30px at right top)",
    transition: {
      delay: 0.2,
      type: "tween",
      stiffness: 400,
      damping: 40,
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  const navbarRef = useRef(null);
  const [toggle, setToggle] = useState(false);

  const items = [
    "Home",
    "Courses",
    "Gallery",
    "About",
    "Our Team",
    "Contact",
    "Join Us",
  ];
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");
  //     const scrollPosition = window.scrollY;
  //     const currentSectionIndex = Array.from(sections).findIndex(
  //       (section) =>
  //         scrollPosition >= section.offsetTop &&
  //         scrollPosition < section.offsetTop + section.offsetHeight
  //     );
  //     setActiveIndex(currentSectionIndex >= 0 ? currentSectionIndex : null);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <nav className="app__navbar" ref={navbarRef}>
      <div className="app__navbar-logo">
        <a className="logoA" href="/">
          <img src={images.logo} alt="logo" />
        </a>
      </div>
      <motion.ul variants={variants1} className="app__navbar-links">
        <motion.li
          variants={variants}
          className="app__flex p-text"
          key={`link-Home`}>
          <Link
            to="Home"
            activeClass="active_yellow"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Home
          </Link>
        </motion.li>
        <motion.li
          variants={variants}
          className="app__flex p-text"
          key={`link-Courses`}>
          <Link
            to="Courses"
            activeClass="active_yellow"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Courses
          </Link>
        </motion.li>
        <motion.li
          variants={variants}
          className="app__flex p-text"
          key={`link-Gallery`}>
          <Link
            to="Gallery"
            activeClass="active_yellow"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Gallery
          </Link>
        </motion.li>
        <motion.li
          variants={variants}
          className="app__flex p-text"
          key={`link-About`}>
          <Link
            to="About"
            activeClass="active_yellow"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            About
          </Link>
        </motion.li>
        <motion.li
          variants={variants}
          className="app__flex p-text"
          key={`link-Our Team`}>
          <Link
            to="Our Team"
            activeClass="active_yellow"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Our Team
          </Link>
        </motion.li>
        <motion.li
          variants={variants}
          className="app__flex p-text"
          key={`link-Contact`}>
          <Link
            to="Contact"
            activeClass="active_yellow"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Contact
          </Link>
        </motion.li>
        <motion.li
          variants={variants}
          className="app__flex p-text"
          key={`link-Join Us`}>
          <Link
            to="Join Us"
            className="green"
            activeClass="active-green"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Join Us
          </Link>
        </motion.li>
      </motion.ul>
      <div className="app__navbar-menu">
        <div
          id="nav-icon1"
          className={toggle ? "open" : ""}
          onClick={() => setToggle(!toggle)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <motion.div
          className="siden"
          animate={toggle ? "open" : "closed"}
          variants={sidebar}>
          <div className="area">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <motion.ul variants={variants1}>
            {items.map((item, index) => (
              <motion.li
                key={item}
                animate={toggle ? "open" : "closed"}
                variants={variants}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.95 }}>
                <a onClick={() => setToggle(false)} href={`#${item}`}>
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
// to={item}
// activeClass="active_yellow"
// spy={true}
// smooth={true}
// offset={-80}
// duration={500}
// onClick={() => handleClick(index)}
// className={`${activeIndex === index ? "active_yellow" : ""}
//   ${index === items.length - 1 ? "green" : ""}
//   ${
//     activeIndex === "green" && index === items.length - 1
//       ? "active-green"
//       : ""
//   } `}
// href={`#${item}`}
