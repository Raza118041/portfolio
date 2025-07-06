"use client"

import React, { useState } from 'react';
import { z } from 'zod';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().regex(/^\+?\d{10,15}$/, 'Please enter a valid phone number'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

const Contact = () => {

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden" id='contact'>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[url('https://via.placeholder.com/1500x300')] bg-repeat-x bg-bottom opacity-20"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        <p className='text-center mb-12'>Any question or remarks? Just write us a message!</p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Contact Information */}
          <div className="w-full md:w-1/2 bg-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-6">Say something to start a live chat!</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-gray-300 rotate-90" />
                <span>+92-301-1339381</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-300" />
                <span>aliraza118041@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gray-300" />
                <span>Near Stadium Market, IPS No 2 Quarter No 10, Okara Cantt.</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <FaFacebookF className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              <FaInstagram className="text-gray-300 hover:text-pink-400 cursor-pointer transition-colors" />
              <FaTwitter className="text-gray-300 hover:text-blue-300 cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                //   value={formData.firstName}
                //   value={"John"}
                //   onChange={handleInputChange}
                  className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                  placeholder="John"
                />
                {/* {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>} */}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                //   value={formData.lastName}
                //   value={"Doe"}
                //   onChange={handleInputChange}
                  className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                  placeholder="Doe"
                />
                {/* {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>} */}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                //   value={formData.email}
                //   value={"example@gmail.com"}
                //   onChange={handleInputChange}
                  className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                  placeholder="example@email.com"
                />
                {/* {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>} */}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                //   value={formData.phoneNumber}
                //   value={"+92-301-1339381"}
                //   onChange={handleInputChange}
                  className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                  placeholder="+1 012 3456 789"
                />
                {/* {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>} */}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Select Subject?</label>
              <select
                name="subject"
                // value={formData.subject}
                // value={"any thing"}
                // onChange={handleInputChange}
                className="w-full p-2 border-b-2 cursor-pointer border-gray-300 focus:outline-none focus:border-black"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Project Request">Project Request</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
              </select>
              {/* {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>} */}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                // value={formData.message}
                // value={"Write Message here"}
                // onChange={handleInputChange}
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                // rows="3"
                placeholder="Write your message..."
              />
              {/* {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>} */}
            </div>
            <button
            //   onClick={handleSubmit}
              className="w-full py-3 cursor-pointer bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;