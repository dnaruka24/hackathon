import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HomeRecipes from "./HomeRecipes";
import Testimonials from "./Testimonials"
import Tips from "./Tips"
import Videos from "./Videos"
import Books from "./Books"


const ExpandedContent = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute top-full w-full bg-zinc-900 px-6 py-16 space-y-24 z-10"
    >
      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ amount: 0.2 }}
        className="max-w-6xl mx-auto bg-zinc-800 border border-zinc-700 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 text-gray-300 shadow-md"
      >
        <img
          src="https://media.assettype.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticle_images%2F2020%2F05%2F19%2FRanveer-Brar-1151935090-1569498292.jpg?w=900&auto=format%2Ccompress&fit=max"
          alt="Chef Ranveer Brar"
          className="w-full md:w-1/2 rounded-lg object-cover"
        />

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-400 mb-6">
            Passion for food has driven me to every nook and corner of the
            world. From becoming the youngest executive chef at a five-star
            hotel, to hosting my own cooking shows, it’s my love for cooking
            that has got this far. Through this website, I intend to take you on
            a culinary journey, exploring new places, cultures, and flavours.
            Let’s engage, exchange and evolve our skills and taste buds.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-fit"
          >
            <Link
              to="/about"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-2xl transition duration-200 shadow-md"
            >
              Know More →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Recipes Section */}
      
      <HomeRecipes />

      {/* Testimonials Section */}

      <Testimonials />

      {/* Tips Section */}

      <Tips />

      {/* Books Section */}

      <Books />

      {/* Videos Section */}

      <Videos />

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
        className="max-w-3xl mx-auto text-gray-300"
      >
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded bg-zinc-700 text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded bg-zinc-700 text-white focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 rounded bg-zinc-700 text-white h-32 resize-none focus:outline-none"
          />
          <button
            type="button"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition text-white px-6 py-2 rounded w-fit mx-auto active:scale-95 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </motion.div>
  );
};

export default ExpandedContent;
