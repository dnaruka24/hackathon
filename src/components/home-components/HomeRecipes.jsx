import React, { useRef } from "react";
import { motion } from "framer-motion";
import RecipeData from "../../data/RecipeData";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./../RecipeCard";

const HomeRecipes = () => {
  const scrollRef = useRef(null);
  const allRecipes = RecipeData.flatMap((category) => category.data);
  const homepageRecipes = allRecipes.slice(0, 6);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 320; // Width of card + gap
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Featured Recipes</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-zinc-700 hover:bg-zinc-600 rounded-full text-white transition-colors duration-200"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-zinc-700 hover:bg-zinc-600 rounded-full text-white transition-colors duration-200"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Title */}
      <h2 className="text-xl font-bold text-white mb-4 md:hidden px-4">
        Featured Recipes
      </h2>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-4 md:px-0"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {homepageRecipes.map((recipe, index) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 },
            }}
            className="flex-shrink-0 w-72 sm:w-80"
            style={{ scrollSnapAlign: "start" }}
          >
            <RecipeCard
              id={recipe.id}
              title={recipe.title.en}
              description={recipe.description.en}
              image={recipe.image}
              youtubeLink={recipe.youtubeLink}
            />
          </motion.div>
        ))}

        {/* View More Card - At the end of the scroll */}
        <motion.div
          className="flex-shrink-0 w-60 sm:w-80 flex flex-col items-center justify-center"
          style={{ scrollSnapAlign: "start" }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 shadow-lg cursor-pointer"
            onClick={() => navigate("/recipes")}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>

          <span className="text-lg font-semibold text-white">
            View All Recipes
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="text-xs text-gray-500">Swipe to see more recipes →</div>
      </div>
    </div>
  );
};

export default HomeRecipes;
