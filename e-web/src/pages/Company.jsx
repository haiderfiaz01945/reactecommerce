import React from "react";
import Footer from "../components/Footer";

const Company = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb]">
      {/* Main Content */}
      <div className="flex-grow py-16 px-6 flex items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            About <span className="text-[#00df9a]">Our Company</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At <span className="font-semibold text-gray-800">Aziz Technologies</span>, we are on a mission to
            empower individuals and businesses through modern web solutions, intuitive UI/UX, and powerful
            backend architecture. Founded in 2023, we've helped dozens of clients bring their digital vision
            to life with passion, precision, and performance.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-[#00df9a] mb-2">🚀 Our Vision</h3>
              <p className="text-gray-700">
                To lead the tech space by building products that improve lives and redefine user experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-[#00df9a] mb-2">🌍 Our Mission</h3>
              <p className="text-gray-700">
                Delivering scalable, secure, and stylish digital solutions with speed and reliability.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-[#00df9a] mb-2">💡 What We Do</h3>
              <p className="text-gray-700">
                Web development, UI/UX design, cloud integration, and performance optimization for your apps.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet the Founder</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Abdul Aziz Chughtai started this company with a dream of merging creativity with code.
              With a background in full-stack development and a heart for innovation, he leads the team with energy,
              empathy, and a constant drive to grow.
            </p>
          </div>
        </div>
      </div>

      {/* Footer spans full width and sticks to bottom if needed */}
      <Footer />
    </div>
  );
};

export default Company;
