import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Web Design Trends to Watch in 2025",
    summary:
      "Explore the latest web design trends and how they can elevate your brand's online presence.",
    content:
      "In 2025, web design is moving towards minimalist layouts with bold typography and immersive animations. Users are gravitating towards designs that prioritize user experience and accessibility. This includes optimizing sites for mobile-first experiences and integrating dynamic elements that enhance engagement. Stay ahead of the curve by adopting modern design principles and technologies for your website...",
  },
  {
    id: 2,
    title: "How Frontend Development Shapes User Experience",
    summary:
      "Understand how frontend development impacts the way users interact with websites and applications.",
    content:
      "Frontend development is crucial in shaping the user's journey on a website. By focusing on responsive design, fast loading speeds, and intuitive navigation, frontend developers can create seamless experiences for users. Technologies like React, Vue.js, and Angular are becoming staples in crafting dynamic and interactive user interfaces. The role of frontend development is no longer just visual—it's about creating lasting impressions that keep users engaged...",
  },
  {
    id: 3,
    title: "The Importance of Scalable Backend Architecture",
    summary:
      "Learn why having a robust backend infrastructure is key to supporting your business's growth.",
    content:
      "Backend development involves more than just server-side logic; it’s about building systems that can scale as your business grows. With technologies like Node.js and Express, backend developers create systems that can handle an increasing volume of users and requests. Scalability, security, and performance optimization are crucial to ensuring a seamless experience for users, even during traffic spikes...",
  },
  {
    id: 4,
    title: "The Power of SEO for Web Design",
    summary:
      "How integrating SEO strategies into your web design can improve your site's search engine ranking.",
    content:
      "SEO and web design go hand-in-hand. A well-designed website is one that not only attracts users but is also optimized for search engines. This means structuring your site with clean code, fast loading times, and mobile responsiveness. By integrating SEO best practices like using header tags, optimizing images, and creating clean URLs, you can boost your website’s visibility and ranking in search engine results pages...",
  },
  {
    id: 5,
    title: "Why Your Website Needs Regular Frontend Updates",
    summary:
      "Regular frontend updates ensure that your website stays relevant, fast, and accessible for users.",
    content:
      "In the fast-evolving tech landscape, keeping your website's frontend up-to-date is essential. From security patches to new features, frontend updates ensure your site performs optimally. Regular updates also improve user experience by ensuring that the website is accessible, responsive, and compatible with modern browsers and devices. Maintaining your frontend code is an investment in your website's longevity...",
  },
  {
    id: 6,
    title: "Backend Development: Key to Building Robust Web Applications",
    summary:
      "Why choosing the right backend architecture is critical to building secure, reliable applications.",
    content:
      "Backend development is the backbone of any web application. Choosing the right technology stack, optimizing database queries, and ensuring security measures are in place can make a big difference. Frameworks like Express and databases like MongoDB or PostgreSQL help developers create fast, secure, and scalable applications. Proper backend architecture is crucial for preventing data breaches and ensuring the system can handle heavy loads during peak traffic times...",
  },
];

const BlogSection = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const handleSeeMore = () => {
    setVisibleBlogs((prevCount) => Math.min(prevCount + 3, blogs.length));
  };

  const handleViewMore = (id) => {
    window.open(`/blog/${id}`, "_blank");
  };

  return (
    <section id="blogs" className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
          Our Blog
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.slice(0, visibleBlogs).map((blog) => (
            <div
              key={blog.id}
              className="blog-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.summary}</p>
              <button
                onClick={() => handleViewMore(blog.id)}
                className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                View More
              </button>
            </div>
          ))}
        </div>
        {visibleBlogs < blogs.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleSeeMore}
              className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
