import React from "react";
import { motion } from "framer-motion";
import { Ghost } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6'>
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='text-center'
      >
        <Ghost className='w-20 h-20 text-purple-400 mx-auto mb-4' />
        <h1 className='text-6xl font-extrabold'>404</h1>
        <p className='text-2xl text-gray-300 mb-6'>
          Oops! This page has vanished into a story untold.
        </p>
        <Link
          to='/'
          className='px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition'
        >
          Go Back Home
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;
