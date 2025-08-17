import React, { useEffect, useRef } from "react";

export default function Home() {
  return (
    <section className=" h-screen bg-white overflow-hidden bg-">
      {/* 👇 Background Image with Motion */}

      <div className=" z-10 h-full flex items-center justify-center text-center text-black px-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Build the Future with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Welcome to the next generation of software.
          </p>
          <a
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
