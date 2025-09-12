import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Pizzas", "Pastas", "Salads", "Desserts", "Drinks"];

// Menu data (all categories in one place)
const menuItems = [
  // Pizzas
  {
    name: "Margherita",
    category: "Pizzas",
    ingredients: "Fresh tomatoes, mozzarella, basil, olive oil",
    price: "$14.99",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Pepperoni",
    category: "Pizzas",
    ingredients: "Pepperoni, mozzarella, tomato sauce",
    price: "$16.99",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Vegetarian",
    category: "Pizzas",
    ingredients: "Bell peppers, mushrooms, onions, olives, tomatoes",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=300&q=80",
  },
  // Pastas
  {
    name: "Spaghetti Bolognese",
    category: "Pastas",
    ingredients: "Ground beef, tomato sauce, herbs, parmesan",
    price: "$13.99",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Fettuccine Alfredo",
    category: "Pastas",
    ingredients: "Cream sauce, butter, parmesan cheese",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=300&q=80",
  },
  // Salads
  {
    name: "Caesar Salad",
    category: "Salads",
    ingredients: "Romaine lettuce, parmesan, croutons, caesar dressing",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Greek Salad",
    category: "Salads",
    ingredients: "Tomatoes, cucumber, olives, feta cheese",
    price: "$11.99",
    image:
      "https://images.unsplash.com/photo-1636654931290-418d20865e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JlZWslMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  // Desserts
  {
    name: "Chocolate Cake",
    category: "Desserts",
    ingredients: "Rich chocolate sponge with ganache",
    price: "$7.99",
    image:
      "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Tiramisu",
    category: "Desserts",
    ingredients: "Coffee-soaked ladyfingers, mascarpone, cocoa",
    price: "$8.99",
    image:
      "https://plus.unsplash.com/premium_photo-1695028378225-97fbe39df62a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGlyYW1pc3V8ZW58MHx8MHx8fDA%3D",
  },
  // Drinks
  {
    name: "Lemonade",
    category: "Drinks",
    ingredients: "Fresh lemons, sugar, water",
    price: "$3.99",
    image:
      "https://plus.unsplash.com/premium_photo-1664391804722-cb3f2d439d7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Iced Coffee",
    category: "Drinks",
    ingredients: "Cold brew, ice, milk",
    price: "$4.99",
    image:
      "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=300&q=80",
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter menu items by category
  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen w-full">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide selection of authentic Italian pizzas, pastas,
            salads, desserts, and drinks.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="flex flex-wrap justify-center bg-white rounded-full p-1 shadow-md gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-red-600 text-white"
                    : "text-gray-800 hover:bg-red-100"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-1/3 object-cover"
                />
                <div className="p-6 flex flex-col justify-between w-2/3">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <span className="font-bold text-red-600">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.ingredients}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 text-white py-2 px-4 rounded-md font-medium hover:bg-red-700 transition-colors self-end"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;
