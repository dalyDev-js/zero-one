import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../constants";
import { useRef, useEffect } from "react";
import Parallax from "parallax-js";
import { Link } from "react-scroll";

const Header = () => {
  const scene = useRef(null);
  useEffect(() => {
    if (scene.current) {
      new Parallax(scene.current);
    }
  }, []);
  return (
    <motion.section className="containerh" id="Home">
      <motion.div className="container2" ref={scene}>
        <motion.img
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ delay: 0.25, duration: 0.3 }}
          src={images.brick1}
          alt="brick1"
          className="brick1"
          data-depth="0.5"
        />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 0.3 }}
          src={images.brick4}
          alt="brick2"
          className="brick2"
          data-depth="0.6"
        />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 1, duration: 0.3 }}
          src={images.brick2}
          alt="brick7"
          className="brick7"
          data-depth="0.2"
        />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 1, duration: 0.3 }}
          src={images.gear3}
          alt="brick3"
          className="brick3"
          data-depth="0.8"
        />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 1.2, duration: 0.3 }}
          src={images.gear2}
          alt="brick4"
          className="brick4"
          data-depth="0.2"
        />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 1.5, duration: 0.3 }}
          src={images.brick3}
          alt="brick5"
          className="brick5"
          data-depth="1"
        />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 1.7, duration: 0.3 }}
          src={images.cable}
          alt="cable1"
          className="cable1"
          data-depth="0.5"
        />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 1.8, duration: 0.3 }}
          src={images.gear2}
          alt="brick6"
          className="brick6"
          data-depth="0.3"
        />
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header-badge">
        <div className="">
          <div>
            <h1 className="">
              Creativity, engineering, and robotics - all in ONE place.
            </h1>

            <p className="">
              Welcome to our vibrant community of young creators and innovators,
              where learning meets play and imagination becomes reality.
            </p>
            {/* <p>
              Join us on a journey of discovery and endless possibilities in the
              exciting worlds of Lego and Robotics!
            </p> */}
          </div>
        </div>{" "}
      </motion.div>
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        <Link
          className="button_top"
          to="Courses"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}>
          Learn more
        </Link>
      </motion.button>
    </motion.section>
  );
};

export default Header;
