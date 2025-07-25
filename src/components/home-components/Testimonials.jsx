// TestimonialsSection.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sanjeev Kapoor",
      title: "Celebrity Chef",
      avatar: "https://yt3.googleusercontent.com/rhslYfIZ9tly862bYj2E0teKaLx99isb-bY8QxRsAO35DMqfNHacgwMD0YYRc6ax_XH4WuAIVw=s900-c-k-c0x00ffffff-no-rj",
      quote: "Ranveer brings a unique blend of traditional techniques and modern innovation to Indian cuisine. His passion is truly infectious.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Food Critic, Times of India",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_U0oL1nxD7oyvMElSTEOWffOcLvVZ2EoVstHhScibkTNf7wL73icGW6QYiYkkTY2oWA",
      quote: "Chef Ranveer's ability to storytell through food is unmatched. Every dish carries the soul of Indian culture.",
      rating: 5
    },
    {
      id: 3,
      name: "Marco Alessandro",
      title: "Michelin Star Chef",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Working with Ranveer opened my eyes to the depth and complexity of Indian flavors. He's a true master of his craft.",
      rating: 5
    },
    {
      id: 4,
      name: "Sarah Johnson",
      title: "Food Enthusiast",
      avatar: "http://cookcountydems.com/wp-content/uploads/2023/12/Johnson-Sarah-Headshot.jpg",
      quote: "I've tried countless recipes from Chef Ranveer's shows. Each one transports me straight to the streets of India!",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.2 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-semibold text-gray-300 mb-2">
        What People Say
      </h2>
      <p className="text-gray-400 mb-12">
        Testimonials from food lovers and industry experts
      </p>

      <div className="relative bg-zinc-800 border border-zinc-700 rounded-xl p-8 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Star Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
              />
              <div className="text-left">
                <h4 className="text-gray-200 font-semibold">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-zinc-700 hover:bg-zinc-600 text-gray-300 p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-zinc-700 hover:bg-zinc-600 text-gray-300 p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-orange-500" : "bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;