import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { motion } from "framer-motion";

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favoriteRecipes") || "[]"
    );
    setFavoriteRecipes(favorites);
  }, []);

  const removeFavorite = (recipeId) => {
    const updatedFavorites = favoriteRecipes.filter(
      (recipe) => String(recipe.id) !== String(recipeId)
    );

    setFavoriteRecipes(updatedFavorites);
    localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
  };

  const clearAllFavorites = () => {
    setFavoriteRecipes([]);
    localStorage.removeItem("favoriteRecipes");
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 min-h-screen px-4 py-25 sm:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              My Favorite Recipes
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              {favoriteRecipes.length} saved recipes
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded transition-colors text-sm"
            >
              {language === "en" ? "हिन्दी में पढ़ें" : "Read in English"}
            </motion.button>
            {favoriteRecipes.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearAllFavorites}
                className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-600 rounded transition-colors text-sm"
              >
                {language === "en" ? "Clear All" : "सभी हटाएं"}
              </motion.button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {favoriteRecipes.length === 0 ? (
          <div className="text-center py-20">
            <div className="mb-6">
              <svg
                className="w-20 h-20 mx-auto text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">
              No favorite recipes yet
            </h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Start exploring recipes and save your favorites!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              <Link
              to="/recipes"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded text-white transition-colors text-sm"
            >
              {language === "en" ? "Browse Recipes" : "रेसिपी देखें"}
            </Link>
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteRecipes.map((recipe) => (
              <div key={recipe.id} className="relative group">
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  className="absolute top-2 right-2 z-10 p-2 bg-red-500 hover:bg-red-600 rounded-full text-white transition-all duration-200 hover:scale-105 shadow-lg"
                  title={
                    language === "en"
                      ? "Remove from favorites"
                      : "पसंदीदा से हटाएं"
                  }
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </button>

              
                <RecipeCard
                  id={recipe.id}
                  title={recipe.title[language]}
                  description={recipe.ingredients[language]
                    .slice(0, 5)
                    .join(", ")}
                  image={recipe.image}
                  youtubeLink={recipe.youtubeLink}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
