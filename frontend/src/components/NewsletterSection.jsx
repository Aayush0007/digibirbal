import React, { useState } from "react";
import axios from 'axios';

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/newsletter/subscribe', { email });
      if (response.data.success) {
        setSubscribed(true);
        setError('');
        setEmail('');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    }
  };

  const handleUnsubscribe = async () => {
    try {
      const response = await axios.post('http://localhost:3001/newsletter/unsubscribe', { email });
      if (response.data.success) {
        setSubscribed(false);
        setError('');
        setEmail('');
      }
    } catch (err) {
      setError('Failed to unsubscribe. Please try again.');
    }
  };

  return (
    <section
      id="newsletter"
      className="py-16 px-4 bg-gradient-to-r from-blue-500 to-teal-400 text-center text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Join our community to get the latest updates, exclusive offers, and insights directly in your inbox.
        </p>
        {!subscribed ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-0 md:flex md:justify-center animate__animated animate__fadeIn animate__delay-3s"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-1/2 px-6 py-3 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-gray-800 placeholder-gray-500"
              placeholder="Enter your email address"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-red-600 text-white px-6 py-3 rounded-lg mt-4 md:mt-0 md:ml-4 transform hover:scale-105 transition-transform duration-300 ease-out"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="mt-6 animate__animated animate__fadeIn animate__delay-4s">
            <p className="text-lg text-green-500">
              Thank you for subscribing! 🎉
            </p>
            <button
              onClick={handleUnsubscribe}
              className="w-full md:w-auto bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-lg mt-4 md:mt-0 md:ml-4 transform hover:scale-105 transition-transform duration-300 ease-out"
            >
              Unsubscribe
            </button>
          </div>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </section>
  );
}
