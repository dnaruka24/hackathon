import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Globe, Utensils, Tv, BookOpen } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    image:
      "https://ranveerbrar.com/wp-content/uploads/2021/02/Instagram-Ranveer-Brar.jpg",
    link: "https://www.instagram.com/ranveer.brar/",
  },
  {
    name: "YouTube",
    image:
      "	https://ranveerbrar.com/wp-content/uploads/2021/02/Youtube-Ranveer-Brar.jpg",
    link: "https://www.youtube.com/c/ChefRanveer",
  },
  {
    name: "Facebook",
    image:
      "	https://ranveerbrar.com/wp-content/uploads/2021/02/Facebook-Ranveer-Brar.jpg",
    link: "https://www.facebook.com/RanveerBrar",
  },
  { name: "Twitter", image: "https://ranveerbrar.com/wp-content/uploads/2021/02/Twitter-Ranveer-Brar.jpg", link: "https://twitter.com/ranveerbrar" },
  { name: "Linkedin", image: "https://ranveerbrar.com/wp-content/uploads/2021/02/Linkedin-Ranveer-Brar.jpg", link: "https://www.linkedin.com/in/ranveerbrar/" },
  { name: "Pinterest", image: "https://ranveerbrar.com/wp-content/uploads/2021/02/Pinterest-Ranveer-Brar.jpg", link: "https://in.pinterest.com/ChefRanveer/_created/" },
  { name: "Wikipedia", image: "	https://ranveerbrar.com/wp-content/uploads/2021/02/Wikipedia-Ranveer-Brar.jpg", link: "https://en.wikipedia.org/wiki/Ranveer_Brar" },
  { name: "In the News", image: "https://ranveerbrar.com/wp-content/uploads/2021/02/In-the-News-Ranveer-Brar.jpg", link: "https://ranveerbrar.com/press/" },
];

const achievements = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Youngest Executive Chef",
    description:
      "Became the youngest executive chef at a five-star hotel at age 25",
    year: "2003",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Indian of the Year",
    description: "Chef and TV Host of the Year award",
    year: "2017",
  },
  {
    icon: <Tv className="w-6 h-6" />,
    title: "Food Entertainer",
    description: "LFEGA Food Entertainer of the Year",
    year: "2018",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Best New Restaurant",
    description:
      "Banq Restaurant in Boston received Wallpaper magazine's Best New Restaurant in the World",
    year: "2009",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Forbes Celebrity 100",
    description: "2nd chef to be featured on Forbes Celebrity 100 list",
    year: "2020s",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Outstanding Contribution",
    description:
      "Honored for Outstanding Contribution to Food & Beverage Industry",
    year: "2021",
  },
];

const careerHighlights = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "International Restaurants",
    description:
      "Founded Banq, a Franco-Asian fine dining restaurant in Boston, and multiple restaurants in Goa including Morisco and il Camino",
  },
  {
    icon: <Tv className="w-8 h-8" />,
    title: "Television & Media",
    description:
      "Judge on MasterChef India, hosted multiple cooking shows, and founded Hot Potato Films for culinary content creation",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Author & Educator",
    description:
      "Published cookbooks and created educational culinary content, sharing traditional and modern cooking techniques",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Influence",
    description:
      "Consulting for 17+ food brands, co-owning restaurants in North America, and promoting Indian cuisine worldwide",
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 min-h-screen pt-24 pb-12 px-6 text-white space-y-20">
      {/* Hero About Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center"
      >
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            src="https://media.assettype.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticle_images%2F2020%2F05%2F19%2FRanveer-Brar-1151935090-1569498292.jpg?w=900&auto=format%2Ccompress&fit=max"
            alt="Chef Ranveer Brar"
            className="rounded-2xl w-full md:w-96 h-150 object-cover shadow-2xl"
          />
          <div className="absolute -bottom-4 -right-4 bg-amber-500 text-black px-4 py-2 rounded-xl font-bold">
            Celebrity Chef
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.4 }}
          className="text-left md:w-1/2 space-y-6"
        >
          <div>
            <h1 className="text-5xl font-bold mb-2 text-white">
              Chef Ranveer Brar
            </h1>
            <p className="text-xl text-amber-400 font-semibold">
              Celebrity Chef | TV Host | Author | Restaurateur
            </p>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            Passion for food has driven me to every nook and corner of the
            world. From becoming the youngest executive chef at a five-star
            hotel at age 25, to hosting cooking shows and opening award-winning
            restaurants internationally, it is my love for cooking that has
            brought me this far. Through this website, I intend to take you on a
            culinary journey, exploring new places, cultures and flavours. Let's
            engage, exchange and evolve our skills and taste buds.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="bg-zinc-800 px-4 py-2 rounded-full border border-amber-500">
              <span className="text-amber-400 font-semibold">
                MasterChef Judge
              </span>
            </div>
            <div className="bg-zinc-800 px-4 py-2 rounded-full border border-amber-500">
              <span className="text-amber-400 font-semibold">
                Forbes Celebrity 100
              </span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Achievements Grid */}
      <motion.section
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Awards & Recognition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-amber-500 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-amber-400 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <span className="text-amber-400 font-bold text-lg">
                  {achievement.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Career Highlights */}
      <motion.section
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Career Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careerHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-700 p-8 rounded-2xl border border-zinc-600 hover:border-amber-500 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-amber-400 group-hover:scale-110 transition-transform">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Social Grid Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Follow & Connect
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ amount: 0.2 }}
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden shadow-lg text-center border border-zinc-700 hover:border-amber-500 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <p className="py-3 text-lg font-semibold text-white">
                {item.name}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
