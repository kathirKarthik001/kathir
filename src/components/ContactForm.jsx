'use client'; // Mark as a Client Component

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 bg-gray-700 rounded-lg"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 bg-gray-700 rounded-lg"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 bg-gray-700 rounded-lg"
        rows="4"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;