import "./gallery.scss";
import React, { useState, useEffect } from "react";
import {
  galleryImages1,
  galleryImages2,
  galleryImages3,
  galleryImages4,
  galleryImages5,
  galleryImages6,
} from "./galleryImages";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

<swipeable></swipeable>;
const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentGallery, setCurrentGallery] = useState(galleryImages1);
  const galleries = [
    galleryImages1,
    galleryImages2,
    galleryImages3,
    galleryImages4,
    galleryImages5,
    galleryImages6,
  ];
  const numGalleries = galleries.length;
  let currentGalleryIndex = galleries.indexOf(currentGallery);
  const [rotations, setRotations] = useState([]);

  useEffect(() => {
    const randomRotations = currentGallery.map(
      () => Math.floor(Math.random() * 21) - 10
    );
    setRotations(randomRotations);
  }, [currentGallery]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevImageClick = () => {
    if (selectedImageIndex === 0) {
      if (currentGallery === galleryImages1) {
        setSelectedImageIndex(galleryImages6.length - 1);
        setCurrentGallery(galleryImages6);
      } else if (currentGallery === galleryImages2) {
        setSelectedImageIndex(galleryImages1.length - 1);
        setCurrentGallery(galleryImages1);
      } else if (currentGallery === galleryImages3) {
        setSelectedImageIndex(galleryImages2.length - 1);
        setCurrentGallery(galleryImages2);
      } else if (currentGallery === galleryImages4) {
        setSelectedImageIndex(galleryImages3.length - 1);
        setCurrentGallery(galleryImages3);
      } else if (currentGallery === galleryImages5) {
        setSelectedImageIndex(galleryImages4.length - 1);
        setCurrentGallery(galleryImages4);
      } else {
        setSelectedImageIndex(galleryImages5.length - 1);
        setCurrentGallery(galleryImages5);
      }
    } else {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImageClick = () => {
    if (selectedImageIndex === currentGallery.length - 1) {
      if (currentGallery === galleryImages1) {
        setSelectedImageIndex(0);
        setCurrentGallery(galleryImages2);
      } else if (currentGallery === galleryImages2) {
        setSelectedImageIndex(0);
        setCurrentGallery(galleryImages3);
      } else if (currentGallery === galleryImages3) {
        setSelectedImageIndex(0);
        setCurrentGallery(galleryImages4);
      } else if (currentGallery === galleryImages4) {
        setSelectedImageIndex(0);
        setCurrentGallery(galleryImages5);
      } else if (currentGallery === galleryImages5) {
        setSelectedImageIndex(0);
        setCurrentGallery(galleryImages6);
      } else {
        setSelectedImageIndex(0);
        setCurrentGallery(galleryImages1);
      }
    } else {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImageClick,
    onSwipedRight: handlePrevImageClick,
  });

  const handlePrevGalleryClick = () => {
    currentGalleryIndex =
      (currentGalleryIndex - 1 + numGalleries) % numGalleries;
    setCurrentGallery(galleries[currentGalleryIndex]);
    setSelectedImageIndex(null);
  };

  const handleNextGalleryClick = () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % numGalleries;
    setCurrentGallery(galleries[currentGalleryIndex]);
    setSelectedImageIndex(null);
  };

  const handleCloseClick = () => {
    setSelectedImageIndex(null);
  };
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImageIndex]);
  return (
    <div className="containerG" id="Gallery">
      <div className="h1g">
        <h1>Future Innovators: Our Students in Action</h1>
      </div>
      <div className="rowG">
        <button
          className="prev-gallery-button"
          onClick={handlePrevGalleryClick}>
          &#8249;
        </button>

        <div className="cardsg">
          {currentGallery.map((image, index) => (
            <motion.div
              key={index}
              className="cardg"
              style={{
                transform: `rotate(${rotations[index]}deg)`,
              }}
              onClick={() => handleImageClick(index)}>
              <img key={index} src={image} alt={`Images ${index + 1}`} />
            </motion.div>
          ))}
        </div>

        <button
          className="next-gallery-button"
          onClick={handleNextGalleryClick}>
          &#8250;
        </button>

        {selectedImageIndex !== null && (
          <div className="overlay" onClick={handleCloseClick}>
            <AnimatePresence>
              <div
                {...swipeHandlers}
                className="image-container"
                onClick={(e) => e.stopPropagation()}>
                <button className="prev-button" onClick={handlePrevImageClick}>
                  &#8249;
                </button>
                <img
                  src={currentGallery[selectedImageIndex]}
                  alt={`Images ${selectedImageIndex + 1}`}
                />
                <button className="next-button" onClick={handleNextImageClick}>
                  &#8250;
                </button>
              </div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
