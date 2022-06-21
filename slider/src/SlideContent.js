import React, { useEffect, useState } from "react";

function SlideContent({ image }) {
 

  return (
      <div className="slider-content">
          <img src={image.src} alt="" />
          <p className="title">{ image.title}</p>
         
    </div>
  );
}

export default SlideContent;
