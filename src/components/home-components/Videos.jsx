// FeaturedVideoSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink, Clock, Eye, ThumbsUp } from "lucide-react";
import { Link } from 'react-router-dom';

const Videos = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const featuredVideo = {
    id: "zAICu_dIlUs",
    title: "Easy Tawa Pizza | तवा पिज्जा रेसिपी | Pizza at home without oven without yeast | Chef Ranveer Brar",
    description: "Pizza at home, pizza without oven, pizza without yeast, I get so many requests to make the Perfect Pizza at home. So here we go, on popular demand, a step by step recipe for Pizza. Do try and let me know :)",
    duration: "13:30",
    views: "16.6M",
    likes: "289K",
    uploadDate: "Feb 25, 2020",
    thumbnail: "https://i.ytimg.com/vi/zAICu_dIlUs/hqdefault.jpg?s…BACGAY4AUAB&rs=AOn4CLDEQ7laklja3DqFARttUWIkoAS_QQ"
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.2 }}
      className="max-w-5xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-300 mb-2">
          Featured Recipe Video
        </h2>
        <p className="text-gray-400">
          Master authentic flavors with step-by-step guidance
        </p>
      </div>

      <div className="bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden shadow-lg">
        {/* Video Container */}
        <div className="relative aspect-video bg-black">
          {!isVideoLoaded ? (
            // Custom Thumbnail with Play Button
            <motion.div
              className="relative w-full h-full cursor-pointer group"
              onClick={handleVideoLoad}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              
              {/* Play Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-red-600 hover:bg-red-500 rounded-full p-6 shadow-lg transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </motion.div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {featuredVideo.duration}
              </div>
            </motion.div>
          ) : (
            // YouTube Embed
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${featuredVideo.id}?autoplay=1&rel=0`}
              title={featuredVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Video Info */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-200 mb-3 leading-tight">
            {featuredVideo.title}
          </h3>
          
          <p className="text-gray-400 mb-4 leading-relaxed">
            {featuredVideo.description}
          </p>

          {/* Stats and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Video Stats */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{featuredVideo.views} views</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                <span>{featuredVideo.likes}</span>
              </div>
              <span>{featuredVideo.uploadDate}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.a
                href={`https://youtube.com/watch?v=${featuredVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Watch on YouTube
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-gray-200 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <Link to="/recipes">More Recipes</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mt-6"
      >
        <p className="text-gray-400 mb-3">
          Don't miss out on the latest recipes and cooking tips!
        </p>
        <motion.a
          href="https://youtube.com/@RanveerBrar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-medium shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-4 h-4" />
          Subscribe to Channel
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Videos;