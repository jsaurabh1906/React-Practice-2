import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="text-lg text-gray-600 mt-4">
        Reach out to us via email or phone.
      </p>
      <form className="mt-6 w-full max-w-sm">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        ></textarea>
        <button className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
