import React, { useState } from 'react';
import { Github, Linkedin, Twitter, MessageCircle, Instagram, Mail, Send, MapPin, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent! Thank you for reaching out.');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: '#',
      hoverColor: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: '#',
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      href: '#',
      hoverColor: 'hover:text-sky-400'
    },
    {
      name: 'Discord',
      icon: <MessageCircle className="w-6 h-6" />,
      href: '#',
      hoverColor: 'hover:text-indigo-400'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      href: '#',
      hoverColor: 'hover:text-pink-400'
    }
  ];

  return (
    <footer className="border-t ">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Always open to discussing new opportunities, collaborations, and innovative projects. 
                Let's build something amazing together!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Your City, Country</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.hoverColor} transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-gray-800/50`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 Your Name. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;