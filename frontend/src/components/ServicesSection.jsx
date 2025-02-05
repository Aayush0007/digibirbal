import React, { useState } from "react";
import {
  Palette,
  Code,
  Layout,
  Server,
  TrendingUp,
  Users,
  Mail,
  Activity,
  Video,
} from "lucide-react";
import "../styles/ServicesSection.css"; // Import the CSS file for additional styling and animations

const services = [
  {
    icon: <Layout className="w-8 h-8 text-purple-500" />,
    title: "Web Design",
    description:
      "Creating responsive, visually stunning designs tailored to user needs and brand identity.",
  },
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: "Frontend Development",
    description:
      "Building interactive and dynamic interfaces with modern frameworks and technologies.",
  },
  {
    icon: <Server className="w-8 h-8 text-green-500" />,
    title: "Backend Development",
    description:
      "Developing robust and scalable server-side architectures for seamless functionality.",
  },
  {
    icon: <Palette className="w-8 h-8 text-red-500" />,
    title: "Graphic Design",
    description:
      "Crafting creative visuals and branding materials to enhance your digital presence.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
    title: "SEO Optimization",
    description:
      "Improving website rankings and visibility through advanced SEO strategies.",
  },
  {
    icon: <Users className="w-8 h-8 text-teal-500" />,
    title: "Social Media Management",
    description:
      "Managing and growing your social presence with engaging content and strategies.",
  },
  {
    icon: <Mail className="w-8 h-8 text-orange-500" />,
    title: "Email Marketing",
    description:
      "Designing targeted email campaigns to engage and convert your audience.",
  },
  {
    icon: <Activity className="w-8 h-8 text-indigo-500" />,
    title: "Analytics and Reporting",
    description:
      "Providing actionable insights through comprehensive data analysis.",
  },
  {
    icon: <Video className="w-8 h-8 text-lime-500" />,
    title: "Video Production",
    description:
      "Producing high-quality video content for various platforms to captivate audiences.",
  },
];

export default function ServicesSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, services.length));
  };

  const handleShowLess = () => {
    setVisibleCount(6);
  };

  const handleViewDetails = (index) => {
    window.open(`/service/${index}`, "_blank");
  };

  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gradient from-purple-500 to-indigo-500">
          Our Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, visibleCount).map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
            >
              <div className="service-icon bg-gradient-to-br from-purple-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={() => handleViewDetails(index)}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          {visibleCount < services.length ? (
            <button
              onClick={handleSeeMore}
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              See More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}