import React from "react";
import Footer from "../components/Footer";

const resources = [
  {
    title: "Frontend Development Tools",
    description: "Discover essential tools like React, Tailwind CSS, Vite, and more to build fast, modern user interfaces.",
    link: "https://react.dev/learn",
  },
  {
    title: "JavaScript Cheatsheet",
    description: "Keep this cheatsheet handy to brush up on JS fundamentals, ES6+ features, and common patterns.",
    link: "https://www.freecodecamp.org/news/javascript-cheat-sheet/",
  },
  {
    title: "UI Inspiration Gallery",
    description: "Browse a curated gallery of beautiful UI designs to inspire your next project.",
    link: "https://dribbble.com/",
  },
  {
    title: "Tailwind CSS Components",
    description: "Access a library of ready-made Tailwind CSS components to speed up development.",
    link: "https://tailwindcomponents.com/",
  },
  {
    title: "Responsive Design Guide",
    description: "Learn how to build responsive layouts that work on any device using best practices.",
    link: "https://web.dev/responsive-web-design-basics/",
  },
];

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb]">
      {/* Main content */}
      <div className="flex-grow px-4 sm:px-10 py-16 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">Developer Resources</h1>
        <p className="text-lg text-gray-600 mb-12">
          A curated collection of tools, articles, and design assets to help you level up your skills.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-[#00df9a] mb-2">{resource.title}</h2>
              <p className="text-gray-700 mb-4">{resource.description}</p>
              <a
                href={resource.link}
                className="text-[#00c27a] hover:underline font-medium"
              >
                Visit Resource →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer (full width) */}
      <Footer />
    </div>
  );
};

export default Resources;
