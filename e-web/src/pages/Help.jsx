import React from "react";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "How can I contact support?",
    answer:
      "You can reach our support team through the Contact Us page or email us directly at support@example.com. We typically respond within 24 hours.",
  },
  {
    question: "Where can I find documentation?",
    answer:
      "Full documentation is available under our Resources page. We also provide API references and guides for all our tools.",
  },
  {
    question: "Can I contribute to your project?",
    answer:
      "Absolutely! We're open-source friendly. Visit our GitHub repository to learn how you can contribute.",
  },
  {
    question: "What technologies are used in this site?",
    answer:
      "We use React for the frontend, Tailwind CSS for styling, and EmailJS for contact form handling.",
  },
];

const Help = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb]">
      {/* Main Content */}
      <div className="flex-grow py-16 px-4 sm:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center leading-tight">
          Help & Support
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Need assistance? Browse our FAQs or reach out for personalized support.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#00df9a] mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Still need help?</h2>
          <p className="text-gray-600 mb-4">
            We're here for you — don't hesitate to get in touch.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#00df9a] text-black font-medium py-3 px-6 rounded-xl hover:bg-[#00c27a] transition-transform hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
