import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-red-500">Pizza</span>
              <span className="text-green-500">Delizioso</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Serving authentic Italian pizza since 1985. Made with love and the
              finest ingredients.
            </p>
            <div className="flex space-x-4">
              <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" whileHover={{
              y: -3,
              color: '#E1306C'
            }} className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </motion.a>
              <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" whileHover={{
              y: -3,
              color: '#4267B2'
            }} className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </motion.a>
              <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{
              y: -3,
              color: '#1DA1F2'
            }} className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-red-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-red-500" />
                <span>info@pizzadelizioso.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-red-500" />
                <span>
                  123 Pizza Street
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </motion.div>
          {/* Opening Hours */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-red-500" />
                <div>
                  <span className="block">Monday - Thursday</span>
                  <span className="block text-gray-400">
                    11:00 AM - 10:00 PM
                  </span>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-red-500" />
                <div>
                  <span className="block">Friday - Saturday</span>
                  <span className="block text-gray-400">
                    11:00 AM - 11:00 PM
                  </span>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-red-500" />
                <div>
                  <span className="block">Sunday</span>
                  <span className="block text-gray-400">
                    12:00 PM - 9:00 PM
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Pizza Delizioso. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;