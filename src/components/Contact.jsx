import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-6'>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='max-w-4xl mx-auto text-center'
      >
        <h1 className='text-5xl font-extrabold mb-4'>Contact Us</h1>
        <p className='text-gray-300 mb-10 text-lg'>
          We'd love to hear from you. Whether it’s feedback, collaboration, or
          support — Story Chev is always here for you.
        </p>
      </motion.div>

      <motion.div
        className='grid md:grid-cols-2 gap-10 max-w-5xl mx-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className='bg-slate-700 rounded-2xl p-6 space-y-6 shadow-lg'>
          <div className='flex items-center space-x-4'>
            <Mail className='text-blue-400' />
            <p>justiceadam673@gmail.com</p>
          </div>
          <div className='flex items-center space-x-4'>
            <Phone className='text-green-400' />
            <p>+234-901-828-1266</p>
          </div>
        </div>

        <form className='bg-slate-700 rounded-2xl p-6 space-y-4 shadow-lg'>
          <input
            type='text'
            placeholder='Your Name'
            className='w-full p-3 rounded bg-slate-800 text-white border border-gray-600 focus:outline-none'
          />
          <input
            type='email'
            placeholder='Your Email'
            className='w-full p-3 rounded bg-slate-800 text-white border border-gray-600 focus:outline-none'
          />
          <textarea
            placeholder='Your Message'
            rows='5'
            className='w-full p-3 rounded bg-slate-800 text-white border border-gray-600 focus:outline-none'
          ></textarea>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-6 py-2 rounded flex items-center space-x-2'
          >
            <Send className='w-4 h-4' />
            <span>Send Message</span>
          </button>
        </form>
      </motion.div>
    </main>
  );
};

export default Contact;
