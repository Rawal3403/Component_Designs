export default function About() {
  return (
    <section className="bg-[#0d0d0d] h-screen text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          className="w-full bg-cover bg-center rounded-xl shadow-lg"
        ></div>

        <div>
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-300 mb-6">
            We’re building intelligent tools to empower developers and
            businesses using cutting-edge AI and web technologies. Our mission
            is to accelerate innovation and simplify the development process
            through elegant design and powerful automation.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
