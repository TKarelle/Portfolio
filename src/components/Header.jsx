// src/components/Header.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 relative">
      <motion.nav
        className="flex items-center justify-between"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Karelle Table
        </motion.div>

        {/* Navigation desktop */}
        <div className="hidden md:flex space-x-8">
          {["À propos", "Projets", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item === "Projets" ? "projects" : item.toLowerCase()}`}
              className="text-gray-600 hover:text-rose-500 transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Bouton menu mobile */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>
      </motion.nav>

      {/* Menu mobile */}
      <motion.div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 py-2 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
      >
        <div className="px-4 py-2 space-y-2">
          {["Accueil", "À propos", "Projets", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block px-4 py-2 text-gray-800 hover:bg-rose-100 rounded-lg transition-colors"
              variants={menuItemVariants}
              onClick={() => setIsMenuOpen(false)}
              aria-label={`Aller à la section ${item}`}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Hero section */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Développeuse Web React
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Je crée des applications web modernes et performantes avec React et
          les dernières technologies web.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mes projets
          </motion.a>
          <motion.a
            href="#contact"
            className="border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white px-6 py-3 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </header>
  );
}

export default Header;
