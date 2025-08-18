import React, { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const cards = [
  {
    id: 1,
    image: image4,
    type: "image",
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
    image: image1,
    type: "image",
  },
];

export default function Cards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center px-4">
      <div className="flex px-14 py-20 h-full gap-0.5 md:gap-1 lg:gap-3 xl:gap-4  w-full">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`rounded-sm md:rounded-lg  lg:rounded-2xl  overflow-hidden transition-all duration-1000 cursor-pointer flex items-center justify-center ${
              activeIndex === index ? "flex-[3] md:flex-[5] lg:flex-[8] xl:flex-[10]" : "flex-[0.5] md:flex-[1] lg:flex-[3] xl:flex-[4]"
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
