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
    <div className="flex flex-col items-center px-6 md:px-16 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      {/* 📍 Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-12 text-center">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-lg font-semibold mb-2">📍 Location</h2>
          <a
            href="/location"
            className="text-blue-600 hover:underline block"
          >
            {contactData.address}
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-lg font-semibold mb-2">📞 Phone</h2>
          <a
            href={`tel:${contactData.phone}`}
            className="text-blue-600 hover:underline"
          >
            {contactData.phone}
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-lg font-semibold mb-2">✉️ Email</h2>
          <a
            href={`mailto:${contactData.email}`}
            className="text-blue-600 hover:underline"
          >
            {contactData.email}
          </a>
        </div>
      </div>

      {/* 📝 Contact Form */}
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-8">
        {submitted ? (
          <div className="text-center text-green-600 font-semibold text-lg">
            ✅ Thank you for contacting us! We’ll get back to you soon.
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 text-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all"
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
