"use client";

import { motion } from "framer-motion";
import { LuBrain } from "react-icons/lu";
import { IoHardwareChipOutline } from "react-icons/io5";
import { GrGlobe } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
const cards = [
  {
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making",
    icon: <LuBrain size={39} />,
  },
  {
    title: "Deep Learning",
    description: "Sophisticated deep learning models for patter recongnition",
    icon: <IoHardwareChipOutline size={39} />,
  },
  {
    title: "Advanced ML",
    description: "Cutting-edge machine learning algorithms",
    icon: <FaCode size={39} />,
  },
  {
    title: "Global Scale",
    description: "Distributed AI processing across global networks",
    icon: <GrGlobe size={39} />,
  },
];

const Powered = () => {
  return (
    <div id="Powered" className="p-10 bg-black ">
      <h1 className="text-[60px] text-center font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Powered by Advanced AI
      </h1>
      <h2 className="text-[20px] text-white text-center mb-4">Built on cutting-edge neural architecture</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border-2 border-purple-500 shadow-lg rounded-2xl overflow-hidden relative group cursor-pointer p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-white mb-4 border-2 rounded-xl border-purple-700  bg-gradient-to-r from-blue-600 to-purple-600"
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              {card.icon}
            </motion.div>
            <h3 className="text-lg text-white ">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Powered;
