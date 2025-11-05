"use client";

import { useState } from "react";
import { contactData } from "@/data/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center px-6 md:px-16 py-16 bg-black text-white">
      {/* 🏢 Page Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
        Get in Touch
      </h1>
      <p className="text-gray-400 max-w-2xl text-center mb-12">
        Have a question or want to know more about Skywalk Towers?  
        We’d love to hear from you — drop us a message below.
      </p>

      {/* 📍 Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16 text-center">
        <div className="bg-[#111] p-8 rounded-2xl border border-[#222] hover:border-[#C4001D] transition-all duration-300">
          <h2 className="text-lg font-semibold mb-2 text-[#C4001D] uppercase">
            Location
          </h2>
          <a
            href="/location"
            className="text-gray-300 hover:text-white transition-colors block"
          >
            {contactData.address}
          </a>
        </div>

        <div className="bg-[#111] p-8 rounded-2xl border border-[#222] hover:border-[#C4001D] transition-all duration-300">
          <h2 className="text-lg font-semibold mb-2 text-[#C4001D] uppercase">
            Phone
          </h2>
          <a
            href={`tel:${contactData.phone}`}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {contactData.phone}
          </a>
        </div>

        <div className="bg-[#111] p-8 rounded-2xl border border-[#222] hover:border-[#C4001D] transition-all duration-300">
          <h2 className="text-lg font-semibold mb-2 text-[#C4001D] uppercase">
            Email
          </h2>
          <a
            href={`mailto:${contactData.email}`}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {contactData.email}
          </a>
        </div>
      </div>

      {/* 📝 Contact Form */}
      <div className="bg-[#111] w-full max-w-3xl rounded-2xl border border-[#222] p-10 shadow-lg">
        {submitted ? (
          <div className="text-center text-[#C4001D] font-semibold text-lg">
            ✅ Thank you for contacting us!  
            We’ll get back to you soon.
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-[#C4001D]">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 text-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-black border border-[#333] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C4001D]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-black border border-[#333] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C4001D]"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="bg-black border border-[#333] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C4001D]"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="bg-black border border-[#333] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C4001D] resize-none"
              />

              <button
                type="submit"
                className="bg-[#C4001D] hover:bg-white hover:text-[#C4001D] font-semibold py-3 rounded-lg border-2 border-[#C4001D] transition-all text-white text-lg"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
