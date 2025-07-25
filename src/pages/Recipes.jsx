import { motion } from "framer-motion";
import RecipeCard from "../components/RecipeCard";
import RecipeData from "../data/RecipeData";
import { useState } from "react";

const Recipes = () => {
  const [language, setLanguage] = useState("en");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 min-h-screen py-25"
    >
      {/* Top Heading + Language Toggle */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 max-w-6xl mx-auto px-4"
      >
        <h2 className="text-4xl font-semibold text-white mb-4 md:mb-0">
          {language === "en" ? "All Recipes" : "सभी रेसिपी"}
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage(language === "en" ? "hi" : "en")}
          className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded text-sm text-white"
        >
          {language === "en" ? "हिन्दी में देखें" : "Switch to English"}
        </motion.button>
      </motion.div>

      {/* Category-wise Sections */}
      {RecipeData.map((categoryBlock, catIndex) => (
        <div key={catIndex} className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-amber-500 mb-3 px-4 max-w-6xl mx-auto"
          >
            {categoryBlock.category}

            <motion.hr
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="border-t-2 border-amber-500 w-[90%] max-w-[90%] mb-8 rounded-full"
            />
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
            {categoryBlock.data.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm mx-auto"
              >
                <RecipeCard
                  id={recipe.id}
                  title={recipe.title[language]}
                  description={recipe.description[language]}
                  image={recipe.image}
                  youtubeLink={recipe.youtubeLink}
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Recipes;
