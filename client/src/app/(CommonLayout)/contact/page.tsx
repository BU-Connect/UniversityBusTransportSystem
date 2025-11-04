'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';

import Header from '@/components/Header';
import {
  FaBus,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaClock,
  FaQuestionCircle,
  FaChevronDown,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import NextImage from '@/components/common/NextImage';

// ---------------- FAQ Component ----------------
function FAQ() {
  const items: Array<{ q: string; a: string }> = [
    {
      q: 'How do I track the bus in real time?',
      a: "Open the UBTS app or the 'View Bus Routes' page and tap a running bus — the map will show its live location.",
    },
    {
      q: 'What should I do if the app crashes?',
      a: 'Try updating to the latest version. If the issue persists, send us the error details and screenshots via this contact form.',
    },
    {
      q: 'How can I report lost items?',
      a: 'Email support@ubts.edu.bd with a description and the approximate time and route where the item was lost.',
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => (
        <article key={idx} className="rounded-lg border border-gray-100 overflow-hidden">
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex items-center justify-between p-4 bg-white"
            aria-expanded={open === idx}
          >
            <span className="text-gray-800 font-medium">{it.q}</span>
            {/* Use span wrapper for rotation to satisfy TypeScript */}
            <span
              className={`inline-block transition-transform duration-200 ${
                open === idx ? 'rotate-180' : 'rotate-0'
              } text-gray-500`}
            >
              <FaChevronDown />
            </span>
          </button>

          {open === idx && <div className="p-4 bg-gray-50 text-gray-600">{it.a}</div>}
        </article>
      ))}
    </div>
  );
}

// ---------------- Contact Page ----------------
const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error('Please fill in all fields before submitting.');
      return;
    }

    setSubmitted(true);
    toast.success('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <Header
        title="Contact UBTS Support"
        subtitle="Have questions about bus schedules, routes, or service updates? Reach out to our team — we’re here to help!"
        imageSrc="/static/loginpagebanner.png"
        primaryText="Send a Message"
        primaryHref="#contact-form"
        secondaryText="View Routes"
        secondaryHref="#routes"
      />

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: form card */}
          <div id="contact-form" className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {!submitted ? (
              <>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Send a Message</h2>
                <p className="text-gray-600 mb-6">
                  Have a question about routes, schedules, or the mobile app? Drop us a message and
                  our UBTS team will respond within 24 hours.
                </p>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-sm text-gray-700 inline-flex items-center gap-2">
                        <span className="text-red-600"><FaUser /></span> Full name
                      </span>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Your full name"
                        className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-150"
                        aria-label="Full name"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm text-gray-700 inline-flex items-center gap-2">
                        <span className="text-red-600"><FaEnvelope /></span> Email
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="you@university.edu"
                        className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-150"
                        aria-label="Email address"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm text-gray-700 inline-flex items-center gap-2">
                      <span className="text-red-600"><FaBus /></span> Message
                    </span>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="How can we help?"
                      rows={6}
                      className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-150 resize-none"
                      aria-label="Message"
                    />
                  </label>

                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm text-gray-500">
                      <span className="inline mr-2 text-red-600"><FaClock /></span>
                      Typical response within 24 hours
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150"
                      aria-label="Send message"
                    >
                      <FaEnvelope /> Send Message
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                  <span className="text-red-600"><FaBus /></span> Thank you, {name.split(' ')[0] || 'User'}!
                </h3>
                <p className="text-gray-600 mt-3">
                  We have received your message. Our team will reply to{' '}
                  <span className="font-medium">{email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-6 inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-150 font-medium"
                >
                  <FaEnvelope /> Send Another
                </button>
              </div>
            )}
          </div>

          {/* Right: info panel */}
          <aside className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-red-600"><FaMapMarkerAlt /></span> UBTS Office
              </h4>
              <p className="text-gray-600 mt-2">University of Barishal Campus</p>

              <div className="mt-4 grid grid-cols-1 gap-3">
                <a
                  href="mailto:support@ubts.edu.bd"
                  className="flex items-center gap-3 text-red-600 hover:text-red-700 font-medium"
                >
                  <FaEnvelope /> support@ubts.edu.bd
                </a>
                <a
                  href="tel:+8801733570761"
                  className="flex items-center gap-3 text-red-600 hover:text-red-700 font-medium"
                >
                  <FaPhoneAlt /> +880 1733 570 761
                </a>
              </div>

              <div className="mt-4">
                <h5 className="text-sm text-gray-700 font-medium">Office hours</h5>
                <p className="text-gray-600 text-sm mt-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600 text-sm">Sat: 10:00 AM - 3:00 PM</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-red-600"><FaQuestionCircle /></span> Quick links
              </h4>
              <div className="mt-4 grid grid-cols-1 gap-2">
                <a id="routes" href="#routes" className="text-gray-700 hover:text-red-600">
                  View Bus Routes
                </a>
                <a id="dashboard" href="#dashboard" className="text-gray-700 hover:text-red-600">
                  Driver Dashboard
                </a>
                <a id="help" href="#help" className="text-gray-700 hover:text-red-600">
                  Help Center
                </a>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  aria-label="facebook"
                  className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  <FaFacebookF />
                </button>
                <button
                  aria-label="twitter"
                  className="p-2 rounded-md bg-sky-500 text-white hover:bg-sky-600"
                >
                  <FaTwitter />
                </button>
                <button
                  aria-label="instagram"
                  className="p-2 rounded-md bg-pink-500 text-white hover:bg-pink-600"
                >
                  <FaInstagram />
                </button>
              </div>
            </div>
          </aside>
        </section>

        {/* Map Section */}
        <div className="bg-white mt-10 rounded-2xl p-6 shadow-md border w-full border-gray-100">
          <h4 className="text-lg font-semibold text-gray-800">Map</h4>
          <div className="mt-4 rounded-md overflow-hidden border border-gray-100">
            <div className="w-full h-48 relative">
              <NextImage
                image="/static/map-placeholder.png"
                alt="map placeholder"
                width={800}
                height={320}
              />
            </div>
          </div>
        </div>

        {/* Support topics + FAQ */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Support topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors">
                <a href="#bus-schedules" className="text-gray-800 font-medium hover:text-red-600">
                  Bus Schedules
                </a>
                <p className="text-sm text-gray-600 mt-1">View and download daily routes.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors">
                <a href="#route-updates" className="text-gray-800 font-medium hover:text-red-600">
                  Route Updates
                </a>
                <p className="text-sm text-gray-600 mt-1">Latest changes to stops and timings.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors">
                <a href="#app-issues" className="text-gray-800 font-medium hover:text-red-600">
                  App Issues
                </a>
                <p className="text-sm text-gray-600 mt-1">Troubleshooting for mobile app.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors">
                <a href="#lost-items" className="text-gray-800 font-medium hover:text-red-600">
                  Lost Items
                </a>
                <p className="text-sm text-gray-600 mt-1">Report and claim process.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
            <FAQ />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;