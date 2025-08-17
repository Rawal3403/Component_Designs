import React, { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const cards = [
  {
    id: 1,
    image: video1,
    type: "video",
  },
  {
    id: 2,
    image: image1,
    type: "image",
  },
  {
    id: 3,
    image: image2,
    type: "image",
  },
  {
    id: 4,
    image: image3,
    type: "image",
  },
  {
    id: 5,
    image: image4,
    type: "image",
  },
  {
    id: 6,
    image: video2,
    type: "video",
  },
];

export default function Cards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="h-screen bg-white flex items-center justify-center px-4">
      <div className="flex max-w-screen-xl h-4/5 gap-3 w-full">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`rounded-2xl overflow-hidden transition-all duration-1000 cursor-pointer flex items-center justify-center ${
              activeIndex === index ? "flex-[5]" : "flex-[1]"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
          >
            {card.type === "video" ? (
              <video
                src={card.image}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={card.image}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
