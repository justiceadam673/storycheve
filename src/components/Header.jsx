import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/istockphoto-1256603037-1024x1024.jpg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='bg-slate-900 shadow-lg sticky top-0 z-50'
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
        {/* Logo Section */}
        <Link to='/' className='flex items-center space-x-3'>
          <img
            src={Logo}
            alt='Story Chev Logo'
            className='w-10 h-10 rounded-full object-cover border border-white'
          />
          <h1 className='text-white text-2xl md:text-3xl font-bold tracking-wide'>
            Story Chev
          </h1>
        </Link>

        {/* Nav Section */}
        <nav className='hidden md:flex space-x-16'>
          {navLinks.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-white text-lg font-medium ${
                location.pathname === item.href
                  ? "text-blue-400 underline underline-offset-8"
                  : "hover:text-blue-400"
              }`}
            >
              <Link to={item.href}>{item.name}</Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
