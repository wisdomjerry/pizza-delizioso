import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOrderNow = () => {
    navigate("/cart");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-md py-2"
          : "bg-black/40 backdrop-blur-md py-4"
      }`}
    >
      {/* Constrained Container */}
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-2xl sm:text-3xl font-extrabold text-red-600">
              Pizza
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-green-700">
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
              className={`relative text-lg font-medium ${
                location.pathname === link.path
                  ? "text-red-600"
                  : "text-white hover:text-red-400"
              } transition-colors duration-300`}
            >
              {link.name}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOrderNow}
            className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-colors duration-300"
          >
            Order Now
          </motion.button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex justify-end pr-4 sm:pr-6">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-md w-full absolute top-full left-0 px-4 sm:px-6"
      >
        <div className="flex flex-col space-y-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium ${
                location.pathname === link.path ? "text-red-500" : "text-white"
              } hover:text-red-400 transition-colors duration-300 py-2`}
            >
              {link.name}
            </Link>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleOrderNow}
            className="relative bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors duration-300 w-full"
          >
            Order Now
            <AnimatePresence>
              {cartItems.length > 0 && (
                <motion.span
                  key={cartItems.length}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full px-2 text-xs font-bold"
                >
                  {cartItems.length}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
