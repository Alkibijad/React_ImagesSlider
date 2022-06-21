import React, { useState, useEffect } from "react";
import SlideContent from "./SlideContent";
import Arrow from "./Arrow";
import Utils from "./axios";

function Slider() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    Utils.getImages().then((res) => {
      setImages(res.data);
    });
  }, []);

  const changeCurrentSlide = (num) => {
 
    let imgID = currentImage + num;
    console.log(imgID);
    if (imgID === images.length) {
      imgID = 0;
    } else if (imgID < 0) {
      imgID = images.length - 1;
    }
    setCurrentImage(imgID);
  };

  return (
    <div className="slider-container">
      {images.length ? <SlideContent image={images[currentImage]} /> : null}
      <Arrow changeCurrentSlide={changeCurrentSlide} />
    </div>
  );
}

export default Slider;
