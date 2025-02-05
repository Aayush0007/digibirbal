import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of services including Web Design, Frontend Development, Backend Development, Graphic Design, Digital Marketing, Content Writing, SEO Services, E-commerce Solutions, App Development, and IT Support and Maintenance."
  },
  {
    question: "How can I contact you for a project?",
    answer: "You can contact us through the Contact Us page on our website. Fill out the inquiry form with your details and project requirements, and we'll get back to you as soon as possible."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer ongoing IT support and maintenance services to ensure your website or application remains up-to-date, secure, and performs optimally."
  },
  {
    question: "What technologies do you use for development?",
    answer: "We use a variety of modern technologies including React.js, Node.js, Express, PostgreSQL, Docker, and various CSS frameworks like Tailwind CSS and Bootstrap."
  },
  {
    question: "Can you help with digital marketing?",
    answer: "Absolutely! Our digital marketing services include SEO, social media management, content marketing, and more to help you grow your online presence and reach your target audience."
  },
  {
    question: "What is your process for starting a new project?",
    answer: "Our process begins with a discovery and planning phase, where we gather requirements, create wireframes, and design the database schema. This is followed by backend and frontend development, content integration, testing, and finally deployment and maintenance."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-extrabold bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent"
        style={{
            fontFamily: "Pacifico, cursive",
            lineHeight: "1.8",
          }}>FAQ</h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="faq-item bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question flex justify-between items-center text-lg font-semibold text-gray-800">
                <span>{item.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer mt-4 text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
