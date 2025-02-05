import React, { useState } from "react";
import { Send } from "lucide-react";
import axios from "axios";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const maxWords = 100; // Word limit

  // Email validation regex
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Count words in message
  const getWordCount = (message) => message.trim().split(/\s+/).length;

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // Clear errors while typing
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      return;
    }
    if (getWordCount(formData.message) > maxWords) {
      setErrors((prev) => ({ ...prev, message: `Max ${maxWords} words allowed` }));
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
    }
  };

  const wordCount = getWordCount(formData.message);
  const wordCountClass = wordCount > maxWords ? "text-red-500" : "text-green-500";

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 animate-fadeIn delay-1000">
          Start Your Digital Journey with Us
        </h2>
        <p className="text-lg text-center mb-12 animate-fadeIn delay-2000">
          Have an idea? Let’s bring it to life! Reach out to our team, and we’ll help you create a digital experience that resonates.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 animate-fadeIn delay-3000">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label className="block text-black mb-2" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-black bg-white"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-black mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-black bg-white"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
            </div>

            {/* Message Input */}
            <div className="relative">
              <label className="block text-black mb-2" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-black bg-white"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* Word Counter */}
              <div className={`absolute bottom-2 left-2 ${wordCountClass}`}>
                {wordCount}/{maxWords} words
              </div>
              {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 ${
                wordCount > maxWords ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-red-600 to-yellow-500 text-white"
              }`}
              disabled={wordCount > maxWords}
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>

            {status && <p className="text-center mt-4 text-black">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
