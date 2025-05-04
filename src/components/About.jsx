import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Users, Brain } from "lucide-react";

const About = () => {
  return (
    <main className='bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen py-20 px-6'>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center max-w-4xl mx-auto'
      >
        <h1 className='text-5xl font-extrabold mb-6 tracking-wide text-white'>
          <Sparkles className='inline-block mr-2 text-yellow-400' />
          About Story Chev
        </h1>
        <p className='text-xl text-gray-300 mb-12'>
          Welcome to{" "}
          <span className='text-blue-400 font-semibold'>Story Chev</span> — your
          AI-powered storyteller that brings your ideas to life with words that
          captivate, engage, and inspire.
        </p>
      </motion.section>

      <section className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-10'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='bg-green-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300'
        >
          <BookOpen className='w-10 h-10 text-yellow-300 mb-4' />
          <h2 className='text-2xl font-bold mb-2'>What is Story Chev?</h2>
          <p className='text-gray-300'>
            Story Chev is a storytelling companion powered by AI that takes your
            ideas and transforms them into compelling stories. Whether it’s
            fantasy, romance, adventure, or inspiration, Story Chev delivers it
            your way.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='bg-slate-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300'
        >
          <Brain className='w-10 h-10 text-green-400 mb-4' />
          <h2 className='text-2xl font-bold mb-2'>AI at its Core</h2>
          <p className='text-gray-300'>
            Powered by natural language processing and creativity models, Story
            Chev ensures that each story is personalized, smooth, and deeply
            immersive — like it was written just for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='bg-slate-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300'
        >
          <Users className='w-10 h-10 text-pink-400 mb-4' />
          <h2 className='text-2xl font-bold mb-2'>For Everyone</h2>
          <p className='text-gray-300'>
            Whether you're a student, a parent, a pastor, a teacher, or a
            dreamer — Story Chev is here to give life to your words and
            imagination with ease and beauty.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='bg-red-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300'
        >
          <Sparkles className='w-10 h-10 text-purple-300 mb-4' />
          <h2 className='text-2xl font-bold mb-2'>Why We Built It</h2>
          <p className='text-gray-300'>
            To democratize creativity. To help people everywhere express
            themselves freely. And to show that everyone has a story worth
            telling — beautifully.
          </p>
        </motion.div>
      </section>

      <motion.div
        className='text-center mt-16'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className='text-gray-400 text-lg italic'>
          Start your story today with Story Chev — where imagination meets
          technology.
        </p>
      </motion.div>
    </main>
  );
};

export default About;
