import React from "react";
import CarouselComponent from "./Carousel.js";
import TextEffect from "./TextEffect.js";

function page() {
  return (
    <div className="container">
      <h1 className="text-xl font-semibold text-sky-800">COMPOSITIONS</h1>
      <TextEffect />
      <div className="w-full h-[500px]">
        <CarouselComponent />
      </div>
    </div>
  );
}

export default page;
