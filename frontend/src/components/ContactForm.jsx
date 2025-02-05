import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Send } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const maxWords = 100;
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Delay to ensure the home page loads before scrolling
  };
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const getWordCount = (message) => message.trim().split(/\s+/).length;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (getWordCount(formData.message) > maxWords)
      newErrors.message = `Max ${maxWords} words`;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:3001/api/service-contact",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        setStatus("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to send message. Please try again.";
      setStatus(`Error: ${errorMessage}`);
      console.error("Submission error:", err);
    }
  };

  const wordCount = getWordCount(formData.message);
  const isFormValid = wordCount <= maxWords;

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <motion.div
        className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-center text-transparent bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-gray-600 text-lg text-center mb-12">
          Have questions or want to work with us? Fill out the form below, and
          our team will get back to you promptly.
        </p>

        <motion.form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Name
            </label>
            <motion.input
              className={`w-full p-4 border rounded-lg focus:outline-none ${
                errors.name
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-blue-500"
              }`}
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </label>
            <motion.input
              className={`w-full p-4 border rounded-lg focus:outline-none ${
                errors.email
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-blue-500"
              }`}
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email}</p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Subject
            </label>
            <motion.input
              className={`w-full p-4 border rounded-lg focus:outline-none ${
                errors.subject
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-blue-500"
              }`}
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              placeholder="Regarding Marketing Services"
            />
            {errors.subject && (
              <p className="text-red-500 mt-2">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <motion.textarea
              className={`w-full p-4 border rounded-lg focus:outline-none ${
                errors.message
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-blue-500"
              }`}
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              placeholder="Tell us about your project..."
            />
            <div
              className={`absolute bottom-2 right-2 text-sm ${
                wordCount > maxWords ? "text-red-500" : "text-gray-500"
              }`}
            >
              {wordCount}/{maxWords}
            </div>
            {errors.message && (
              <p className="text-red-500 mt-2">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            className={`w-full py-3 rounded-lg transition-all duration-300 ${
              isFormValid
                ? "bg-gradient-to-r from-blue-600 to-green-500 text-white hover:shadow-xl"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            type="submit"
            whileTap={{ scale: isFormValid ? 0.95 : 1 }}
            disabled={!isFormValid}
          >
            <div className="flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </div>
          </motion.button>

          {status && (
            <p
              className={`text-center mt-4 text-sm ${
                status.includes("🎉") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800">
            Other Ways to Reach Us
          </h3>
          <p className="text-gray-600 mt-4">
            Email:{" "}
            <a
              href="birbaldigi@gmail.com"
              className="text-blue-500 hover:underline"
            >
              birbaldigi@gmail.com
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            Phone:{" "}
            <a
              href="tel:+91 769-186-3302"
              className="text-blue-500 hover:underline"
            >
              +91-7691863302
            </a>
          </p>
        </motion.div>
      </motion.div>
      <Footer scrollToSection={scrollToSection} />{" "}
      {/* Pass scrollToSection to Footer */}
    </>
  );
};

export default ContactForm;
