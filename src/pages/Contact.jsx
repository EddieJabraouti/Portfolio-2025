import React, { useRef } from 'react';
import BottomNav from './BottonNav';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1hlehrf", "template_ojk6ijf", form.current, {
        publicKey:"HIf39U7aQ9eBiYEL3",
      })
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
          e.target.reset();
        }
      );
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between">
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="max-w-2xl w-full p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-white">Contact Me</h1>
          <p className="text-white text-sm mb-8">
            Have any questions or want to get in touch? Please fill out the form below and I'll get back to you as soon as possible.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="text-left">
              <label className="block mb-1 text-sm font-medium text-white">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
              />
            </div>

            <div className="text-left">
              <label className="block mb-1 text-sm font-medium text-white">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
              />
            </div>

            <div className="text-left">
              <label className="block mb-1 text-sm font-medium text-white">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-600 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <hr className="border-gray-800" />
      <BottomNav />
    </div>
  );
};

export default Contact;
