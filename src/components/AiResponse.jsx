import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AiResponse = ({ inputValue }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + inputValue.charAt(index));
      index++;

      if (index >= inputValue.length) {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [inputValue]);

  function handleReset() {
    window.location.reload();
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500'>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-2/3 h-fit py-10 bg-white rounded-lg shadow-lg'
      >
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-bold mb-4'>AI Response</h1>
          <p className='text-lg mb-4'>Here is the response from Storychev:</p>
          <div className='border border-gray-300 rounded p-4 w-1/2'>
            <p className='text-gray-700 break-words whitespace-pre-line'>
              {displayedText}
            </p>
          </div>
          {isFinished && (
            <motion.button
              onClick={handleReset}
              className='mt-6 bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
            >
              Reset
            </motion.button>
          )}
        </div>
      </motion.section>
    </main>
  );
};

export default AiResponse;
