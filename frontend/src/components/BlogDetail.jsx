import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header"; // Ensure this path is correct
import Footer from "./Footer"; // Ensure this path is correct

const blogs = [
  {
    id: 1,
    title: "Web Design Trends to Watch in 2025",
    summary:
      "Explore the latest web design trends for 2025, from minimalist layouts to immersive animations, and how these trends can enhance your brand’s online presence.",
    content:
      "Looking ahead to 2025, web design is evolving to be even more user-centric. The focus is shifting towards minimalist layouts that reduce distractions, allowing content to shine through. Bold typography is taking center stage, making it easier to grab users' attention and deliver key messages. In addition, immersive animations are guiding users through websites, creating a dynamic, engaging experience. With mobile-first design being the norm, ensuring your site is responsive across all devices is more important than ever. Add interactive elements like scroll-triggered animations and video backgrounds, and your website will not only look modern but also create an unforgettable experience for users. The future of web design is all about accessibility, simplicity, and engagement—so stay ahead of the curve and keep users coming back for more.",
    imageUrl:
      "https://media-hosting.imagekit.io//33ca826fb6884b13/freepik__upload__84602.png?Expires=1831307040&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Oxr8H5peyQNL396K2KnAP~AIlbkvHnhYUuuYN2uNie2cEwhAyXF3dGZbexYdBoSlJIrX9J2kFAvMfpHlBq-wiocCgEk7mdqcR9qcMflRaeRiRENh5NF4d9f~AwCFDuq80b~dugRUmxu1KBEn0r7PF9ipkEh66AmOBh8OhfI03Iq66xh~OJttXe9m0euiHuD3CuikJtsc42IAHPXtZ6K6jh~hOUfQREQF-LalOtIJg78BKp1tDTq3hpAeVGYutj6GMw2lud3QG4jzzOU-WfV0gPp~fCQWSyEpyMscfnwYKFglwyaZ5QHtakTH6V52K9Aq2HWhgA~65bsqohHLl7Jeaw__",
  },
  {
    id: 2,
    title: "How Frontend Development Shapes User Experience",
    summary:
      "Learn how frontend development is crucial to shaping an intuitive, user-friendly web experience, from responsiveness to dynamic interactions.",
    content:
      "Frontend development is key to creating an enjoyable and intuitive user experience. It’s about making websites that are not only visually appealing but also fast and easy to navigate. With more people browsing on mobile devices, responsive design is essential to ensure that websites look great on any screen size. Speed is another big factor; nobody likes a slow website. By optimizing images, compressing files, and improving code, you can make sure your website loads quickly. But it’s not just about speed—navigation matters too. A website with clear menus and simple structure will always perform better than one that’s confusing to use. With the help of frameworks like React, Vue.js, and Angular, developers can create dynamic user interfaces that feel fast, fluid, and engaging. Frontend development is all about making your site not just work, but work beautifully for every user.",
    imageUrl:
      "https://media-hosting.imagekit.io//d2cd203377534b3b/modern-web-design-concept-with-flat-design.png?Expires=1831307350&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YH8JrwTvL3~It1BhRaxRRjUsRqSQUD6uy3da9W2288NhDLN-OqM2Llb~ZrD27rxSWsoaZkkbVwD~ZDkl7GksIHnTvhMjS4CWkRVIFa5RkYIV3-TNvZpyRWhxa7AsE4AE2X8Siu6mpX6KKicXsUshVRrS78osWjxkeqgNOqazEyDOvNMwHbLZB4mVpR9B8ZR50i5Rta33oVw91SoLJP1c-0~YL6CTf6Ler2-WpXUiEJ8fa7ZVnaxZ1NgU5UHdRv89kd7r9IQirls7CmZfzFiR0ce3A0Mee8aq2JxghJnLFonlXhlFkSkWs79N4A8HBNiCMFuTXGhxSZcIfmKEuhVpIw__",
  },
  {
    id: 3,
    title: "The Importance of Scalable Backend Architecture",
    summary:
      "Understand why scalable backend architecture is crucial for handling increased traffic, maintaining security, and ensuring a smooth user experience.",
    content:
      "Scalable backend architecture is the backbone of a robust web application. As your user base grows, so does the need for your site to handle increased traffic without compromising performance. A scalable backend, built with technologies like Node.js and Express, allows your application to expand smoothly as demands rise. Security also plays a huge role—after all, you're dealing with sensitive user data. By implementing encryption, strong authentication, and regular security audits, you can protect your site from potential threats. Scalable systems can also balance loads across servers, ensuring performance stays optimal even during high-traffic periods. Microservices architecture makes scaling even easier, allowing individual parts of your application to grow independently. With a solid backend in place, your website can scale effectively while maintaining security and high performance.",
    imageUrl:
      "https://media-hosting.imagekit.io//66cd566bc6f546f4/modern-web-design-concept-with-flat-design.png?Expires=1831307486&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VZJmx3rnOoQARZB7TKKPkk2P3pbz9yuVSmSYPAsz-9N3h3rUkAQZ28aA6Ka89NfrWD6XXiz7thctVUJ79MDJxFklgNV8h7xlAEmDMCVuR2o3cTFMCTl82U50ClRW0yTjaY7WhB6OrAZVc9JSQtW-dBeE8hs4gyEEsyaxhYwmZA1BGUwjPxsSiu4m~elxVdzfeislpGeE4CgekfAP3QJivodbEORFLgJRTDGMJbrE89IZDxCXk201viEMPc0gw~KZQ-fW4rl~8UnMECcD3GCS2IYp-hrR7gk3A66qMvEU7CQcVgoils684R3bkeb8Yg9hrDzVnVUGbftlNYmleLty~w__",
  },
  {
    id: 4,
    title: "The Power of SEO for Web Design",
    summary:
      "Discover how integrating SEO best practices into your web design can help boost visibility and drive more traffic to your site.",
    content:
      "Search engine optimization (SEO) is critical for making your website discoverable on the web. You can have a beautifully designed site, but if it’s not optimized for search engines, it won’t reach your target audience. SEO starts with clean, semantic HTML, which makes it easier for search engines to crawl your site. Site speed is also important—Google favors fast-loading sites, so optimizing images, using caching, and leveraging content delivery networks (CDNs) can help improve your load times. Ensuring your website is mobile-friendly is another SEO must, as more users are browsing on mobile devices than ever before. Additionally, optimizing images with descriptive alt text and relevant filenames can help improve your SEO ranking. By incorporating these SEO best practices, your website will not only look great but also rank higher in search results, bringing in more visitors.",
    imageUrl: "#",
  },
  {
    id: 5,
    title: "Why Your Website Needs Regular Frontend Updates",
    summary:
      "Regular frontend updates are essential to maintaining security, performance, and user experience on your website.",
    content:
      "Keeping your website’s frontend up to date is essential for its performance and security. Technology moves fast, and regularly updating your site ensures it stays compatible with the latest standards. Updates also provide access to the latest security patches, protecting your site from potential vulnerabilities. But it's not just about security—frontend updates bring new features and functionality that can improve user experience. Optimizing code, compressing images, and implementing modern performance techniques can help speed up your site, making it run smoothly. Regular updates also ensure that your website remains compatible with the latest browsers and accessible to all users, including those with disabilities. Stay ahead of the game by keeping your site fresh and up-to-date.",
    imageUrl: "#",
  },
  {
    id: 6,
    title: "Backend Development: Key to Building Robust Web Applications",
    summary:
      "Backend development is crucial for creating the foundation of a strong, scalable, and secure web application.",
    content:
      "Backend development is the backbone of any web application. It handles everything behind the scenes, from database management to server-side logic, ensuring your site runs smoothly and securely. A robust backend architecture is vital for scalability, allowing your site to handle growing traffic and demands. Security is also a top priority, as you’ll need to protect sensitive user data. By implementing encryption, strong authentication methods, and regular security updates, you can ensure your backend remains secure. The backend also plays a major role in performance, with efficient database queries and load balancing techniques ensuring a seamless user experience even during traffic spikes. With a solid backend, your web application will be ready for anything.",
    imageUrl: "#",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    if (!blog) {
      navigate("/blogs"); // Redirect to blogs if blog not found
    }
  }, [blog, navigate]);

  const scrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay to ensure the home page loads before scrolling
  };

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800 text-xl font-semibold">
        Blog not found
      </div>
    );
  }

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 shadow-lg rounded-lg mt-24 transform transition-all ease-in-out duration-500 hover:scale-105 hover:shadow-xl">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")} // This ensures the back button navigates to the /blogs section
          className="bg-gray-800 text-white p-2 rounded-md mb-6 hover:bg-gray-700 transition-all duration-300"
        >
          Back to Blogs
        </button>

        <div className="relative mb-8">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-72 object-cover rounded-lg shadow-lg opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-lg"></div>
        </div>
        <h2 className="text-4xl font-bold mb-4">{blog.title}</h2>
        <p className="text-xl font-semibold text-gray-600 mb-6">
          {blog.summary}
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            {blog.content}
          </p>
        </div>
      </div>
      <Footer scrollToSection={scrollToSection} />
    </>
  );
};

export default BlogDetail;