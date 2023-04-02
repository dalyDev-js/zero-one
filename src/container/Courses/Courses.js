import { useEffect, useState } from "react";
import "./Courses.scss";
import { motion } from "framer-motion";
import courses from "./Courses-content";
import { images } from "../../constants";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCardClick = (courseId) => {
    setSelectedCourse(courseId);
    if (window.innerWidth < 400 < 768) {
      window.scrollTo({ top: 700, behavior: "smooth" });
    }
  };

  const handleCloseModal = (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.closest(".close-button")
    ) {
      setSelectedCourse(null);
    } else if (e.target.classList.contains("modal-content")) {
      e.stopPropagation();
    }
  };
  useEffect(() => {
    if (selectedCourse !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedCourse]);

  return (
    <section className="containerC" id="Courses">
      <div className="backg">
        <div className="backg1">
          <img src={images.asset1} alt="bg" />
        </div>
      </div>

      <div className="h1C">
        <h1>Explore Our Courses </h1>
      </div>
      <div className="cardwrapper">
        {courses.map((course, index) => (
          <motion.div
            className={`card ${selectedCourse === course.id ? "selected" : ""}`}
            key={course.id}
            onClick={() => handleCardClick(course.id)}>
            <img src={course.image} alt={course.title} />
            <div className="card-content">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedCourse && (
        <motion.div className="modal" onClick={handleCloseModal}>
          <motion.div
            className="modal-content"
            animate={{
              scale: [0.5, 1],
              transition: { type: "spring", duration: 0.15, ease: "easeOut" },
            }}
            style={{ willChange: "transform" }}>
            <div className="close-button" onClick={handleCloseModal}>
              <div className="leftright"></div>
              <div className="rightleft"></div>
            </div>
            <h2>
              {courses.find((course) => course.id === selectedCourse).title}
            </h2>
            <h3>Description:</h3>
            <p>
              {courses.find((course) => course.id === selectedCourse).details}
            </p>
            <h3>Course Content:</h3>
            <ul>
              {courses
                .find((course) => course.id === selectedCourse)
                .content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
            <p>
              {courses.find((course) => course.id === selectedCourse).result}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Courses;
