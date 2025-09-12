import { motion } from 'framer-motion';
const AboutPage = () => {
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <div className="pt-24 pb-16 bg-stone-50 min-h-screen w-full">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our story, our passion, and our commitment to authentic Italian
            cuisine.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{
          duration: 0.6
        }} className="rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Restaurant interior" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Pizza Delizioso was founded in 1985 by Antonio Rossi, who
              immigrated to America from Naples, Italy with a dream of sharing
              authentic Italian pizza with his new community.
            </p>
            <p className="text-gray-600 mb-4">
              Starting with just a small storefront and a wood-fired oven built
              by hand, Antonio quickly gained a reputation for creating the most
              authentic and delicious pizzas in town. His commitment to quality
              and tradition has remained at the heart of our business for over
              35 years.
            </p>
            <p className="text-gray-600">
              Today, Pizza Delizioso is still family-owned and operated, with
              Antonio's children and grandchildren carrying on his legacy and
              recipes while continuously innovating to bring you the perfect
              blend of traditional and contemporary Italian cuisine.
            </p>
          </motion.div>
        </div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: 'Quality Ingredients',
            description: 'We source only the finest ingredients, from San Marzano tomatoes to fresh mozzarella and locally grown produce. Quality is never compromised.',
            icon: '🍅'
          }, {
            title: 'Traditional Methods',
            description: 'Our pizzas are made using traditional Neapolitan techniques, including hand-stretched dough and cooking in wood-fired ovens at high temperatures.',
            icon: '🔥'
          }, {
            title: 'Community Focus',
            description: 'We believe in supporting our local community through sourcing ingredients locally when possible and participating in community events.',
            icon: '🏙️'
          }].map((value, index) => <motion.div key={value.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>)}
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            name: 'Marco Rossi',
            role: 'Head Chef',
            image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=281&q=80'
          }, {
            name: 'Sofia Bianchi',
            role: 'Pastry Chef',
            image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=344&q=80'
          }, {
            name: 'Luca Romano',
            role: 'Pizza Chef',
            image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          }, {
            name: 'Giulia Marino',
            role: 'Manager',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
          }].map((person, index) => <motion.div key={person.name} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-64 overflow-hidden">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-red-600">{person.role}</p>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="bg-red-600 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Pizza Family</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for passionate individuals to join our team. If
            you love pizza as much as we do, we'd love to hear from you.
          </p>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </div>;
};
export default AboutPage;