import React, { useState } from "react";
import { motion } from "framer-motion";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { Send } from "lucide-react";
import Header from "./Header"; // Ensure this path is correct
import Footer from "./Footer"; // Ensure this path is correct

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const maxWords = 100; // Set the word limit here
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Delay to ensure the home page loads before scrolling
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getWordCount = (message) => {
    return message.trim().split(/\s+/).length;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));

    // Clear errors as the user types
    setErrors((prevState) => ({ ...prevState, [id]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!validateEmail(formData.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Invalid email address",
      }));
      return;
    }

    if (getWordCount(formData.message) > maxWords) {
      setErrors((prevState) => ({
        ...prevState,
        message: `Message must be ${maxWords} words or fewer`,
      }));
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/service-contact",
        formData
      );
      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  const wordCount = getWordCount(formData.message);
  const wordCountClass =
    wordCount > maxWords ? "text-red-500" : "text-green-500";

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
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <motion.input
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <motion.input
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <motion.textarea
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
              id="message"
              placeholder="Type your message here"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <div className={`absolute bottom-2 left-2 ${wordCountClass}`}>
              {wordCount}/{maxWords} words
            </div>
            {errors.message && (
              <p className="text-red-500 mt-2">{errors.message}</p>
            )}
          </div>

          <div className="text-center">
            <motion.button
              className={`w-full py-3 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 ${
                wordCount > maxWords
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-green-500 text-white"
              }`}
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={wordCount > maxWords}
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
          {status && <p className="text-center mt-4 text-black">{status}</p>}
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
