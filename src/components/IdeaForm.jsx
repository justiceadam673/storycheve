import React from "react";
import { motion } from "framer-motion";

const IdeaForm = ({ inputValue, onInputChange, action }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-gray-50 p-4'>
      <motion.form
        action={action}
        className='w-1/2 p-8 bg-white shadow-lg rounded-lg space-y-4 transform transition-all duration-500 hover:scale-105'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className='text-2xl text-center font-bold mb-4'>Enter Your Idea</h2>
        <input
          type='text'
          name='ideatext'
          id='ideatext'
          className='border border-black rounded w-full p-3 mb-4'
          placeholder='Enter your idea here'
          value={inputValue}
          onChange={onInputChange}
        />
        <motion.button
          type='submit'
          className='w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.98 }}
        >
          Generate Story
        </motion.button>
      </motion.form>
    </div>
  );
};

export default IdeaForm;
