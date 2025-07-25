// BookSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Star,
  ShoppingCart,
  ExternalLink,
  Award,
} from "lucide-react";

const Books = () => {
  const [hoveredBook, setHoveredBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "A Journey Through India",
      subtitle:
        "Sharing Stories Behind Spices and Dishes From Various Regions of India",
      author: "Ranveer Brar",
      coverImage:
        "https://ranveerbrar.com/wp-content/uploads/2024/06/a-journey-through-india.jpg",
      description:
        "While it includes food, it's more about the cultural significance, history, and the stories behind the food. Brar sees himself as a 'Story-Hungry Traveller' who serves culture with food.",
      rating: 4.6,
      reviews: 128,
      price: "₹1,499",
      publishYear: "2024",
      pages: 197,
      category: "Food History",
      buyLinks: {
        amazon: "https://ranveerbrar.com/product/a-journey-through-india/",
      },
    },
    {
      id: 2,
      title: "Come Into My Kitchen",
      subtitle: "A Journey Through Indian Flavors",
      author: "Ranveer Brar",
      coverImage: "https://m.media-amazon.com/images/I/81kDa3R+xgL._SY522_.jpg",
      description:
        "A comprehensive guide to Indian cuisine featuring over 100 traditional and modern recipes with personal stories and cooking techniques.",
      rating: 4.2,
      reviews: 51,
      price: "₹335",
      publishYear: "2016",
      pages: 247,
      category: "Cookbook",
      buyLinks: {
        amazon:
          "https://www.amazon.in/Come-into-Kitchen-Ranveer-Brar-ebook/dp/B01GTQHAFQ/ref=sr_1_3?s=books&sr=1-3",
      },
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.2 }}
      className="max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-300 mb-2">
          Published Works
        </h2>
        <p className="text-gray-400">
          Explore culinary wisdom through Chef Ranveer's acclaimed books
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ amount: 0.3 }}
            className="bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden shadow-lg group"
            onHoverStart={() => setHoveredBook(book.id)}
            onHoverEnd={() => setHoveredBook(null)}
          >
            {/* Book Cover */}
            <div className="relative overflow-hidden">
              <motion.img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Overlay on Hover */}
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredBook === book.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: hoveredBook === book.id ? 0 : 20,
                    opacity: hoveredBook === book.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <BookOpen className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                </motion.div>
              </motion.div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                {book.category}
              </div>
            </div>

            {/* Book Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-200 mb-1 line-clamp-2">
                {book.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 font-medium">
                {book.subtitle}
              </p>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {book.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-gray-300 text-sm font-medium">
                    {book.rating}
                  </span>
                </div>
                <span className="text-gray-500 text-sm">
                  ({book.reviews} reviews)
                </span>
              </div>

              <div className="flex justify-between text-xs text-gray-400 mb-4">
                <span>{book.publishYear}</span>
                <span>{book.pages} pages</span>
              </div>

              {/* Price and Buy Button */}
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-orange-400">
                  {book.price}
                </div>
                <motion.a
                  href={book.buyLinks.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Buy Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Books;
