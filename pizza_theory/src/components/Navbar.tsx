import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={handleScrollTop} className="flex items-center">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="text-3xl font-extrabold text-red-600">Pizza</span>
            <span className="text-3xl font-extrabold text-green-700">
              Delizioso
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleScrollTop}
              className="relative group"
            >
              <span
                className={`text-lg font-medium ${
                  location.pathname === link.path
                    ? 'text-red-600'
                    : 'text-gray-800 hover:text-red-600'
                } transition-colors duration-300`}
              >
                {link.name}
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left"
                initial={{
                  scaleX: location.pathname === link.path ? 1 : 0,
                }}
                animate={{
                  scaleX: location.pathname === link.path ? 1 : 0,
                }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollTop}
            className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors duration-300"
          >
            Order Now
          </motion.button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleScrollTop}
              className={`text-lg font-medium ${
                location.pathname === link.path
                  ? 'text-red-600'
                  : 'text-gray-800'
              } hover:text-red-600 transition-colors duration-300 py-2`}
            >
              {link.name}
            </Link>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollTop}
            className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors duration-300 mt-2 w-full"
          >
            Order Now
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
