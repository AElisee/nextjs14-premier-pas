"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";

const CarouselComponent = () => {
  return (
    <Carousel className="w-full max-h-[500px]">
      {/* <div>
        <img src="assets/img_1.jpg" />
        <p className="legend">Legend 1</p>
      </div> */}
      <div>
        <img src="assets/img_2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/img_3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
