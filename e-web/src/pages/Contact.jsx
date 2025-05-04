import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fqrzmsd',      
      'template_a9ls28u',     
      form.current,
      'Ac-dhmFbROV__5uNp'      
    ).then(
      () => {
        toast.success("Your message has been sent!");
        form.current.reset();
      },
      (error) => {
        toast.error("Something went wrong. Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#000300] flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-[#1f2937] mb-6 text-center">Contact Us</h2>
        
      
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-[#1f2937] mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-[#d1d5db] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1f2937] mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-[#d1d5db] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1f2937] mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-[#d1d5db] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="block bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00c27a] hover:scale-105 transition duration-300"
          >
            Send Message
          </button>

          <ToastContainer position="top-center" autoClose={2000} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
