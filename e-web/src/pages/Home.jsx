import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      {/* Main Content */}
      <div className="flex-grow px-6 py-12 items-center text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Welcome to <span className="text-[#00df9a]">AzizTech</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We build fast, modern, and responsive web experiences with React, TailwindCSS, and cutting-edge tools.
          </p>
          <button className="mt-8 px-8 py-3 bg-[#00df9a] text-black font-semibold rounded-full shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto">
          <div className="bg-white text-black p-6 rounded-2xl shadow-2xl hover:shadow-[#00df9a] transition hover:scale-105">
            <h3 className="text-xl font-bold mb-2">🚀 Lightning Fast</h3>
            <p className="text-gray-700">
              Our applications are built for speed and performance across all devices.
            </p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl shadow-2xl hover:shadow-[#00df9a] transition hover:scale-105">
            <h3 className="text-xl font-bold mb-2">🎯 Tailored Solutions</h3>
            <p className="text-gray-700">
              We craft solutions specific to your business needs with flexibility in mind.
            </p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl shadow-2xl hover:shadow-[#00df9a] transition hover:scale-105">
            <h3 className="text-xl font-bold mb-2">💡 Creative Design</h3>
            <p className="text-gray-700">
              Eye-catching designs that are intuitive, responsive, and user-friendly.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-gray-400 mb-6">Let’s bring it to life — we’re just one message away.</p>
          <a
            href="/contact"
            className="px-6 py-3 bg-[#00df9a] text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Full-width Footer */}
      <Footer />
    </div>
  );
};

export default Home;
