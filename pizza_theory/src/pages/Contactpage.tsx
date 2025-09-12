import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
const ContactPage = () => {
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
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or want to place an order? We'd love to
            hear from you!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{
          duration: 0.6
        }}>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your email" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Subject" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your message"></textarea>
                </div>
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} type="submit" className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="flex flex-col gap-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <MapPinIcon size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Pizza Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <PhoneIcon size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600">(555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <MailIcon size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@pizzadelizioso.com</p>
                    <p className="text-gray-600">orders@pizzadelizioso.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <ClockIcon size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                    <p className="text-gray-600">
                      Monday - Thursday: 11:00 AM - 10:00 PM
                    </p>
                    <p className="text-gray-600">
                      Friday - Saturday: 11:00 AM - 11:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Location Map</h3>
                <p className="text-gray-600 mb-4">
                  Interactive map would be displayed here
                </p>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors">
                  Get Directions
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="mt-16 bg-red-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[{
            question: 'Do you offer delivery?',
            answer: 'Yes, we offer delivery within a 5-mile radius of our restaurant. Orders over $25 qualify for free delivery.'
          }, {
            question: 'What are your busiest hours?',
            answer: 'We tend to be busiest between 6:00 PM and 8:00 PM on Friday and Saturday evenings. For faster service, consider dining with us outside these peak hours.'
          }, {
            question: 'Do you cater for events?',
            answer: 'Yes, we offer catering services for events of all sizes. Please contact us at least 48 hours in advance to discuss your requirements.'
          }, {
            question: 'Do you have gluten-free options?',
            answer: 'Yes, we offer gluten-free pizza crusts and several gluten-free pasta options. Please inform your server about any dietary restrictions.'
          }].map((faq, index) => <motion.div key={index} initial={{
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
          }} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </div>;
};
export default ContactPage;