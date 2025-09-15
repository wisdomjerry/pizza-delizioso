import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDownIcon, StarIcon, ClockIcon, TruckIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const pizzaItems = [
    {
      id: 1,
      name: "Margherita",
      description: "Fresh tomatoes, mozzarella, basil, and our signature sauce",
      price: "$14.99",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Classic pepperoni with mozzarella and our signature sauce",
      price: "$16.99",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Vegetarian",
      description: "Bell peppers, mushrooms, onions, olives, and tomatoes",
      price: "$15.99",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Supreme",
      description: "Pepperoni, sausage, bell peppers, onions, and olives",
      price: "$18.99",
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const { addToCart } = useCart(); // ✅ get addToCart

  // Removed unused handleAddToCart function

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      quote:
        "The best pizza I've had in years! The crust is perfectly crispy and the toppings are always fresh.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      quote:
        "Pizza Delizioso has become our family's Friday night tradition. Great food and excellent service!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      name: "Emily Chen",
      quote:
        "I'm very picky about my pizza, but this place never disappoints. Their Margherita pizza is to die for!",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-50 z-10"
            style={{
              mixBlendMode: "multiply",
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Delicious pizza"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-white max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Authentic Italian Pizza
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Handcrafted with love using traditional recipes and the freshest
              ingredients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors"
              >
                Order Online
              </motion.button>
              <Link to="/menu">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-red-600 transition-colors"
              >
                View Menu
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20"
        >
          <ChevronDownIcon size={32} />
        </motion.div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              staggerChildren: 0.2,
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInVariants}
              transition={{
                duration: 0.5,
              }}
              className="bg-stone-50 p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients, imported directly from Italy
                to ensure authentic taste.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInVariants}
              transition={{
                duration: 0.5,
              }}
              className="bg-stone-50 p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-gray-600">
                From our oven to your table in record time. Hot and fresh pizza
                every time.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInVariants}
              transition={{
                duration: 0.5,
              }}
              className="bg-stone-50 p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
              <p className="text-gray-600">
                Enjoy free delivery on all orders over $25 within our delivery
                zone.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Popular Pizzas Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Popular Pizzas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handcrafted with love using traditional Italian recipes and the
              freshest ingredients
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pizzaItems.map((pizza, index) => (
              <motion.div
                key={pizza.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{pizza.name}</h3>
                    <span className="text-lg font-bold text-red-600">
                      {pizza.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{pizza.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-600 text-white py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
                    onClick={() =>
                      addToCart({
                        id: pizza.id,
                        name: pizza.name,
                        price: parseFloat(pizza.price.replace("$", "")), 
                        image: pizza.image, 
                      })
                    } // ✅ active button
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="text-center mt-12"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors"
              >
                View Full Menu
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1985 by the Rossi family, Pizza Delizioso brings
                authentic Italian flavors straight from Naples to your table.
                Our recipes have been passed down through generations,
                preserving the art of traditional pizza making.
              </p>
              <p className="text-gray-600 mb-6">
                We take pride in using only the finest ingredients - from our
                homemade tomato sauce to the freshest local produce and imported
                Italian cheeses. Our wood-fired ovens create that perfect,
                crispy-yet-chewy crust that pizza lovers crave.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="lg:w-1/2 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Pizza chef preparing pizza"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              customers have to say.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} size={16} fill="currentColor" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <StarIcon key={i + testimonial.rating} size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the authentic taste of Italy delivered right to your
              doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Order Online
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-red-600 transition-colors"
              >
                Call Us: (555) 123-4567
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
