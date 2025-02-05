import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header'; // Ensure this path is correct
import Footer from './Footer'; // Ensure this path is correct
import { motion } from 'framer-motion'; // Add framer-motion for animation

const servicesData = [
  {
    id: 0,
    title: "Web Design",
    description: "Crafting beautiful, user-focused designs that leave lasting impressions.",
    details: "Our web design services are tailored to showcase your brand in the best light. We create responsive, visually captivating websites that combine modern aesthetics with user-centric functionality. Whether you need a new design or a revamp, our team ensures every element reflects your unique identity. From layouts to color palettes, we craft designs that balance beauty and usability, optimized for mobile and desktop experiences. Let us help you stand out online with a seamless, memorable web presence."
  },
  {
    id: 1,
    title: "Frontend Development",
    description: "Developing interactive, fast, and engaging user interfaces with cutting-edge technologies.",
    details: "Our frontend development services bring your ideas to life with sleek and intuitive interfaces. Using modern frameworks like React, Vue, and Angular, we focus on creating fast, responsive, and accessible web applications. We prioritize clean code, smooth animations, and seamless navigation, ensuring every interaction feels effortless. Let us build a frontend that not only looks stunning but also performs flawlessly across all devices."
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Building reliable and scalable server-side systems for your business needs.",
    details: "Our backend development services power your digital products with robust and efficient solutions. We specialize in technologies like Node.js, Express, and MongoDB to create APIs, databases, and server logic that integrate seamlessly with your frontend. Our team focuses on security, scalability, and performance optimization, ensuring your backend handles high traffic effortlessly. Whether it’s an e-commerce platform or a custom application, we deliver backend solutions you can rely on."
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Transforming ideas into visuals that captivate and inspire.",
    details: "Our graphic design services help your brand make a statement. From logos and social media graphics to marketing materials and branding, we create designs that resonate with your audience. Every element is crafted with attention to detail, ensuring your visuals are not just eye-catching but also aligned with your brand’s identity. Let your story come to life through stunning designs that leave a lasting impact."
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Boosting your online presence with targeted and effective strategies.",
    details: "Our digital marketing services are designed to help you connect with your audience and achieve your goals. From SEO and social media management to PPC campaigns and email marketing, we use data-driven strategies to maximize your reach and ROI. Whether you’re looking to increase traffic, generate leads, or build brand awareness, our team is here to craft campaigns that deliver real results."
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Creating compelling content that informs, engages, and converts.",
    details: "Our content writing services help you communicate your message effectively. We specialize in crafting high-quality, SEO-friendly content, including blogs, articles, website copy, and newsletters. Our team takes the time to understand your audience and brand voice, ensuring every piece resonates and drives engagement. With a focus on storytelling and clarity, we help your brand connect with your readers on a deeper level."
  },
  {
    id: 6,
    title: "SEO Services",
    description: "Driving organic traffic with tailored optimization strategies.",
    details: "Our SEO services are designed to help your website rank higher and reach more customers. We focus on comprehensive strategies, including keyword research, on-page and off-page optimization, and technical SEO improvements. By understanding your industry and audience, we tailor our approach to meet your business goals. Let us help you dominate search results and drive sustainable growth."
  },
  {
    id: 7,
    title: "E-commerce Solutions",
    description: "Creating seamless and secure online stores to grow your business.",
    details: "Our e-commerce solutions are designed to turn visitors into loyal customers. From user-friendly navigation to secure payment gateways, we build online stores that prioritize the shopping experience. Whether you’re starting from scratch or optimizing an existing platform, we provide scalable solutions tailored to your needs. Let us help you sell smarter and grow faster in the competitive online marketplace."
  },
  {
    id: 8,
    title: "App Development",
    description: "Building custom, feature-rich apps for a variety of platforms.",
    details: "Our app development services bring your ideas to life with innovative and user-friendly solutions. Whether it’s for Android, iOS, or both, we handle everything from design to deployment. Our team focuses on performance, security, and scalability, ensuring your app stands out in a crowded market. Whether it’s for business, entertainment, or e-commerce, we deliver apps that delight users and meet your objectives."
  },
  {
    id: 9,
    title: "IT Support and Maintenance",
    description: "Ensuring your systems run smoothly and efficiently.",
    details: "Our IT support and maintenance services keep your digital infrastructure secure and up-to-date. From regular updates and troubleshooting to proactive monitoring and security patches, we ensure your business operates without interruptions. Our team is always ready to provide timely solutions, helping you minimize downtime and maximize productivity."
  }
];
const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData[id];
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay to ensure the home page loads before scrolling
  };

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-red-500">Service not found</h2>
      </div>
    );
  }

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <motion.div
        className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-24 transform transition-transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Service Title */}
        <h2 className="text-5xl font-extrabold mb-6 text-center text-gray-800">
          {service.title}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          {service.description}
        </p>

        {/* Key Features */}
        <motion.div
          className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">Key Features</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Customizable and tailored solutions for your unique needs.</li>
            <li>Cutting-edge technology to ensure scalability and performance.</li>
            <li>Responsive designs and seamless user experiences.</li>
            <li>Reliable support and maintenance for long-term success.</li>
          </ul>
        </motion.div>

        {/* Detailed Overview */}
        <motion.div
          className="mt-12 p-6 bg-gray-50 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Detailed Overview</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{service.details}</p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="mt-12 p-6 bg-gray-50 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe in delivering quality services that align with your goals. Our team of
            professionals is passionate about innovation, attention to detail, and providing
            exceptional value. Choose us to experience a partnership that drives results.
          </p>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="mt-12 p-6 bg-gray-50 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="flex items-start space-x-4 bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://placehold.co/60x60/FFD700/000000.png?text=JD"
                alt="Client"
                className="h-14 w-14 rounded-full border-4 border-yellow-500 transform transition-all hover:scale-110"
              />
              <div>
                <p className="text-gray-700 text-lg">
                  "The team delivered beyond expectations. Our website's new design has drastically
                  improved user engagement."
                </p>
                <span className="text-sm text-gray-500">John Doe, CEO at XYZ Corp</span>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4 bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://placehold.co/60x60/FFD700/000000.png?text=JS"
                alt="Client"
                className="h-14 w-14 rounded-full border-4 border-yellow-500 transform transition-all hover:scale-110"
              />
              <div>
                <p className="text-gray-700 text-lg">
                  "Their commitment to quality and attention to detail is unmatched. Highly
                  recommend!"
                </p>
                <span className="text-sm text-gray-500">Jane Smith, Marketing Director</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Related Services Section */}
        <motion.div
          className="mt-12 p-6 bg-gray-50 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(servicesData).slice(0, 3).map((key) => (
              <motion.div
                key={key}
                className="p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-semibold text-gray-800">{servicesData[key].title}</h4>
                <p className="text-gray-600 mt-2">{servicesData[key].description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => navigate('/contact')}
            className="bg-red-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Book Your Appointment Now
          </button>
        </motion.div>
      </motion.div>
      <Footer scrollToSection={scrollToSection} /> {/* Pass scrollToSection to Footer */}
    </>
  );
};

export default ServiceDetail;
