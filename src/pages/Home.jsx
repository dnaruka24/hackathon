import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import ExpandedContent from "../components/home-components/ExpandedContent";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-800 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-black opacity-80 z-0" />

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="navbar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 z-20"
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-screen flex items-center justify-center">
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-20 text-center px-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-2 tracking-wide">
              Welcome to Ranveer's World
            </h2>
            <p className="text-lg text-gray-400">
              Discover the essence of Indian cooking
            </p>
          </motion.div>
        )}

        {/* Clickable Container */}
        <motion.div
          className={`relative ${isExpanded ? "" : "cursor-pointer"}`}
          onClick={handleExpand}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            width: isExpanded ? "100%" : 400,
            height: isExpanded ? "100%" : 400,
            scale: isHovered && !isExpanded ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          {isExpanded && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ amount: 0.2 }}
              className="absolute top-1/4 left-6 sm:left-10 md:left-16 max-w-[90%] sm:max-w-md md:max-w-xl z-15 text-left text-shadow-lg"
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2 leading-relaxed">
                Discover the Art of Indian Cuisine with
              </p>
              <h1 className="text-gray-300 font-bold leading-tight text-5xl sm:text-4xl md:text-6xl">
                Chef Ranveer Brar
              </h1>
            </motion.section>
          )}

          {/* Background */}
          <motion.div
            className="absolute inset-0 bg-zinc-400"
            animate={{ borderRadius: isExpanded ? 0 : 8 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.4 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <img
              src="https://images.yourstory.com/cs/7/1da9ec30-14cc-11e9-a1b2-b928167b6c62/ranveer_filler_pic1560768047273.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=640&q=75"
              className="h-full w-full object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>

        {isExpanded && <ExpandedContent />}
      </div>
    </div>
  );
};

export default Home;
