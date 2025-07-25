import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RecipeData from "../data/RecipeData";
import { motion } from "framer-motion";

const RecipeDetail = () => {
  const { id } = useParams();
  const [language, setLanguage] = useState("en");
  const [isFavorite, setIsFavorite] = useState(false);

  const flatRecipes = RecipeData.flatMap((block) => block.data);
  const recipe = flatRecipes.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (recipe) {
      // Check if recipe is already in favorites
      const favorites = JSON.parse(
        localStorage.getItem("favoriteRecipes") || "[]"
      );
      setIsFavorite(favorites.some((fav) => fav.id === recipe.id));
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div className="text-white p-6">
        <h2 className="text-2xl">Recipe not found</h2>
      </div>
    );
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favoriteRecipes") || "[]"
    );

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav) => fav.id !== recipe.id);
      localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, recipe];
      localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 min-h-screen pt-25 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded"
          >
            {language === "en" ? "हिन्दी में पढ़ें" : "Read in English"}
          </motion.button>

          <button
            onClick={toggleFavorite}
            className={`p-3 rounded-full transition-all duration-200 ${
              isFavorite
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <svg
              className="w-6 h-6"
              fill={isFavorite ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        <img
          src={recipe.image}
          alt={recipe.title[language]}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold">{recipe.title[language]}</h1>
          {isFavorite && (
            <motion.div>
              <Link
                to={"/favorites"}
                className="text-sm text-amber-400 flex items-center"
              >
                <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {language === "en"
                  ? "Saved to Favorites"
                  : "पसंदीदा में सहेजा गया"}{" "}
              </Link>
            </motion.div>
          )}
        </div>

        <h1 className="text-2xl font-bold text-amber-500 mb-4">
          {language === "en" ? "Ingredients" : "सामग्री"}
        </h1>
        <div className="text-lg text-gray-300 mb-4">
          {recipe.ingredients[language].map((item, index) => (
            <p key={index}>• {item}</p>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-amber-500 mb-6">
          {language === "en" ? "Process" : " बनाने की प्रक्रिया "}
        </h1>
        <div className="text-lg text-gray-300 mb-4">
          {recipe.steps[language].map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {section.section}
              </h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                {section.instructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a
          href={recipe.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer inline-block px-6 py-2 bg-red-500 hover:bg-red-600 active:scale-95 rounded text-white"
        >
          ▶ Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default RecipeDetail;
