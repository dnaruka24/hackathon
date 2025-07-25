import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ id, title, description, image, youtubeLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: -20 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02, y: -4 }}
      className="cursor-pointer w-full h-60 md:h-65 relative overflow-hidden rounded-xl"
    >
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-zinc-800 p-4 rounded-xl shadow-lg flex flex-col"
          >
            <motion.img
              variants={contentVariants}
              transition={{ delay: 0.1 }}
              src={image}
              alt={title}
              className="rounded-md mb-1 w-full h-45 md:h-50 object-cover"
            />
            <motion.h3
              variants={contentVariants}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-bold text-white line-clamp-2"
            >
              {title}
            </motion.h3>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-zinc-800 p-4 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <motion.p
              variants={contentVariants}
              transition={{ delay: 0.1 }}
              className="text-gray-300 text-sm mb-4 line-clamp-4"
            >
              {description}
            </motion.p>

            <motion.div
              variants={contentVariants}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <Link
                to={`/recipe/${id}`}
                onClick={(e) => e.stopPropagation()}
                className="bg-green-600 hover:bg-green-700 active:scale-95 px-3 py-2 text-sm rounded text-white w-full text-center transition-colors"
              >
                View Recipe
              </Link>
              <a
                href={youtubeLink}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 active:scale-95 px-3 py-2 text-sm rounded text-white w-full text-center transition-colors "
              >
                Watch on YouTube
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RecipeCard;
