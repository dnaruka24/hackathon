import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChefHat, Lightbulb, RefreshCw } from "lucide-react";

const Tips = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const cookingTips = [
    {
      id: 1,
      tip: "Always bloom your whole spices in hot oil first. This releases their essential oils and creates deeper flavors in your curry base.",
      category: "Spice Technique"
    },
    {
      id: 2,
      tip: "The secret to perfect rice? Wash it until the water runs clear, then use a 1:1.5 ratio of rice to water. Let it rest for 10 minutes after cooking.",
      category: "Rice Mastery"
    },
    {
      id: 3,
      tip: "Season a new tawa by washing it, drying it, and then rubbing oil into it with an onion. ",
      category: "Tawa Seasoning"
    },
    {
      id: 4,
      tip: "Never add salt to dal while it's cooking - it prevents the lentils from softening properly. Season only after they're fully cooked.",
      category: "Dal Wisdom"
    },
    {
      id: 5,
      tip: "The key to restaurant-style curries? Make your masala base separately and let it cook until the oil separates. Patience is everything.",
      category: "Curry Secrets"
    },
    {
      id: 6,
      tip: "Always temper your yogurt with a pinch of besan (gram flour) before adding to hot curries. This prevents it from curdling.",
      category: "Yogurt Tips"
    },
    {
      id: 7,
      tip: "Add a pinch of salt and baking soda to the water when boiling leafy greens to help retain their vibrant green color.",
      category: "Preserving Green Vegetable Color"
    }
  ];

  // Auto-rotate tips every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % cookingTips.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [cookingTips.length]);

  const rotateTip = () => {
    setIsRotating(true);
    setTimeout(() => {
      setCurrentTipIndex((prev) => (prev + 1) % cookingTips.length);
      setIsRotating(false);
    }, 300);
  };

  const currentTip = cookingTips[currentTipIndex];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-2xl p-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 text-6xl">🍛</div>
          <div className="absolute bottom-4 left-4 text-4xl">🌶️</div>
          <div className="absolute top-1/2 right-1/4 text-3xl">✨</div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500/20 p-3 rounded-full">
              <ChefHat className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-200">
                Chef's Tip of the Day
              </h2>
              <p className="text-orange-300 text-sm">
                Master the art with Ranveer's wisdom
              </p>
            </div>
          </div>

          <motion.button
            onClick={rotateTip}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors"
          >
            <RefreshCw 
              className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${
                isRotating ? 'rotate-180' : ''
              }`} 
            />
          </motion.button>
        </div>

        {/* Tip Content */}
        <motion.div
          key={currentTipIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm mb-4">
            <Lightbulb className="w-4 h-4" />
            {currentTip.category}
          </div>

          {/* Tip Text */}
          <blockquote className="text-lg text-gray-200 leading-relaxed italic">
            "{currentTip.tip}"
          </blockquote>

          {/* Attribution */}
          <p className="text-right text-orange-400 font-medium mt-4">
            — Chef Ranveer Brar
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Tips;