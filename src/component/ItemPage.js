import { useState } from "react";

export default function ItemPage({ description }) {
  const [index, setIndex] = useState(0);
  const imageCount = 4;
  const path = window.location.pathname.slice(1); 
  const imageFolder = path.toLowerCase();

  const next = () => setIndex((index + 1) % imageCount);
  const prev = () => setIndex((index - 1 + imageCount) % imageCount);

  const currentImageName = `${imageFolder}${index + 1}.jpg`;
  const currentImage = require(`../images/items/${imageFolder}/${currentImageName}`);

  const title = imageFolder.charAt(0).toUpperCase() + imageFolder.slice(1);

  return (
    <div className="grid grid-rows-12 lg:grid-cols-3 grid-rows-3 lg:grid-rows-4 h-screen">
      <div className="flex justify-center items-center col-span-3 text-center text-5xl lg;text-6xl lg:text-9xl ">
        <h1>{title}</h1>
      </div>

      <div className="flex justify-center items-center">
        <button onClick={prev} className="lg:text-9xl text-4xl">◀</button>
      </div>

      <img src={currentImage} alt={title} className="w-full h-full object-contain" />

      <div className="flex justify-center items-center">
        <button onClick={next} className="lg:text-9xl text-4xl">▶</button>
      </div>

      <div className=" lg:mx-96 lg:mx-24 mx-10 mt-24 col-span-3 text-lg lg:text-4xl text-justify">
        <p>{description}</p>
      </div>
    </div>
  );
}
