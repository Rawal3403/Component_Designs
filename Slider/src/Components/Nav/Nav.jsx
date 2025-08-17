// import React from "react";

// export default function Nav() {
//   return (
//     <div className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center">
//       <div className="text-2xl py-3 pr-8 text-center font-bold text-indigo-700">
//         MyLogo
//       </div>
//       <div className="flex w-full backdrop-blur-lg text-xl font-semibold dark:text-blue-200 text-black bg-gray-500/20 border-b border-white/30 rounded-2xl px-5 py-5">
//         <div className="flex items-center gap-8 w-full justify-between">
//           <div className="flex gap-6 ">
//             <div className=" hover:text-blue-400 transition cursor-pointer">
//               Home
//             </div>
//             <div className=" hover:text-blue-400 transition cursor-pointer">
//               About
//             </div>
//             <div className=" hover:text-blue-400 transition cursor-pointer">
//               Skills
//             </div>
//             <div className=" hover:text-blue-400 transition cursor-pointer">
//               Projects
//             </div>
//             <div className="hover:text-blue-400 transition cursor-pointer">
//               Contact
//             </div>
//           </div>
//           <div className="hover:text-blue-400  font-medium cursor-pointer">
//             View More
//           </div>
//         </div>
//         <div className="flex gap-8 font-medium w-full justify-end  cursor-pointer transition">
//           <div className="flex hover:text-blue-400">Download CV </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function Nav() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme");
            setIsDark(theme === "light");
          }
        });
      },
      {
        root: null,
        threshold: 1,
        rootMargin: "-70px 0px 0px 0px",
      }
    );

    const sections = document.querySelectorAll("[data-theme]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div
        className={`flex items-center justify-between backdrop-blur-lg text-xl font-semibold transition-colors duration-300
        ${isDark ? "text-black" : "text-blue-200"} 
        bg-gray-500/20 border-b border-white/30 rounded-2xl px-6 py-4`}
      >
        {/* Content remains the same */}
        <div className="text-2xl font-bold text-indigo-700">MyLogo</div>
        <div className="flex items-center gap-10">
          <div className="flex gap-6">
            <div className="hover:text-blue-400 transition cursor-pointer">
              Home
            </div>
            <div className="hover:text-blue-400 transition cursor-pointer">
              About
            </div>
            <div className="hover:text-blue-400 transition cursor-pointer">
              Skills
            </div>
            <div className="hover:text-blue-400 transition cursor-pointer">
              Projects
            </div>
            <div className="hover:text-blue-400 transition cursor-pointer">
              Contact
            </div>
          </div>
          <div className="hover:text-blue-400 font-medium cursor-pointer">
            View More
          </div>
        </div>
        <div className="hover:text-blue-400 font-medium cursor-pointer">
          Download CV
        </div>
      </div>
    </div>
  );
}
